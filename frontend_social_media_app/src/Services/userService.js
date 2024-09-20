import axios from 'axios'

const UserService = {}

UserService.register = function (data) {

   
    return axios.post('http://localhost:5000/users/register', data )

}

UserService.singin = function (formdata){

    return axios.post('http://localhost:5000/users/signin',formdata)

}


export default UserService ; 