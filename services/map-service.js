import { ApiUrls } from '~/services/api-urls'

// public function to handle apis
// const actionFn = ({ apiModule, apiMethod }, payload = null) => async (api) => {
//   const { customResult, success, message, errors } = await ApiUrls[apiModule][
//     apiMethod
//   ](api, payload)

//   return new Promise((resolve, reject) => {
//     if (success) resolve({ success, customResult })
//     else reject(message || errors[0].exception)
//   })
// }

// async functions to get data from server
export const MapService = {
  getAllAsync: async ({ $actionFn }) => {
    const fn = ({ apiModule, apiMethod }) => async (api) => {
      const { data } = await ApiUrls[apiModule][apiMethod](api)

      return new Promise((resolve) => {
        resolve(data)
      })
    }

    return await $actionFn(fn({ apiModule: 'map', apiMethod: 'getAll' }))()
  },
  getAsync: async ({ $actionFn }, id) => {
    const fn = ({ apiModule, apiMethod }) => async (api) => {
      const { data } = await ApiUrls[apiModule][apiMethod](api, id)

      return new Promise((resolve) => {
        resolve(data)
      })
    }

    return await $actionFn(fn({ apiModule: 'map', apiMethod: 'get' }))()
  },
  // buyAsync: async ({ $actionFn }, payload) =>
  //   await $actionFn(
  //     actionFn({ apiModule: 'map', apiMethod: 'buy' }, payload)
  //   )(),
}
