import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./InputLabels.module.css";

const InputLabels = ({ className = "", emailID, propHeight }) => {
  const inputLabelsStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <div
      className={[styles.inputLabels, className].join(" ")}
      style={inputLabelsStyle}
    >
      <div className={styles.emailIdParent}>
        <div className={styles.emailId}>{emailID}</div>
        <div className={styles.rectangleWrapper}>
          <div className={styles.frameChild} />
        </div>
      </div>
    </div>
  );
};

InputLabels.propTypes = {
  className: PropTypes.string,
  emailID: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
};

export default InputLabels;
