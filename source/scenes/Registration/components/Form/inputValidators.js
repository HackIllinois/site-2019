/* eslint no-useless-escape: 0 */
export const isNumeric = x => !Number.isNaN(Number.parseInt(x, 10));
export const checkGraduationYear = year => isNumeric(year) && +year >= new Date().getFullYear();
export const checkAge = x => {
  const d = Number.parseInt(x, 10);
  return !Number.isNaN(d) && d > 0 && d < 120;
};
export const checkResumeExt = file => {
  const ext = file.name.match(/\.([^\.]+)$/)[1];
  return ext === 'pdf' || ext === 'docx';
};
