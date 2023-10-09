import React, {useEffect} from 'react';
import {useTelegram} from "../../Hooks/useTelegram.js";
import {useNavigate} from "react-router-dom";

const RouteToCreateAnswerPage = () => {
  const {startParam} = useTelegram()
  const navigate = useNavigate()

  useEffect(() => {
    if (startParam !== undefined)
      navigate(`/create-answer/${startParam}`)
  }, [])

  return (
      <div>
        Forms not found
      </div>
  );
};

export default RouteToCreateAnswerPage;