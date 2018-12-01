export const READ_JWT = 'READ_JWT';

export function readJWT(jwt) {
  return {
    type: READ_JWT,
    jwt,
  };
}
