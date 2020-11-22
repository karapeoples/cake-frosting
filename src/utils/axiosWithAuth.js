import axios from 'axios'

export const axiosWithAuth = () => {
	const token = localStorage.getItem('token')
	const role = localStorage.getItem('role')

	return axios.create({
		headers: {
			'Content-Type': 'application/json',
			Authorization: token,
			role,
		},
		baseURL: 'https://turn-cake.herokuapp.com/api',
	})
}
