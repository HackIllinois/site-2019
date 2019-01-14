const student = [
  { field: 'school', required: true },
  { field: 'major', required: true },
  { field: 'graduationYear', required: true },
];
const personal = [
  { field: 'shirtSize', required: true },
  { field: 'transportation', required: true },
  { field: 'diet', required: false },
  { field: 'phone', required: true },
  { field: 'age', required: true },
  { field: 'gender', required: true },
];
const professional = [
  { field: 'linkedin', required: false },
  { field: 'resume', required: true },
  { field: 'interests', required: false },
  { field: 'skills', required: false },
  { field: 'technicalSkills', required: false },
];
const beginner = [
  { field: 'isBeginner', required: true },
  { field: 'isOSContributor', required: true },
  { field: 'versionControl', required: true },
  { field: 'pullRequest', required: true },
  { field: 'yearsExperience', required: true },
];
const other = [
  { field: 'priorAttendance', required: true },
  { field: 'extraInfo', required: false },
];
const team = [{ field: 'teamMembers', required: false }];

const paneOrder = [student, personal, professional, beginner, other, team, []];

export const required = (pane, data) =>
  paneOrder[pane]
    .filter(field => {
      if (!field.required) return false;
      const val = data[field.field];
      return val === '' || val === -1 || (Array.isArray(val) && val.length === 0) || val === null;
    })
    .map(x => x.field);

export const validatePane = (pane, err) => {
  const reducer = (acc, x) => acc && !(err[x.field] === true);
  return paneOrder[pane].reduce(reducer, true);
};
