import { useDispatch } from 'react-redux';
import { deleteContact } from '../redux/contactsOps';
import css from './Contact.module.css';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  console.log(contact)

  return (
    <li className={css.list}>
      <p>Name: {contact.name}</p>
      <p>Number: {contact.number}</p> 
      <button onClick={handleDelete} className={css.btn}>Delete</button>
    </li>
  );
};

export default Contact;

