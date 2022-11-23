import axios from 'axios'

axios.post('api/Prod')
    .then(res => console.log(res.data))
