import React, {useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useTelegram} from "../../Hooks/useTelegram.js";

const MessagePage = () => {
  const {msg} = useParams();
  const {user, startParam} = useTelegram();
  console.log(user)
  return (
      <div style={{display: 'flex', justifyContent: 'center', marginTop: '30%'}}>
        <h1>{msg}</h1>
      </div>
  );
};

export default MessagePage;