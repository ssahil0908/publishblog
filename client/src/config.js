import axios from  "axios"

export const axiosInstance=axios.create(
    {
        baseURL:"https://publishblog.herokuapp.com/api/"
    }
)