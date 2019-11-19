import axios from "axios"

export const axiosWithAuth = () => {
     const token = localStorage.getItem("token");
     return axios.create({
          // baseURL: "https://fish-friends-resources.herokuapp.com/api",
          headers:{
               Authorization: token
          }
     })
}