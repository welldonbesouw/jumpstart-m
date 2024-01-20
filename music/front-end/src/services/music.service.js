import axios from "axios";

const API_URL = "api/music/";

class MusicService {
  repairRequest(repairDetails) {
    return axios.post(API_URL + "repairs", repairDetails);
  }

  enrollStudent(enrollDetails) {
    return axios.post(API_URL + "enroll", enrollDetails);
  }
}

export default new MusicService();
