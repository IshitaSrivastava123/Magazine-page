import { useCallback } from "react";
import CenterContent from "../components/CenterContent";
import Frame from "../components/Frame";
import FooterContent from "../components/FooterContent";
import Newsletter from "../components/Newsletter";
import styles from "./Desktop.module.css";

const Desktop = () => {
  const onNominateButtonContainerClick = useCallback(() => {
    window.open("/desktop-2");
  }, []);

  return (
    <div className={styles.desktop1}>
      <section className={styles.leftSidebar}>
        <div className={styles.loginParent}>
          <div className={styles.login}>Login</div>
          <div className={styles.chevronDropdown}>
            <img
              className={styles.chevronDownIcon}
              alt=""
              src="/chevrondown.svg"
            />
          </div>
        </div>
      </section>
      <CenterContent
        untitledDesign5412="/untitled-design-54-1-2@2x.png"
        untitledDesign5412AlignContent="start"
        showMagazine
        showBrowseMatches
        browseMatches="Browse Matches"
        biodata="Biodata"
        loginDropdownAlignSelf="baseline"
        loginDropdownAlignContent="flex-end"
        loginDropdownAlignItems="flex-end"
        showLoginDropdownFormSelect
      />
      <div className={styles.callToAction}>
        <div className={styles.buttons}>
          <div
            className={styles.nominateButton}
            onClick={onNominateButtonContainerClick}
          >
            <Frame frame5Target="Nominate" />
          </div>
          <div className={styles.subscribeButton}>
            <div className={styles.subscribeButtonChild} />
            <div className={styles.subscribe}>SUBSCRIBE</div>
          </div>
        </div>
      </div>
      <section className={styles.desktop1Inner}>
        <div className={styles.frameParent}>
          <div className={styles.whiteBlackModernWeddingMagWrapper}>
            <img
              className={styles.whiteBlackModernWeddingMag}
              loading="lazy"
              alt=""
              src="/white-black-modern-wedding-magazine-cover-2@2x.png"
            />
          </div>
          <img
            className={styles.icon}
            loading="lazy"
            alt=""
            src="/1-11@2x.png"
          />
          <img
            className={styles.icon1}
            loading="lazy"
            alt=""
            src="/1-10@2x.png"
          />
        </div>
      </section>
      <div className={styles.desktop1Child} />
      <section className={styles.frameSection}>
        <div className={styles.frameGroup}>
          <div className={styles.darkBrownBoldModernCreativWrapper}>
            <img
              className={styles.darkBrownBoldModernCreativ}
              loading="lazy"
              alt=""
              src="/dark-brown-bold-modern-creative-winter-edition-magazine-cover-2@2x.png"
            />
          </div>
          <img
            className={styles.icon2}
            loading="lazy"
            alt=""
            src="/2-14@2x.png"
          />
          <img
            className={styles.icon3}
            loading="lazy"
            alt=""
            src="/2-13@2x.png"
          />
        </div>
      </section>
      <section className={styles.desktop1Inner1}>
        <div className={styles.frameContainer}>
          <div className={styles.yellowBrownModernRomanticWWrapper}>
            <img
              className={styles.yellowBrownModernRomanticW}
              loading="lazy"
              alt=""
              src="/yellow-brown-modern-romantic-wedding-magazine-cover-2@2x.png"
            />
          </div>
          <img
            className={styles.icon4}
            loading="lazy"
            alt=""
            src="/3-5@2x.png"
          />
          <img
            className={styles.containerIcon}
            loading="lazy"
            alt=""
            src="/3-4@2x.png"
          />
        </div>
      </section>
      <footer className={styles.footer}>
        <div className={styles.footerChild} />
        <FooterContent />
        <Newsletter />
      </footer>
    </div>
  );
};

export default Desktop;
