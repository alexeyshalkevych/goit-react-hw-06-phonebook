import { connect } from 'react-redux';
import { getAllContacts } from '../../redux/contactsActions';
import Phonebook from '../Phonebook/Phonebook';

const mapStateToProps = state => ({
  contacts: state.contacts,
});

const mapDispatchToProps = {
  getAllContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Phonebook);
