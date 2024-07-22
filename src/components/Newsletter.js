import PropTypes from "prop-types";
import styles from "./Newsletter.module.css";

const Newsletter = ({ className = "" }) => {
  return (
    <div className={[styles.newsletter, className].join(" ")}>
      <div className={styles.newsletterContent}>
        <div className={styles.newsletterSubscription}>
          <div className={styles.subscribeForNewsletter}>
            Subscribe for Newsletter
          </div>
        </div>
        <div className={styles.copyright}>
          <div className={styles.vivahSahyog}>© 2023 Vivah Sahyog</div>
          <div className={styles.emailSubscription}>
            <div className={styles.emailInput}>
              <button className={styles.inputFields}>
                <div className={styles.inputFieldsChild} />
                <div className={styles.email}>{`Email `}</div>
              </button>
              <button className={styles.inputFields1}>
                <div className={styles.inputFieldsItem} />
                <div className={styles.subscribe}>Subscribe</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Newsletter.propTypes = {
  className: PropTypes.string,
};

export default Newsletter;
