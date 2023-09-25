import { Div, Title, ContactsTitle } from './PhoneBookStyles.js';

import { ContactForm } from 'components/ContactForm/ContactForm.js';

import { ContactList } from 'components/ContactList/ContactList.js';

import { Filter } from 'components/Filter/Filter.js';

const PhoneBook = () => {
  return (
    <Div>
      <Title>Phonebook</Title>
      <ContactForm />
      <ContactsTitle>Contacts</ContactsTitle>
      <Filter />
      <ContactList />
    </Div>
  );
};

export { PhoneBook };
