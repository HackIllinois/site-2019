import * as selectOptions from 'scenes/Registration/components/Form/Panes/selectOptions';
import store from '../store';

const registrationRoute = `${process.env.API_ENDPOINT}/registration`;

const serialize = data => {
  const serialized = {};
  serialized.school = selectOptions.schools[data.school].text;
  serialized.major = data.major;
  serialized.graduationYear = Number.parseInt(data.graduationYear, 10);
  serialized.shirtSize = selectOptions.shirtSizes[data.shirtSize].value;
  serialized.transportation = selectOptions.transportation[data.transportation].value;
  serialized.diet = selectOptions.diet[data.diet].value;
  serialized.phone = data.phone;
  serialized.age = Number.parseInt(data.age, 10);
  serialized.gender = selectOptions.genderOptions[data.gender].value;
  serialized.isBeginner = selectOptions.yn[data.isBeginner].value;
  serialized.linkedin = data.linkedin;
  if (data.interests === -1) {
    serialized.interests = [];
  } else {
    serialized.interests = [selectOptions.careerInterests[data.interests].value];
  }
  serialized.skills = data.skills.split(',');
  serialized.priorAttendance = selectOptions.yn[data.priorAttendance].value;
  serialized.extraInfo = data.extraInfo;
  serialized.teamMembers = data.teamMembers.split(',');
  serialized.beginnerInfo = {
    versionControl: selectOptions.range[data.versionControl].value,
    pullRequest: selectOptions.range[data.pullRequest].value,
    yearsExperience: Number.parseInt(data.yearsExperience, 10),
    technicalSkills: data.technicalSkills.split(','),
  };
  return serialized;
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
