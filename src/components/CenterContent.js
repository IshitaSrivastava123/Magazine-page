import { useMemo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import PropTypes from "prop-types";
import styles from "./CenterContent.module.css";

const CenterContent = ({
  className = "",
  untitledDesign5412,
  untitledDesign5412AlignContent,
  magazineHref,
  magazineTabIndex,
  magazineAll,
  showMagazine,
  showBrowseMatches,
  browseMatches,
  biodata,
  loginDropdownAlignSelf,
  loginDropdownAlignContent,
  loginDropdownAlignItems,
  showLoginDropdownFormSelect,
}) => {
  const untitledDesign5412Style = useMemo(() => {
    return {
      alignContent: untitledDesign5412AlignContent,
    };
  }, [untitledDesign5412AlignContent]);

  const magazineStyle = useMemo(() => {
    return {
      all: magazineAll,
    };
  }, [magazineAll]);

  const loginDropdownFormSelectStyle = useMemo(() => {
    return {
      alignSelf: loginDropdownAlignSelf,
      alignContent: loginDropdownAlignContent,
      alignItems: loginDropdownAlignItems,
    };
  }, [
    loginDropdownAlignSelf,
    loginDropdownAlignContent,
    loginDropdownAlignItems,
  ]);

  return (
    <header className={[styles.centerContent, className].join(" ")}>
      <div className={styles.mainContent}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <img
            className={styles.untitledDesign5412}
            loading="lazy"
            alt=""
            src={untitledDesign5412}
            style={untitledDesign5412Style}
          />
        </div>
        <div className={styles.navigation}>
          <div className={styles.magazineLabel}>
            {showMagazine && (
              <a
                className={styles.magazine}
                href={magazineHref}
                tabIndex={magazineTabIndex}
                style={magazineStyle}
              >
                Magazine
              </a>
            )}
          </div>
          <div className={styles.navButtons}>
            <button className={styles.register}>Register</button>
          </div>
          <div className={styles.navButtons1}>
            <a className={styles.help}>Help</a>
          </div>
          <div className={styles.navButtons2}>
            {showBrowseMatches && (
              <div className={styles.browseMatches}>{browseMatches}</div>
            )}
          </div>
          <div className={styles.biodataLabel}>
            <button className={styles.biodata}>{biodata}</button>
          </div>
          {showLoginDropdownFormSelect && (
            <Form.Select
              className={styles.loginDropdownFormselect}
              style={loginDropdownFormSelectStyle}
            />
          )}
        </div>
      </div>
    </header>
  );
};

CenterContent.propTypes = {
  className: PropTypes.string,
  untitledDesign5412: PropTypes.string,
  magazineHref: PropTypes.string.isRequired,
  magazineTabIndex: PropTypes.number,
  showMagazine: PropTypes.bool,
  showBrowseMatches: PropTypes.bool,
  browseMatches: PropTypes.string,
  biodata: PropTypes.string,
  showLoginDropdownFormSelect: PropTypes.bool,

  /** Style props */
  untitledDesign5412AlignContent: PropTypes.any,
  magazineAll: PropTypes.any,
  loginDropdownAlignSelf: PropTypes.any,
  loginDropdownAlignContent: PropTypes.any,
  loginDropdownAlignItems: PropTypes.any,
};

export default CenterContent;
