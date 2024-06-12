import css from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';

export default function Contact({ contact: { id, name, number } }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
  };
  return (
    <div className={css.contact}>
      <p className={css.contactName}>Name: {name}</p>
      <p className={css.contactNumber}>Number: {number}</p>
      <button className={css.deleteButton} type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
