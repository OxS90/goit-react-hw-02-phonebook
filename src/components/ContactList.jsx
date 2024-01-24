import { Component } from 'react';
import PropTypes from 'prop-types';

class ContactList extends Component {
  render() {
    const { listToSearch, deleteFunction } = this.props;
    return (
      <ul>
        {listToSearch.map(contact => (
          <li key={contact.id}>
            <span>
              {contact.name}: {contact.number}
            </span>
            <button onClick={deleteFunction} id={contact.id}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

ContactList.propTypes = {
  listToSearch: PropTypes.array.isRequired,
  deleteFunction: PropTypes.func.isRequired,
};

export default ContactList;
