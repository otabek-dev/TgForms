import React from 'react';
import {useTelegram} from "../../Hooks/useTelegram.js";
import {useParams} from "react-router-dom";

const CreateAnswerPage = () => {
  const {formId} = useParams()


  return (
      <div>
        <h1>Create answer page {formId}</h1>
      </div>
  );
};

export default CreateAnswerPage;