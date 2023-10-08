import React from 'react';
import {useParams} from "react-router-dom";

const MessagePage = () => {
  const {msg} = useParams();
  return (
      <div style={{display: 'flex', justifyContent: 'center', marginTop: '30%'}}>
        <h1>{msg}</h1>
      </div>
  );
};

export default MessagePage;