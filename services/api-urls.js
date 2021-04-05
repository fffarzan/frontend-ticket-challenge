export const ApiUrls = {
  map: {
    getAll: (api) => api.$get('/map'),
    get: (api, payload) => api.$get(`/map/${payload.id}`),
    buy: (api, payload) => api.$post(`/map/${payload.mapId}/ticket`, payload),
  },
}
