import React from 'react';
import cl from './myForms.module.css'
import MyLink from "../UI/MyLink/MyLink.jsx";

const MyForms = ({myForms}) => {
  return (
      <div className={cl.forms_container}>
        {myForms.map((form) => (
            <div key={form.id} className={cl.formItem}>
              <div><strong>Title:</strong>  {form.name}</div>
              <div><strong>Description:</strong> {form.description}</div>
              <div><strong>Answer count:</strong> {form.answersCount}</div>
              <MyLink className={cl.link} to={`${form.id}`} value={'View answers'}/>
            </div>
        ))}
      </div>
  );
};

export default MyForms;