import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import CreateFormPage from "./Components/CreateFormPage/CreateFormPage.jsx";
import MyFormsPage from "./Components/MyFormsPage/MyFormsPage.jsx";
import MyFormDetailPage from "./Components/MyFormDetailPage/MyFormDetailPage.jsx";
import MessagePage from "./Components/NotFoundPage/MessagePage.jsx";
import CreateAnswerPage from "./Components/CreateAnswerPage/CreateAnswerPage.jsx";

function App() {

  return (
    <Router>
      <Routes>
        <Route path={"create-form"} element={<CreateFormPage />} />
        <Route path={'my-forms'} element={<MyFormsPage />} />
        <Route path={'my-forms/:formId'} element={<MyFormDetailPage />} />
        <Route path={'create-answer/:formId'} element={<CreateAnswerPage />} />

        <Route path={":msg"} element={<MessagePage />} />
      </Routes>
    </Router>
  )
}

export default App
