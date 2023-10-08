import React, {useEffect, useState} from 'react';
import {useFetching} from "../../Hooks/useFetching.js";
import FormService from "../../API/Form.service.js";
import {useTelegram} from "../../Hooks/useTelegram.js";
import Loader from "../../Components/UI/Loader/Loader.jsx";
import cl from "./myFormsPage.module.css";
import MyForms from "../../Components/MyForms/MyForms.jsx";
import {useNavigate, useSearchParams} from "react-router-dom";

const MyFormsPage = () => {
  const {user, webAppData} = useTelegram()
  const navigate = useNavigate();
  const [urlParams] = useSearchParams();
  const [myForms, setMyForms] = useState([{
    id: "",
    name: "",
    description: "",
    answersCount: 0
  }])

  const [fetchMyFormsByTgId, isLoading, error] = useFetching(async (userId) => {
    const response = await FormService.GetMyFormsByTgId(userId)
    console.log(response.data.data)
    if (response.data.data === undefined) {
      navigate('/forms not found')
    }
    setMyForms(response.data.data)
  })

  useEffect(() => {
    fetchMyFormsByTgId(urlParams.get('userId'))
  }, [])

  return (
      <div className={cl.container}>
        {isLoading
          ? <Loader />
          : <MyForms myForms={myForms}/>
        }
      </div>
  );
};

export default MyFormsPage;