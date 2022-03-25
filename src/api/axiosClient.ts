import axios from 'axios'
import queryString from 'query-string'

const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    },
    paramsSerializer: (params) => queryString.stringify(params),
})

axiosClient.interceptors.request.use(async (config: any) => {
    const token: string = localStorage.getItem('token') || ''

    if (token) {
        config.headers.Authorization = `Bearer ${token.substring(1, token.length - 1)}`
    }

    return config
})

axiosClient.interceptors.response.use(
    (response) => {
        if (response && response.data) {
            return response.data
        }

        return response
    },
    (error) => {
        throw error
    }
)

export default axiosClient
