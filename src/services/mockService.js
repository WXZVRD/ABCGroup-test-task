import {api} from "../configs/axios.js";

export default {
    getPeople: async () => {
        try {
            const res = await api.get("https://swapi.dev/api/people/1/")
            return res.data
        } catch (e) {
            console.log(e)
        }
    }
}