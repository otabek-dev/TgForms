import React, {useEffect, useState} from 'react';
import {useTelegram} from "../../Hooks/useTelegram.js";
import {useNavigate, useParams} from "react-router-dom";
import {useFetching} from "../../Hooks/useFetching.js";
import FormService from "../../API/Form.service.js";
import cl from './createAnswerPage.module.css'
import Button from "../../Components/UI/Button/Button.jsx";
import Input from "../../Components/UI/Input/Input.jsx";
import ErrorModal from "../../Components/UI/ErrorModal/ErrorModal.jsx";
import Loader from "../../Components/UI/Loader/Loader.jsx";

const CreateAnswerPage = () => {
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("Err");
  const {formId} = useParams()
  const navigate = useNavigate()
  const {user} = useTelegram()
  const [answerDTO, setAnswerDTO] = useState({
    username: "string",
    formId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    customPropertyValues: [
    {
      value: "",
      typeProperty: "", // bool , string , int
      propertyTitle: "",
      customPropertyId: ""
    }]
  })
  const [formWithCustomProperties, setFormWithCustomProperties] = useState({
    id: "",
    name: "",
    description: "",
    customProperties: [
      {
        id: "",
        name: "",
        typeProperty: "", // bool , string , int
        customPropertyValues: []
      }
    ]
  })

  const [fetchFormByIdWithCustomProperties, isLoading, error] = useFetching(async (formId) => {
    const response = await FormService.GetFormByIdWithCustomProperties(formId)
    setFormWithCustomProperties(response.data.data)
  })

  const [fetchCreateAnswer, isLoading2] = useFetching(async (answerDTO) => {
    const response = await FormService.CreateAnswer(answerDTO)
    navigate(`/${response.data.message}`)
  })

  useEffect(() => {
    fetchFormByIdWithCustomProperties(formId)
    console.log(formWithCustomProperties)
  }, [])

  useEffect(() => {
    setAnswerDTO({
      username: user.id,
      formId: formWithCustomProperties.id,
      customPropertyValues: formWithCustomProperties.customProperties.map((property) => ({
        value: "",
        typeProperty: property.typeProperty,
        propertyTitle: property.name,
        customPropertyId: property.id
      }))
    })

  }, [formWithCustomProperties])

  const handleCreateAnswer = () => {
    for (const customField of answerDTO.customPropertyValues) {
      if (customField.value.trim() === "") {
        setShowErrorModal(true);
        setErrorMessage("Custom field title is required.");
        return;
      }
    }

    fetchCreateAnswer(answerDTO)
    console.log(answerDTO)
  }

  const handleCustomPropertyValueChange = (customPropertyId, value) => {
    setAnswerDTO((prevData) => ({
      ...prevData,
      customPropertyValues: prevData.customPropertyValues.map((item) =>
          item.customPropertyId === customPropertyId ? { ...item, value } : item
      ),
    }));
  };

  const handleCloseErrorModal = () => {
    setShowErrorModal(false);
  };

  return (
      <div  className={cl.container}>
        {isLoading || isLoading2
          ? <Loader/>
          : <>
              <h1>Create answer</h1>
              {showErrorModal && (
                  <ErrorModal errorMessage={errorMessage} onClose={handleCloseErrorModal} />
              )}
              {formWithCustomProperties === null
              || formWithCustomProperties === undefined
              || formWithCustomProperties.id === '' ? <h1>{error}</h1> : <></>}

              <div className={cl.properties_container}>
                <div>Title: {formWithCustomProperties.name}</div>
                <div>Description: {formWithCustomProperties.description}</div>
              </div>

              {answerDTO.customPropertyValues.map((property) => (
                  <div className={cl.properties_container} key={property.customPropertyId}>
                    <Input
                        style={{width: '100%'}}
                        type={property.typeProperty === 'int' ? 'number': 'text'}
                        placeholder={property.propertyTitle}
                        name="name"
                        maxLength={99}
                        value={answerDTO.customPropertyValues.find(
                            (item) => item.customPropertyId === property.customPropertyId).value
                        }
                        onChange={(e) =>
                            handleCustomPropertyValueChange(property.customPropertyId, e.target.value)
                        }
                    />
                    {property.typeProperty} <br/>
                  </div>
              ))}

              <Button style={{width: '100%'}} onClick={handleCreateAnswer}>Send answer</Button>
            </>
        }
      </div>
  );
};

export default CreateAnswerPage;