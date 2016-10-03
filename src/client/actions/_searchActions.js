export const SEARCH_TERMS = 'SEARCH_TERMS'

export function submitQueryAndType (query, type) {
  return {
    type: SEARCH_TERMS,
    payload: {
      query: query,
      type: type
    }
  }
}