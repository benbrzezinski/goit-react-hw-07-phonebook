import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectContacts } from "../../redux/selectors";
import { addContact } from "../../redux/contactsSlice";
import { toast } from "react-toastify";
import { nanoid } from "nanoid";
import scss from "./Form.module.scss";

const ID = {
  nameInput: nanoid(),
  numberInput: nanoid(),
};

const Form = () => {
  const [values, setValues] = useState({ name: "", number: "" });
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    setValues(v => ({ ...v, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    const contactsNames = contacts.map(({ name }) => name);

    if (contactsNames.includes(values.name)) {
      return toast.error(`${values.name} is already in contacts!`);
    }

    dispatch(addContact(values.name, values.number));
    setValues({ name: "", number: "" });
  };

  return (
    <form className={scss.form} onSubmit={handleSubmit}>
      <label className={scss.label} htmlFor={ID.nameInput}>
        Name
      </label>
      <input
        className={scss.input}
        id={ID.nameInput}
        type="text"
        name="name"
        value={values.name}
        onChange={handleChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label className={scss.label} htmlFor={ID.numberInput}>
        Number
      </label>
      <input
        className={scss.input}
        id={ID.numberInput}
        type="tel"
        name="number"
        value={values.number}
        onChange={handleChange}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button className={scss.btn} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default Form;
