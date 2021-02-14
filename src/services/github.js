export default httpClient => ({
  searchUsers: async ({ q = '' } = {}) => {
    try {
      const response = await httpClient.get('/search/users', { params: { q } })
      return response.data
    } catch (error) {
      throw new Error('search users fail')
    }
  }
})
