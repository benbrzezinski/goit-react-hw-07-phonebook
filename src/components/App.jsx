import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectIsLoading, selectError } from "../redux/selectors";
import { getContacts } from "../redux/actions";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { toast } from "react-toastify";
import Section from "./Section/Section";
import Form from "./Form/Form";
import Contacts from "./Contacts/Contacts";
import Loader from "./Loader/Loader";

const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
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
      {error && toast.error(error)}
      {isLoading && <Loader isLoading={isLoading} />}
      <ToastContainer position="top-left" autoClose={3000} theme="colored" />
    </>
  );
};

export default App;
