const authRoute = `${process.env.API_ENDPOINT}/auth`;

const redirectTarget = encodeURIComponent(`${process.env.BASE_URL}/auth/`);
const githubOAuthURL = `${authRoute}/github/?redirect_uri=${redirectTarget}`;

export function getGithubOAuthURL(path) {
  if (path) {
    const pathedRedirect = `${process.env.BASE_URL}/auth/?to=${encodeURIComponent(path)}`;
    return `${authRoute}/github/?redirect_uri=${encodeURIComponent(pathedRedirect)}`;
  }
  return githubOAuthURL;
}

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
