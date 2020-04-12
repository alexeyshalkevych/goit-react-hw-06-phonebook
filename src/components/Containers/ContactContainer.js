import { connect } from 'react-redux';
import Contact from '../Contact/Contact';
import { deleteContact } from '../../redux/contactsActions';

const mapDispatchToProps = {
  deleteContact,
};

export default connect(null, mapDispatchToProps)(Contact);
