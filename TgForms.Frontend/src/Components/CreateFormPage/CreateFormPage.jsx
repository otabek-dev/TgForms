import React, {useState} from 'react';
import cl from './createFromPage.module.css'
import {useTelegram} from "../../Hooks/useTelegram.js";
import {useFetching} from "../../Hooks/useFetching.js";
import FormService from "../../API/Form.service.js";
import ErrorModal from "../UI/ErrorModal/ErrorModal.jsx";
import CreateCustomFields from "../CreateCustomFields/CreateCustomFields.jsx";
import Button from "../UI/Button/Button.jsx";
import Input from "../UI/Input/Input.jsx";
import Loader from "../UI/Loader/Loader.jsx";
import {useNavigate} from "react-router-dom";
import MessagePage from "../NotFoundPage/MessagePage.jsx";

const CreateFormPage = () => {
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("Err");
  const {tg, user} = useTelegram()
  const navigate = useNavigate();
  const userDto = {
    id: 777,
    name: 'user.name',
    username: 'user.username'
  }
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    customProperties: [{}]
  })
  const [customFields, setCustomFields] = useState([]);
  const [fetchCreateFrom, isLoading, error] = useFetching(async (createFormDto) => {
    const response = await FormService.CreateForm(createFormDto)
    const msg = response.data.message
    navigate(`/${msg}`)
  })

  const handleCreate = async () => {
    if (formData.name.trim() === "") {
      setShowErrorModal(true);
      setErrorMessage("Title field is required.");
      return;
    }

    if (formData.description.trim() === "") {
      setShowErrorModal(true);
      setErrorMessage("Description field is required.");
      return;
    }

    if (customFields.length === 0) {
      setShowErrorModal(true);
      setErrorMessage("There must be at least one custom field.");
      return;
    }

    for (const field of customFields) {
      if (field.name.trim() === "") {
        setShowErrorModal(true);
        setErrorMessage("Custom field title is required.");
        return;
      }
    }

    formData.customProperties = customFields;
    const formDTO = formData
    const userDTO = userDto
    const createFormDto = {
      formDTO,
      userDTO
    }
    console.log(createFormDto)
    await fetchCreateFrom(createFormDto)
  };

  const handleAddCustomField = () => {
    setCustomFields((prevFields) => [
      ...prevFields,
      { name: "", typeProperty: "string" },
    ]);
  };

  const handleDeleteCustomField = (index) => {
    const updatedCustomFields = [...customFields];
    updatedCustomFields.splice(index, 1);
    setCustomFields(updatedCustomFields);
  };

  const handleChangeCustomField = (index, field, value) => {
    setCustomFields((prevFields) =>
        prevFields.map((item, i) => (i === index ? { ...item, [field]: value } : item))
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCloseErrorModal = () => {
    setShowErrorModal(false);
  };

  return (
      <div className={cl.container}>
        {showErrorModal && (
            <ErrorModal errorMessage={errorMessage} onClose={handleCloseErrorModal} />
        )}
        {isLoading
          ? <Loader />
          : <>
              <h1 style={{fontSize: '24px'}}>Create form</h1>
              <Input
                  style={{width: '100%'}}
                  type='text'
                  placeholder={'Title'}
                  name="name"
                  maxLength={20}
                  value={formData.name}
                  onChange={handleChange}
              />
              <textarea
                  className={cl.text_area}
                  placeholder={'Description'}
                  maxLength={120}
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
              />

              <CreateCustomFields customFields={customFields}
                                  handleAddCustomField={handleAddCustomField}
                                  handleChangeCustomField={handleChangeCustomField}
                                  handleDeleteCustomField={handleDeleteCustomField}/>

              <Button style={{width: '100%'}} onClick={handleCreate}>Create</Button>
            </>
        }
      </div>
  );
};

export default CreateFormPage;