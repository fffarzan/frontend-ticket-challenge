import { apiUrl } from '@/utils/environment'

export default ({ $axios }, inject) => {
  // create base url with axios
  $axios.setBaseURL(apiUrl.baseURL)

  // create a general function to handle apis
  const actionFn = (fn) => async () => {
    let result

    try {
      result = await fn($axios)
    } catch (e) {
      result = false
    }

    return result
  }

  // inject general function to nuxt instance
  inject('actionFn', actionFn)
}
