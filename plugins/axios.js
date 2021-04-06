import { apiUrl } from '@/utils/environment'

export default ({ store, $axios }, inject) => {
  // create base url with axios
  $axios.setBaseURL(apiUrl.baseURL)

  // create a general function to handle apis
  const actionFn = (fn) => async () => {
    let result

    try {
      store.dispatch('loader/toggle', true)
      result = await fn($axios)
    } catch (e) {
      store.dispatch('dialog/toggle')
      result = false
    } finally {
      store.dispatch('loader/toggle', false)
    }

    return result
  }

  // inject general function to nuxt instance
  inject('actionFn', actionFn)
}
