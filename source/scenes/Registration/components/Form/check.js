const student = [
  { field: 'school', required: true },
  { field: 'major', required: true },
  { field: 'graduationYear', required: true },
];
const personal = [
  { field: 'shirtSize', required: true },
  { field: 'transportation', required: true },
  { field: 'diet', required: true },
  { field: 'phone', required: true },
  { field: 'age', required: true },
  { field: 'gender', required: true },
];
const professional = [{ field: 'isBeginner', required: true }, { field: 'resume', required: true }];
const beginner = [
  { field: 'versionControl', required: true },
  { field: 'pullRequest', required: true },
  { field: 'yearsExperience', required: true },
];
const other = [{ field: 'priorAttendance', required: true }];
const team = [];

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
