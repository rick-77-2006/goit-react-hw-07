import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../redux/contactsSlice";
import Contact from "./Contact";

const listItemStyles = {
  display: "flex",
  flexWrap: "wrap",
  gap: 25,
};

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <div>
      <h2>Contact List</h2>
      <ul style={listItemStyles}>
        {filteredContacts.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
