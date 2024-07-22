import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown, DropdownButton, ButtonGroup } from "react-bootstrap";
import PropTypes from "prop-types";
import styles from "./TopNavigation.module.css";

const TopNavigation = ({ className = "" }) => {
  return (
    <section className={[styles.topNavigation, className].join(" ")}>
      <header className={styles.content}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <img
            className={styles.untitledDesign5412}
            loading="lazy"
            alt=""
            src="/untitled-design-54-1-2@2x.png"
          />
        </div>
        <div className={styles.registerHelpBrowse}>
          <div className={styles.magazineWrapper}>
            <a className={styles.magazine}>Magazine</a>
          </div>
          <div className={styles.registerHelpBrowseButtons}>
            <a className={styles.register}>Register</a>
          </div>
          <div className={styles.registerHelpBrowseButtons1}>
            <a className={styles.help}>Help</a>
          </div>
          <div className={styles.registerHelpBrowseButtons2}>
            <div className={styles.browseMatches}>Browse Matches</div>
          </div>
          <div className={styles.biodataWrapper}>
            <a className={styles.biodata}>Biodata</a>
          </div>
          <div className={styles.loginParent}>
            <div className={styles.login}>Login</div>
            <DropdownButton
              className={styles.chevron}
              as={ButtonGroup}
              style={{ width: "135", height: "100%" }}
            >{` `}</DropdownButton>
          </div>
        </div>
      </header>
    </section>
  );
};

TopNavigation.propTypes = {
  className: PropTypes.string,
};

export default TopNavigation;
