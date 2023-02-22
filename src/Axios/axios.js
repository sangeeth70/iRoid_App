import axios from 'axios'
import { BASE_URL } from '../constants/NetworkConstants'

const Instance = axios.create({
    baseURL:BASE_URL
})
export default Instance