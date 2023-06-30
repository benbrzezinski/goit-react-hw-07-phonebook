import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectContacts } from "../redux/selectors";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Section from "./Section/Section";
import Form from "./Form/Form";
import Contacts from "./Contacts/Contacts";
import Storage from "../utils/storage/localStorage";

const App = () => {
  const contacts = useSelector(selectContacts);

  useEffect(() => Storage.setContacts(contacts), [contacts]);

  return (
    <>
      <Section>
        <Form />
        <Contacts />
      </Section>
      <ToastContainer position="top-left" autoClose={3000} theme="colored" />
    </>
  );
};

export default App;
