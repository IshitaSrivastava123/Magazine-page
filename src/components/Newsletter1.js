import PropTypes from "prop-types";
import styles from "./Newsletter1.module.css";

const Newsletter1 = ({ className = "" }) => {
  return (
    <div className={[styles.newsletter, className].join(" ")}>
      <div className={styles.itemPriceWrapperPlaceholder}>
        <div className={styles.newsletterTitle}>
          <div className={styles.subscribeForNewsletter}>
            Subscribe for Newsletter
          </div>
        </div>
        <div className={styles.footerContent}>
          <div className={styles.vivahSahyog}>© 2023 Vivah Sahyog</div>
          <div className={styles.emailSubscribe}>
            <div className={styles.emailSubscribeFields}>
              <div className={styles.emailSubscribeLabels}>
                <div className={styles.emailSubscribeLabelsChild} />
                <div className={styles.email}>{`Email `}</div>
              </div>
              <div className={styles.emailSubscribeLabels1}>
                <div className={styles.emailSubscribeLabelsItem} />
                <div className={styles.subscribe}>Subscribe</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Newsletter1.propTypes = {
  className: PropTypes.string,
};

export default Newsletter1;
