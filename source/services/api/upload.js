/* eslint no-useless-escape: 0 */
import store from '../store';

const uploadRoute = `${process.env.API_ENDPOINT}/upload`;

export default function uploadResume(resume: File) {
  return fetch(`${uploadRoute}/resume/upload/`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: store.getState().auth.jwt,
    },
  })
    .then(response => {
      if (response.status >= 400) {
        throw new Error(response);
      }
      return response.json();
    })
    .then(body => {
      const ext = resume.name.match(/\.([^\.]+)$/)[1];
      let contentType = 'application/pdf';
      if (ext === 'docx') {
        contentType = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
      }

      return fetch(body.resume, {
        method: 'PUT',
        headers: {
          'Content-Type': contentType,
        },
        body: resume,
      });
    })
    .then(response => {
      if (response.status >= 400) {
        throw new Error(response);
      }
      return response;
    });
}
