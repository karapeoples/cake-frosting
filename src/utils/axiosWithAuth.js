import axios from 'axios'

export const axiosWithAuth = () => {
	const token = localStorage.getItem('token')

	return axios.create({
		headers: {
			'Content-Type': 'application/json',
			Authorization: `${token}`,
		},
		baseURL: 'http://localhost:4994/api',
	})
}
