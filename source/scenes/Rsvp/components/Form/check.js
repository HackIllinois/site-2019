const general = [
  { field: 'isAttending', required: true },
  { field: 'phone', required: true },
  { field: 'diet', required: false },
  { field: 'transportation', required: true },
  { field: 'lightningInterest', required: true },
];
const language = [
  { field: 'python', required: true },
  { field: 'javascript', required: true },
  { field: 'java', required: true },
  { field: 'c', required: true },
  { field: 'go', required: true },
  { field: 'ruby', required: true },
  { field: 'rust', required: true },
];
const techInterests = [
  { field: 'dataScience', required: true },
  { field: 'webDev', required: true },
  { field: 'systems', required: true },
  { field: 'appDev', required: false },
  { field: 'hardware', required: false },
  { field: 'devTools', required: false },
];
const openSource = [{ field: 'openSource', required: false }];

const paneOrder = [general, language, techInterests, openSource, []];

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
