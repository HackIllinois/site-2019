/* eslint no-useless-escape: 0 */
export const isNumeric = x => /^\d+$/.test(x);
export const checkPhoneNumber = x => /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(x);

// Make sure option is selected and is unique for tech interests page
export const checkUnique = (cur, others) => cur >= 0 && !others.includes(cur);
