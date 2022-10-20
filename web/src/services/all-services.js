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
  return http.get(`/notes/${id}`)
}
export function editNote(id, data){
  return http.patch(`/notes/${id}`, data)
}

export function createNote(id) {
  return http.post('/notes', id)
}


export function registerPj(data) {
  // pj.image = pj.image[0]
  // const data = new FormData()
  
  // Object.keys(pj).forEach(key => {
  //   data.append(key, pj[key])
  // })

  return http.post('/register', data)
}

export function login(data) {
  return http.post("/authenticate", data)
}

export function logout(){
  return http.delete("/logout")
}