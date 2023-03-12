export const saveToLocalStorage = state => {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem('phonebook-list', serialisedState);
  } catch (e) {
    console.warn(e);
  }
};
JSON.parse(localStorage.getItem('phonebook-list'));

export const loadFromLocalStorage = () => {
  try {
    const serialisedState = localStorage.getItem('phonebook-list');
    if (serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
};
