import { useSelector, useDispatch } from "react-redux";
import { selectContacts, selectFilter } from "../../redux/selectors";
import { deleteContact } from "../../redux/contactsSlice";
import scss from "./ContactsItem.module.scss";

const ContactsItem = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleDeleteContact = e => {
    const id = e.currentTarget.dataset.id;
    dispatch(deleteContact(id));
  };

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().trim().startsWith(filter.toLowerCase().trim())
  );

  return filteredContacts.map(({ id, name, number }) => (
    <li className={scss.item} key={id}>
      <span className={scss.icon}></span>
      <p className={scss.text}>
        <span className={scss.name}>Name: </span>
        {name}
      </p>
      <p className={scss.text}>
        <span className={scss.tel}>Tel: </span>
        {number}
      </p>
      <button
        className={scss.btn}
        type="button"
        data-id={id}
        onClick={handleDeleteContact}
      >
        Delete
      </button>
    </li>
  ));
};

export default ContactsItem;
