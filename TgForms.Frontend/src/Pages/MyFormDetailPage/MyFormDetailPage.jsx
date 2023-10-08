import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useFetching} from "../../Hooks/useFetching.js";
import FormService from "../../API/Form.service.js";
import cl from './myFormDetailPage.module.css'
import {useTelegram} from "../../Hooks/useTelegram.js";
import Loader from "../../Components/UI/Loader/Loader.jsx";
import Answers from "../../Components/Answers/Answers.jsx";

const MyFormDetailPage = () => {
  const {formId} = useParams()
  const navigate = useNavigate()
  const {tg} = useTelegram();
  const [formDetails, setFormDetails] = useState({
    id: "",
    name: "",
    answersCount: 0,
    answers: [
      {
        userId: 0,
        customPropertyValues: [
          {
            value: "true",
            customPropertyName: "Test check",
            customPropertyType: "bool"
          }
        ]
      }
    ]
  })

  const [fetchFormDetailsById, isLoading, error] = useFetching(async (userId) => {
    const response = await FormService.GetFormDetailsById(userId)
    setFormDetails(response.data.data)
  })

  useEffect(() => {
      tg.BackButton.show();
      tg.BackButton.onClick(() => {
        navigate(-1)
        tg.BackButton.hide()
      })

    return () => {
      tg.BackButton.offClick()
    }
  }, [])

  useEffect(() => {
    fetchFormDetailsById(formId)
  }, [])

  return (
      <div className={cl.container}>
        {isLoading
          ? <Loader/>
          : <Answers formDetails={formDetails}/>
        }
      </div>
  );
};

export default MyFormDetailPage;