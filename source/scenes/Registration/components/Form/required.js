const student = ['school', 'major', 'graduationYear'];
const personal = ['shirtSize', 'transportation', 'diet', 'phone', 'age', 'gender'];
const professional = ['isBeginner', 'resume'];
const beginner = ['versionControl', 'pullRequest', 'yearsExperience'];
const other = ['priorAttendance'];
const team = [];

const paneOrder = [student, personal, professional, beginner, other, team, []];

const required = (pane, data) =>
  paneOrder[pane].filter(field => data[field] === '' || data[field] === -1 || data[field] === null);

export default required;
