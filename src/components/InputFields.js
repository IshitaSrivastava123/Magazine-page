import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import InputLabels from "./InputLabels";
import PropTypes from "prop-types";
import styles from "./InputFields.module.css";

const InputFields = ({ className = "" }) => {
  return (
    <div className={[styles.inputFields, className].join(" ")}>
      <div className={styles.inputLabels}>
        <div className={styles.class}>Class</div>
        <div className={styles.technologiesWrapper}>
          <Form className={styles.technologies}>
            <Form.Control type="text" />
          </Form>
        </div>
      </div>

      <div>
        <Form className={styles.credentials}>
          <label for="email">Email Id</label>
          <br />
          <input type="email" id="email" name="email"></input>
          <br />

          <label for="version">Which version of Magazine</label>
          <br />
          <input type="text" id="version" name="version"></input>
          <br />

          <label for="budget">Your Budget</label>
          <br />
          <input type="number" id="budget" name="budget"></input>
          <br />

          <label for="contact">Contact Number</label>
          <br />
          <input type="tel" id="contact" name="contact"></input>
          <br />
        </Form>
      </div>
    </div>
  );
};

InputFields.propTypes = {
  className: PropTypes.string,
};

export default InputFields;
