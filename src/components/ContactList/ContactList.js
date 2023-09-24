import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { List, Li, Span, Wrap, Delete } from './ContactListStyles.js';
import { getFilter } from 'redux/selectors.js';
import { getContacts } from 'redux/selectors.js';

const ContactList = ({ changeList }) => {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);
  let persons = filter.filter
    ? contacts.filter(contact => contact.name.includes(filter.filter))
    : contacts;

  return (
    <List>
      {persons.map(person => (
        <Li key={person.id}>
          <Wrap>
            <Span>
              <Span>{person.name}</Span>
              <Span>:{person.number}</Span>
              <Span>
                <Delete onClick={e => changeList(person.id)}>Delete</Delete>
              </Span>
            </Span>
          </Wrap>
        </Li>
      ))}
    </List>
  );
};

export { ContactList };

ContactList.propTypes = {
  changeList: PropTypes.func.isRequired,
};
