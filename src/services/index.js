import axios from 'axios'
import GithubService from './github'

const httpClient = axios.create({
  baseURL: 'https://api.github.com'
})

export default {
  github: GithubService(httpClient)
}
