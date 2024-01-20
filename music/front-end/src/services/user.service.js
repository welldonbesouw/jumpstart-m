import axios from "axios";
import authHeader from "../services/auth-header";

const API_URL = "/me/api/user/";

class UserService {
  update(userDetails) {
    return axios.put(API_URL + userDetails.id, userDetails, {
      headers: authHeader(),
    });
  }
}

export default new UserService();
