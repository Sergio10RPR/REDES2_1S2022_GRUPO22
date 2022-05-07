import Axios from "axios";
import { BASE_URL } from "./Constantes";

export class APIService {
    header = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    getImages() {
        return Axios.get(`${BASE_URL}/getImages`, {}, this.header);
    }

    getDevelopers() {
        return Axios.get(`${BASE_URL}/getDevs`, {}, this.header);
    }

    getAdmins() {
        return Axios.get(`${BASE_URL}/getAdmins`, {}, this.header);
    }
}
