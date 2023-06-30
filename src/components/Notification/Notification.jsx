import PropTypes from "prop-types";
import scss from "./Notification.module.scss";

const Notification = ({ text = "There are no contacts" }) => (
  <p className={scss.info}>{text}</p>
);

Notification.propTypes = {
  text: PropTypes.string,
};

export default Notification;
