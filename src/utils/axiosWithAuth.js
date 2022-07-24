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
		// baseURL: 'http://localhost:4994/api',
		baseURL: 'https://cake-base-be.openode.io/api'
	})
}
