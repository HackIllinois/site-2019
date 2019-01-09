/* eslint no-useless-escape: 0 */
export const isNumeric = x => /^\d+$/.test(x);
export const checkGraduationYear = year => isNumeric(year) && +year >= new Date().getFullYear();
export const checkAge = x => {
  const d = Number.parseInt(x, 10);
  return !Number.isNaN(d) && d > 0 && d < 120;
};
export const checkPhoneNumber = x => /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(x);
export const checkLinkedin = x => /^((https?):\/\/)?(www\.)?linkedin\.com.*/.text(x) || x === '';
export const checkResume = file => {
  // Enforce file extensions, can't actually validate
  // PDF/DOCX any other way
  const ext = file.name.match(/\.([^\.]+)$/)[1];
  if (ext !== 'pdf' && ext !== 'docx') {
    return false;
  }

  // Enforce max file size (2MB)
  return file.size <= 2000000;
};
