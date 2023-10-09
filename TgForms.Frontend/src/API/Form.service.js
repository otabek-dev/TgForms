import Config from "./Config.js";
import axios from "axios";

export default class FormService {
  static url = Config.BaseUrl

  static async CreateForm(createFormDto) {
    const response = await axios.post(
        this.url + `/api/forms`, createFormDto, {
        headers: {
          "ngrok-skip-browser-warning": "6024"
        }});
    return response;
  }

  static async CreateAnswer(answerDto) {
    const response = await axios.post(
        this.url + `/api/Answers`, answerDto, {
          headers: {
            "ngrok-skip-browser-warning": "6024"
          }});
    return response;
  }

  static async GetMyFormsByTgId(userId) {
    const response = await axios.get(
        this.url + '/api/Users/GetMyForms/' + `${userId}`, {
        headers: {
          "ngrok-skip-browser-warning": "6024"
        }});
    return response;
  }

  static async GetFormDetailsById(formId) {
    const response = await axios.get(
        this.url + '/api/Forms/detailsById/' + `${formId}`, {
          headers: {
            "ngrok-skip-browser-warning": "6024"
          }});
    return response;
  }

  static async GetFormByIdWithCustomProperties(formId) {
    const response = await axios.get(
        this.url + '/api/Forms/' + `${formId}`, {
          headers: {
            "ngrok-skip-browser-warning": "6024"
          }});
    return response;
  }


}