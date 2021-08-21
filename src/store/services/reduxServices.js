import axios from 'axios';

const app_token = "VrgQgvOSk7wc8j8Ra4YkjUEGj"

const loginUser = async user => {
  try {
    const res = await axios.post(`/api/auth/login`, user)
    const { token } = res.data
    const finalUser = { ...res.data.user, token }
    localStorage.setItem('user', JSON.stringify(finalUser))
    return finalUser
  } catch (error) { console.log(error) }
}

const registerUser = async data => {
  try {
      const {  name, email, phone, password } = data
    const res = await axios.post(`/api/auth/register`, {
      name,
      email,
      password,
      phone
    })
    return res.data.user
  } catch (err) { console.log(err) }
}

const editUser = async data => {
  try {
    const { token } = data.user
    const res = await axios.post(`/api/users`, data ,
    { headers : { authorization : 'Bearer ' + token }})
      localStorage.removeItem('user')
      localStorage.setItem('user', JSON.stringify({...res.data, token}))
      return res.data    
} catch (err) { console.log(err) }
}

 const setUserVoid = async () => {
    try {
        await axios.get(`/api/auth/logout`)
        localStorage.removeItem('user')
        return {}
    } catch (err) { console.log(err) }
}

export { 
  loginUser, 
  registerUser,
  setUserVoid,
  editUser
 }
