import { useSelector, useDispatch } from 'react-redux';

import { Div, Title, ContactsTitle } from './PhoneBookStyles.js';

import { ContactForm } from 'components/ContactForm/ContactForm.js';

import { ContactList } from 'components/ContactList/ContactList.js';

import { Filter } from 'components/Filter/Filter.js';

import { addContact, deleteContact } from 'redux/contactsSlice.js';

import { setStatusFilter } from 'redux/filterSlice.js';

import { getContacts } from 'redux/selectors.js';

import { nanoid } from 'nanoid';

const PhoneBook = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);

  const handleChangeList = id => {
    dispatch(deleteContact(id));
  };

  const handleFilterChange = e => {
    dispatch(setStatusFilter(e.target.value));
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    let personId = nanoid();
    if (contacts.find(contact => contact.name === evt.target[0].value)) {
      alert(`${evt.target[0].value} is already in contacts`);
    } else {
      const element = {
        id: personId,
        name: evt.target[0].value,
        number: evt.target[1].value,
      };

      dispatch(addContact(element));
    }

    evt.target.reset();
  };

  return (
    <Div>
      <Title>Phonebook</Title>
      <ContactForm stateSubmit={handleSubmit} />
      <ContactsTitle>Contacts</ContactsTitle>
      <Filter changeState={handleFilterChange} />
      <ContactList changeList={handleChangeList} />
    </Div>
  );
};

export { PhoneBook };
