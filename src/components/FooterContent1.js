import PropTypes from "prop-types";
import styles from "./FooterContent1.module.css";

const FooterContent1 = ({ className = "" }) => {
  return (
    <div className={[styles.footerContent, className].join(" ")}>
      <div className={styles.untitledDesign5414Wrapper}>
        <img
          className={styles.untitledDesign5414}
          loading="lazy"
          alt=""
          src="/untitled-design-54-1-3@2x.png"
        />
      </div>
      <div className={styles.heroButtonsParent}>
        <div className={styles.heroButtons}>
          <div className={styles.aboutUs}>About Us</div>
          <div className={styles.ourCompetitionParent}>
            <div className={styles.ourCompetition}>Our competition</div>
            <div className={styles.searchInput}>
              <div className={styles.channels}>Channels</div>
              <div className={styles.scale}>Scale</div>
              <div className={styles.watchTheDemo}>Watch the demo</div>
            </div>
          </div>
        </div>
        <div className={styles.productsParent}>
          <div className={styles.products}>Products</div>
          <div className={styles.featuresIntegrationsSolution}>
            <div className={styles.features}>Features</div>
            <div className={styles.integrations}>Integrations</div>
            <div className={styles.enterprise}>Enterprise</div>
            <div className={styles.solutions}>Solutions</div>
          </div>
        </div>
      </div>
      <div className={styles.productItemContainerParent}>
        <div className={styles.productItemContainer}>
          <img
            className={styles.image5Icon}
            loading="lazy"
            alt=""
            src="/image-3@2x.png"
          />
          <img
            className={styles.image6Icon}
            loading="lazy"
            alt=""
            src="/image-4@2x.png"
          />
          <img
            className={styles.linkedinIcon}
            loading="lazy"
            alt=""
            src="/linkedin1@2x.png"
          />
          <img
            className={styles.instagramIcon}
            loading="lazy"
            alt=""
            src="/instagram1@2x.png"
          />
        </div>
        <div className={styles.resourcesContentWrapper}>
          <div className={styles.resourcesContent}>
            <div className={styles.innerItemDetails}>
              <div className={styles.resources}>Resources</div>
              <div className={styles.actionDetails}>
                <div className={styles.partners}>Partners</div>
                <div className={styles.developers}>Developers</div>
                <div className={styles.community}>Community</div>
                <div className={styles.apps}>Apps</div>
              </div>
            </div>
            <div className={styles.itemDescription}>
              <div className={styles.company}>Company</div>
              <div className={styles.companyContent}>
                <div className={styles.aboutUsLeadership}>
                  <div className={styles.aboutUs1}>About Us</div>
                  <div className={styles.leadership}>Leadership</div>
                </div>
                <div className={styles.news}>News</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FooterContent1.propTypes = {
  className: PropTypes.string,
};

export default FooterContent1;
