import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getContacts } from "../redux/actions";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Section from "./Section/Section";
import Form from "./Form/Form";
import Contacts from "./Contacts/Contacts";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

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
