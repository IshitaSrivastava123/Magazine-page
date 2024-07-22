import PropTypes from "prop-types";
import styles from "./Frame.module.css";

const Frame = ({ className = "", frame5Target }) => {
  return (
    <button
      className={[styles.rectangleParent, className].join(" ")}
      target={frame5Target}
    >
      <div className={styles.frameChild} />
      <div className={styles.nominate}>NOMINATE</div>
    </button>
  );
};

Frame.propTypes = {
  className: PropTypes.string,
  frame5Target: PropTypes.string,
};

export default Frame;
