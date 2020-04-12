import { connect } from 'react-redux';
import ContactFilter from '../ContactFilter/ContactFilter';
import changeFilter from '../../redux/filter/filterActions';

const mapStateToProps = state => ({
  contacts: state.contacts,
  filter: state.filter,
});

const mapDispatchToProps = {
  changeFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactFilter);
