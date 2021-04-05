import { ApiUrls } from '~/services/api-urls'

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
  buyAsync: async ({ $actionFn }, payload) => {
    const fn = ({ apiModule, apiMethod }) => async (api) => {
      const { data } = await ApiUrls[apiModule][apiMethod](api, payload)

      return new Promise((resolve) => {
        resolve(data)
      })
    }

    return await $actionFn(fn({ apiModule: 'map', apiMethod: 'buy' }))()
  },
}
