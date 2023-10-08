import React from 'react';
import cl from './answers.module.css'

const Answers = ({formDetails}) => {
  return (
      <>
        <div className={cl.formDetails}>
          <div>Title: {formDetails.name}</div>
          <div>Answer count: {formDetails.answersCount}</div>
        </div>

        <div style={{width: '100%'}}>
          {formDetails.answers.map((answer,index) => (
              <div className={cl.answers} key={answer.userId + index}>
                <div>Answers from userId: {answer.userId}</div>
                {answer.customPropertyValues.map((value, index) => (
                    <div className={cl.answer_values} key={index}>
                      <div>Title: {value.customPropertyName}</div>
                      <div>Value: {value.value}</div>
                      <div>Type: {value.customPropertyType}</div>
                    </div>
                ))}
              </div>
          ))}
        </div>
      </>
  );
};

export default Answers;