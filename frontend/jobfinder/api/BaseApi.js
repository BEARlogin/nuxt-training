
export default class BaseApi {

  fetched = false;

  async fetchWithErrorHandling(callback) {
    try {
      return await callback
    } catch (e) {

    }
  }
}
