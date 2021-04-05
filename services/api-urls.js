export const ApiUrls = {
  map: {
    getAll: (api) => api.$get('/map'),
    get: (api, id) => api.$get(`/map/${id}`),
    buy: (api, payload) => api.$post(`/map/${payload.mapId}/ticket`),
  },
}
