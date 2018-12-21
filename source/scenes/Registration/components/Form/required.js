const student = ['school', 'major', 'graduationYear'];
const personal = ['shirtSize', 'transportation'];
const professional = ['isBeginner'];
const beginner = ['versionControl', 'pullRequest', 'yearsExperience'];
const other = ['priorAttendance'];
const team = [];

const paneOrder = [student, personal, professional, beginner, other, team];

const required = (pane, data) =>
  paneOrder[pane].filter(field => data[field] === '' || data[field] === -1);

export default required;
