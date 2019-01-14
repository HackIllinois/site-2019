// @flow
export const SET_ERROR = 'SET_ERROR';

export function setError(error: string) {
  return {
    type: SET_ERROR,
    error,
  };
}
