import api from './api'

const usersService = {}

usersService.getRoot = () => api.get('/')
usersService.getUsers = () => api.get(`/users`)
usersService.getUserById = (id) => api.get(`/users/${id}`)
usersService.createUser = (data) => api.post(`/users/`, data)
usersService.deleteUser = (id) => api.delete(`/users/${id}`)
usersService.updateUser = (id, data) => api.put(`/users/${id}`, data)
usersService.login=(loginData) => api.post('auth', loginData)
export default usersService
