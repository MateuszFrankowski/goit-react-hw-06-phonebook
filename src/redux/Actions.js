import { nanoid } from 'nanoid';
export const addContact = (name, number) => {
  return {
    type: 'task/addContact',
    payload: { id: nanoid(), name: name, number: number },
  };
};
export const deleteContact = taskID => {
  return {
    type: 'taks/deleteContact',
    payload: taskID,
  };
};
export const setNameFilter = filter => {
  return {
    type: 'filters/setNameFilter',
    payload: filter,
  };
};
