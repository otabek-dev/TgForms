import React, {useEffect, useState} from 'react';
import {useFetching} from "../../Hooks/useFetching.js";
import FormService from "../../API/Form.service.js";
import {useTelegram} from "../../Hooks/useTelegram.js";
import Loader from "../../Components/UI/Loader/Loader.jsx";
import cl from "./myFormsPage.module.css";
import MyForms from "../../Components/MyForms/MyForms.jsx";

const MyFormsPage = () => {
  const {user} = useTelegram()
  const [myForms, setMyForms] = useState([{
    id: "",
    name: "",
    description: "",
    answersCount: 0
  }])

  const [fetchMyFormsByTgId, isLoading, error] = useFetching(async (userId) => {
    const response = await FormService.GetMyFormsByTgId(userId)
    console.log(response.data.data)
    setMyForms(response.data.data)
  })

  useEffect(() => {
    fetchMyFormsByTgId(user.id)
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