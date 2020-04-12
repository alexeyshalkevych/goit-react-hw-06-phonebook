import { connect } from 'react-redux';
import ContactForm from '../ContactForm/ContactForm';
import { addContact } from '../../redux/contacts/contactsActions';
import { changeInput, resetForm } from '../../redux/form/formActions';
import getForm from '../../redux/form/formSelectors';

const mapStateToProps = state => ({
  form: getForm(state),
});

const mapDispatchToProps = {
  addContact,
  changeInput,
  resetForm,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
