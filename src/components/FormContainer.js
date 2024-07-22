import PropTypes from "prop-types";
import styles from "./FormContainer.module.css";

const FormContainer = ({ className = "" }) => {
  return (
    <div className={[styles.formContainer, className].join(" ")}>
      <div className={styles.formHeader}>
        <div className={styles.title}>
          <div className={styles.onlineNominationFormParent}>
            <div className={styles.onlineNominationForm}>
              ONLINE NOMINATION FORM
            </div>
            <div className={styles.languagesWrapper}>
              <img
                className={styles.languagesIcon}
                loading="lazy"
                alt=""
                src="/vector-6690.svg"
              />
            </div>
          </div>
        </div>
        <a className={styles.footer}>
          <div className={styles.footerChild} />
          <div className={styles.subscribe}>SUBSCRIBE</div>
        </a>
      </div>
    </div>
  );
};

FormContainer.propTypes = {
  className: PropTypes.string,
};

export default FormContainer;
