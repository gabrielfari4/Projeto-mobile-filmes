import axios from 'axios'


const apiFilmes = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        'content-type': 'application/json;charset=utf-8',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOGYzNjY5Y2IzMGQ0ZjlkNjIzNWZhMmU2YmJjMjZkZCIsInN1YiI6IjYxNmRmODU2MWU5MjI1MDA5M2VjZDNhYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Y46dNkF0FKXvPvo5O3OlnjhPRbHeupM1WsN3ui-H_W4'
    }
})


export default apiFilmes