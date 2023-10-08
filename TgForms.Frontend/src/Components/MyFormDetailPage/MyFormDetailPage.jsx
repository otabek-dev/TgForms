import React from 'react';
import {useParams} from "react-router-dom";

const MyFormDetailPage = () => {
  const {id} = useParams();
  return (
      <div>
        <h1>My form detail page {id}</h1>
      </div>
  );
};

export default MyFormDetailPage;