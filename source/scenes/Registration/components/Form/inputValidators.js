export const isNumeric = x => !Number.isNaN(Number.parseInt(x, 10));
export const checkGraduationYear = year => isNumeric(year) && +year >= new Date().getFullYear();
