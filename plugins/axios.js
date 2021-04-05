import { apiUrl } from '@/utils/environment'

export default ({ $axios }) => {
  $axios.setBaseURL(apiUrl.baseURL)
}
