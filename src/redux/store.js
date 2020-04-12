import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import contactsReducer from './contacts/contactsReducer';
import filterReducer from './filter/filterReducer';
import formReducer from './form/formReducer';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  form: formReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
