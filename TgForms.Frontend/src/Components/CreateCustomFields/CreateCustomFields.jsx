import React from 'react';
import classes from './createCustomFields.module.css'
import Button from "../UI/Button/Button.jsx";
import Input from "../UI/Input/Input.jsx";

const CreateCustomFields = ({
                              customFields,
                              handleChangeCustomField,
                              handleAddCustomField,
                              handleDeleteCustomField}) => {
  return (
      <>
        {customFields.map((field, index) => (
            <div key={index} className={classes.custom_field}>
              <Input
                  className={classes.custom_input}
                  placeholder={'Custom title'}
                  type="text"
                  value={field.name}
                  maxLength={20}
                  onChange={(e) => handleChangeCustomField(index, "name", e.target.value)}
              />

              <select
                  className={classes.select}
                  value={field.typeProperty}
                  onChange={(e) => handleChangeCustomField(index, "typeProperty", e.target.value)}
              >
                <option value="string">string</option>
                <option value="number">number</option>
                <option value="bool">bool</option>
              </select>
              <Button style={{padding: '5px'}} onClick={() => handleDeleteCustomField(index)}><i className="material-icons">delete</i></Button>
            </div>

        ))}
        <Button style={{width: '50%'}} onClick={handleAddCustomField}>
          Add field
        </Button>
      </>
  );
};

export default CreateCustomFields;