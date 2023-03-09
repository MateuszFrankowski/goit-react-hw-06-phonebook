// const [contacts, setContacts] = useState(
//   () => JSON.parse(localStorage.getItem('phonebook-list')) || []
// );

// useEffect(() => {
//   const phonebookListStringified = JSON.stringify(contacts);

//   window.localStorage.setItem('phonebook-list', phonebookListStringified);
// }, [contacts]);
import { combineReducers } from 'redux';
const contactsInitialState = {
  contacts: [],
};
const tasksReducer = (state = contactsInitialState, action) => {
  switch (action.type) {
    case 'tasks/addTask': {
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    }
    case 'tasks/deleteContact': {
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };
    }

    default:
      return state;
  }
};
const filterInitialState = {
  filter: '',
};
const filterReducer = (state = filterInitialState, action) => {
  switch (action.type) {
    case 'tasks/setNameFilter': {
      return {
        ...state,
        filter: action.payload,
      };
    }
    default:
      return state;
  }
};
export const rootReducer = combineReducers({
  tasks: tasksReducer,
  filter: filterReducer,
});
