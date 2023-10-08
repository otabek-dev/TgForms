import React, {useState} from 'react';
import cl from './createFromPage.module.css'
import {useTelegram} from "../../Hooks/useTelegram.js";
import {useFetching} from "../../Hooks/useFetching.js";
import FormService from "../../API/Form.service.js";
import ErrorModal from "../UI/ErrorModal/ErrorModal.jsx";

const CreateFormPage = () => {
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("Err");
  const {tg, user} = useTelegram()
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
    console.log(response)
  })

  const handleCreate = async () => {
    if (formData.name.trim() === "") {
      setShowErrorModal(true);
      setErrorMessage("Title field is required.");
      return; // Прекратить выполнение функции
    }

    if (formData.description.trim() === "") {
      setShowErrorModal(true);
      setErrorMessage("Description field is required.");
      return; // Прекратить выполнение функции
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
        return; // Прекратить выполнение функции
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
    fetchCreateFrom(createFormDto)
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
        <h1 style={{fontSize: '24px'}}>Create form</h1>
        <input
            className={cl.input}
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

        {customFields.map((field, index) => (
            <div key={index} className={cl.custom_field}>
                <input
                    className={cl.custom_input}
                    placeholder={'Custom title'}
                    type="text"
                    value={field.name}
                    maxLength={10}
                    onChange={(e)=> handleChangeCustomField(index, "name", e.target.value)}
                />

                <select
                    className={cl.select}
                    value={field.typeProperty}
                    onChange={(e)=> handleChangeCustomField(index, "typeProperty", e.target.value)}
                >
                  <option value="string">string</option>
                  <option value="number">number</option>
                  <option value="bool">bool</option>
                </select>
              <button className={cl.delete_button} onClick={() => handleDeleteCustomField(index)}><i className="material-icons">delete</i></button>
            </div>
        ))}

        <button className={cl.button + ' ' + cl.create_button}
                onClick={handleAddCustomField}>
          Add field
        </button>
        <button className={cl.button} onClick={handleCreate}>Create</button>
      </div>
  );
};

export default CreateFormPage;