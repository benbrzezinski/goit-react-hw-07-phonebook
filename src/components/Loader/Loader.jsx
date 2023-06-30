import { ColorRing } from "react-loader-spinner";
import PropTypes from "prop-types";
import scss from "./Loader.module.scss";

const Loader = ({ isLoading }) => (
  <ColorRing
    visible={isLoading}
    height="100"
    width="100"
    ariaLabel="blocks-loading"
    wrapperClass={scss.loader}
    colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
  />
);

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export default Loader;
