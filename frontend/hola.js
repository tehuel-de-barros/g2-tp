import axios from 'axios'

axios.post('localhost:8000/api/Prod')
    .then(res => console.log(res.data))