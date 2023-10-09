import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import CreateFormPage from "./Pages/CreateFormPage/CreateFormPage.jsx";
import MyFormsPage from "./Pages/MyFormsPage/MyFormsPage.jsx";
import MyFormDetailPage from "./Pages/MyFormDetailPage/MyFormDetailPage.jsx";
import MessagePage from "./Pages/MsgPage/MessagePage.jsx";
import CreateAnswerPage from "./Pages/CreateAnswerPage/CreateAnswerPage.jsx";
import RouteToCreateAnswerPage from "./Pages/RouteToCreateAnswerPage/RouteToCreateAnswerPage.jsx";

function App() {

  return (
    <Router>
      <Routes>
        <Route path={"create-form"} element={<CreateFormPage />} />
        <Route path={'my-forms'} element={<MyFormsPage />} />
        <Route path={'my-forms/:formId'} element={<MyFormDetailPage />} />
        <Route path={'create-answer/:formId'} element={<CreateAnswerPage />} />

        <Route path={":msg"} element={<MessagePage />} />
        <Route path={"/"} element={<RouteToCreateAnswerPage />} />
      </Routes>
    </Router>
  )
}

export default App
