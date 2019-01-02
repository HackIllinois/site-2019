import * as selectOptions from 'scenes/Registration/components/Form/Panes/selectOptions';
import store from '../store';

const registrationRoute = `${process.env.API_ENDPOINT}/registration`;

const split = s => {
  const arr = s.split(',');
  const trimmed = arr.map(x => x.trim());
  return trimmed.filter(x => x !== '');
};

const serialize = data => {
  const serialized = {};
  serialized.school = selectOptions.schools[data.school].text;
  serialized.major = data.major;
  serialized.graduationYear = Number.parseInt(data.graduationYear, 10);
  serialized.shirtSize = selectOptions.shirtSizes[data.shirtSize].value;
  serialized.transportation = selectOptions.transportation[data.transportation].value;
  serialized.diet = data.diet;
  serialized.phone = data.phone;
  serialized.age = Number.parseInt(data.age, 10);
  serialized.gender = selectOptions.genderOptions[data.gender].value;
  serialized.isBeginner = selectOptions.yn[data.isBeginner].value;
  serialized.linkedin = data.linkedin;
  serialized.interests = data.interests;
  serialized.skills = split(data.skills);
  serialized.priorAttendance = selectOptions.yn[data.priorAttendance].value;
  serialized.extraInfo = data.extraInfo;
  serialized.teamMembers = split(data.teamMembers);
  serialized.beginnerInfo = {
    versionControl: selectOptions.range[data.versionControl].value,
    pullRequest: selectOptions.range[data.pullRequest].value,
    yearsExperience: Number.parseInt(data.yearsExperience, 10),
    technicalSkills: split(data.technicalSkills),
  };
  return serialized;
};

const findIndex = (data, field, comparisonField) => {
  console.log(field);
  for (let i = 0; i < selectOptions[field].length; i += 1) {
    if (selectOptions[field][i][comparisonField] === data) {
      return i;
    }
  }
  return -1;
};

const deserialize = data => {
  const res = {};
  res.school = findIndex(data.school, 'schools', 'text');
  res.major = data.major;
  res.graduationYear = data.graduationYear.toString(10);
  res.shirtSize = findIndex(data.shirtSize, 'shirtSizes', 'value');
  res.transportation = findIndex(data.transportation, 'transportation', 'value');
  res.diet = data.diet;
  res.phone = data.phone;
  res.age = data.age.toString(10);
  res.gender = findIndex(data.gender, 'genderOptions', 'value');
  res.isBeginner = findIndex(data.isBeginner, 'yn', 'value');
  res.linkedin = data.linkedin;
  res.interests = data.interests;
  res.skills = data.skills.join(', ');
  res.priorAttendance = findIndex(data.priorAttendance, 'yn', 'value');
  res.extraInfo = data.extraInfo;
  res.teamMembers = data.teamMembers.join(', ');
  res.versionControl = findIndex(data.beginnerInfo.versionControl, 'range', 'value');
  res.pullRequest = findIndex(data.beginnerInfo.pullRequest, 'range', 'value');
  res.yearsExperience = data.beginnerInfo.yearsExperience.toString(10);
  res.technicalSkills = data.beginnerInfo.technicalSkills.join(', ');
  return res;
};

export default function register(data) {
  const serializedData = serialize(data);
  return fetch(`${registrationRoute}/attendee/`, {
    method: 'POST',
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

export function fetchRegistrationData() {
  return fetch(`${registrationRoute}/attendee/`, {
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
    .then(data => deserialize(data));
}
