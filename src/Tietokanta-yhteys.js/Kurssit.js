import axios from 'axios'

const baseUrl = 'https://localhost:5001/api/kurssit'

const kurssit = axios.get(baseUrl)


export default kurssit