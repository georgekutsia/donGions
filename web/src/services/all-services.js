import axios from "axios"

const http = axios.create({baseURL:"http://localhost:3100/api/v1", withCredentials:true})

http.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    if (error?.response?.status === 401) {
      console.error("unauthenticated, redirect to login"); 
      localStorage.clear();
      window.location.replace("/profile");
    }
    return Promise.reject(error);
  }
);


export function getProfile() {
  return http.get("/profile");
}
export function getNotes(){
  return http.get("/notes")
}
export function getNote(id){
  return http.get(`/${id}`)
}

export function createNote(id) {
  // return http.post(('/notes', id).then(res => res.id))
  return http.post('/notes', id)
}
export function registerPj(pj) {
  // return http.post(('/notes', id).then(res => res.id))
  return http.post('/register', pj)
}

export function login(data) {
  return http.post("/authenticate", data)
}

export function logout(){
  return http.delete("/logout")
}