import * as selectOptions from 'scenes/Rsvp/Panes/selectOptions';
import store from '../store';

const rsvpRoute = `${process.env.API_ENDPOINT}/rsvp`;
const decisionRoute = `${process.env.API_ENDPOINT}/decision`;

// Read frontend data from form state, serialize to be compatible with api spec
const serialize = data => {
  const serialized = {};
  serialized.isAttending = selectOptions.yn[data.isAttending].value;
  serialized.phone = data.phone;
  serialized.diet = data.diet;
  serialized.transportation = selectOptions.transportation[data.transportation].value;
  serialized.lightningInterest = selectOptions.yn[data.lightningInterest].value;
  serialized.programmingExperience = {
    python: data.python,
    javascript: data.javascript,
    java: data.java,
    'cc++': data.c,
    go: data.go,
    ruby: data.ruby,
    rust: data.rust,
  };
  serialized.techInterests = new Array(6);
  serialized.techInterests[selectOptions.range[data.dataScience].value - 1] = 'DATASCIENCE';
  serialized.techInterests[selectOptions.range[data.webDev].value - 1] = 'WEBDEV';
  serialized.techInterests[selectOptions.range[data.systems].value - 1] = 'SYSTEMS';
  serialized.techInterests[selectOptions.range[data.appDev].value - 1] = 'APPDEV';
  serialized.techInterests[selectOptions.range[data.hardware].value - 1] = 'HARDWARE';
  serialized.techInterests[selectOptions.range[data.devTools].value - 1] = 'DEVTOOLS';
  serialized.osProject = data.openSource;

  return serialized;
};

const findIndex = (data, field, comparisonField) => {
  for (let i = 0; i < selectOptions[field].length; i += 1) {
    if (selectOptions[field][i][comparisonField] === data) {
      return i;
    }
  }
  return -1;
};

const deserialize = data => {
  // Takes data from the backend and formats it for the frontend components
  const res = {};
  res.isAttending = findIndex(data.isAttending, 'yn', 'value');
  res.phone = data.phone;
  res.diet = data.diet;
  res.transportation = findIndex(data.transportation, 'transportation', 'value');
  res.lightningInterest = findIndex(data.lightningInterest, 'yn', 'value');
  res.python = data.programmingExperience.python;
  res.javascript = data.programmingExperience.javascript;
  res.java = data.programmingExperience.java;
  res.c = data.programmingExperience['cc++'];
  res.go = data.programmingExperience.go;
  res.ruby = data.programmingExperience.ruby;
  res.rust = data.programmingExperience.rust;
  res.dataScience = data.techInterests.indexOf('DATASCIENCE');
  res.webDev = data.techInterests.indexOf('WEBDEV');
  res.systems = data.techInterests.indexOf('SYSTEMS');
  res.appDev = data.techInterests.indexOf('APPDEV');
  res.hardware = data.techInterests.indexOf('HARDWARE');
  res.devTools = data.techInterests.indexOf('DEVTOOLS');
  res.openSource = data.osProject;
  return res;
};

export default function rsvp(data) {
  const serializedData = serialize(data);
  const method = store.getState().rsvp.data === null ? 'POST' : 'PUT';
  return fetch(`${rsvpRoute}/`, {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: store.getState().auth.jwt,
    },
    body: JSON.stringify(serializedData),
  }).then(response => {
    if (response.status >= 400) {
      throw new Error(response);
    }
    return response.json();
  });
}

// For prepoluating form when a prior registration exists
export function fetchRsvpData() {
  return fetch(`${rsvpRoute}/`, {
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
    .then(data => deserialize(data), () => Promise.resolve(null));
}

export function fetchDecision() {
  return fetch(`${decisionRoute}/`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: store.getState().auth.jwt,
    },
  }).then(response => {
    if (response.status >= 400) {
      throw new Error(response);
    }
    return response.json();
  });
}
