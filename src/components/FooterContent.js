import PropTypes from "prop-types";
import styles from "./FooterContent.module.css";

const FooterContent = ({ className = "" }) => {
  return (
    <div className={[styles.footerContent, className].join(" ")}>
      <div className={styles.untitledDesign5413Wrapper}>
        <img
          className={styles.untitledDesign5413}
          loading="lazy"
          alt=""
          src="/untitled-design-54-1-3@2x.png"
        />
      </div>
      <div className={styles.footerLinks}>
        <div className={styles.aboutUsProducts}>
          <div className={styles.aboutUs}>About Us</div>
          <div className={styles.competitionFeatures}>
            <div className={styles.ourCompetition}>Our competition</div>
            <div className={styles.channelsIntegrations}>
              <div className={styles.channels}>Channels</div>
              <div className={styles.scale}>Scale</div>
              <div className={styles.watchTheDemo}>Watch the demo</div>
            </div>
          </div>
        </div>
        <div className={styles.aboutUsProducts1}>
          <div className={styles.products}>Products</div>
          <div className={styles.featuresParent}>
            <div className={styles.features}>Features</div>
            <div className={styles.integrationsParent}>
              <div className={styles.integrations}>Integrations</div>
              <div className={styles.enterprise}>Enterprise</div>
              <div className={styles.solutions}>Solutions</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.socialMedia}>
        <div className={styles.socialIcons}>
          <img
            className={styles.image3Icon}
            loading="lazy"
            alt=""
            src="/image-3@2x.png"
          />
          <img
            className={styles.image4Icon}
            loading="lazy"
            alt=""
            src="/image-4@2x.png"
          />
          <img
            className={styles.linkedinIcon}
            loading="lazy"
            alt=""
            src="/linkedin@2x.png"
          />
          <img
            className={styles.instagramIcon}
            loading="lazy"
            alt=""
            src="/instagram@2x.png"
          />
        </div>
        <div className={styles.resourcesCompany}>
          <div className={styles.resourcesLinksParent}>
            <div className={styles.resourcesLinks}>
              <div className={styles.resources}>Resources</div>
              <div className={styles.subResources}>
                <div className={styles.partners}>Partners</div>
                <div className={styles.developers}>Developers</div>
                <div className={styles.community}>Community</div>
                <div className={styles.apps}>Apps</div>
              </div>
            </div>
            <div className={styles.companyParent}>
              <div className={styles.company}>Company</div>
              <div className={styles.companyLinks}>
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

FooterContent.propTypes = {
  className: PropTypes.string,
};

export default FooterContent;
