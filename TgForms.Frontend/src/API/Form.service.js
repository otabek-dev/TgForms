import Config from "./Config.js";
import axios from "axios";

export default class FormService {
  static url = Config.BaseUrl

  static async CreateForm(createFormDto) {
    const response = await axios.post(this.url + `/api/forms`, createFormDto, {
        headers: {
          "ngrok-skip-browser-warning": "6024"
        }})
    return response;
  }
}