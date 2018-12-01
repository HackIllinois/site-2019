const authRoute = `${process.env.API_ENDPOINT}/auth`;

export default function authenticateCode(code) {
  return fetch(`${authRoute}/code/github/`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ code }),
  }).then(response => {
    if (response.status >= 400) {
      throw new Error(response);
    }
    return response.json();
  });
}
