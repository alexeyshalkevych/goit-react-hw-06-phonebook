import { connect } from 'react-redux';
import ContactList from '../ContactList/ContactList';
import { getContactsWithFilter } from '../../redux/contacts/contactsSelectors';

const mapStateToProps = state => ({
  contacts: getContactsWithFilter(state),
});

export default connect(mapStateToProps)(ContactList);
