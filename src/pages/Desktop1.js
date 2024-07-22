import TopNavigation from "../components/TopNavigation";
import FormContainer from "../components/FormContainer";
import InputFields from "../components/InputFields";
import FooterContent1 from "../components/FooterContent1";
import Newsletter1 from "../components/Newsletter1";
import styles from "./Desktop1.module.css";

const Desktop1 = () => {
  return (
    <div className={styles.desktop2}>
      <TopNavigation />
      <section className={styles.mainContent}>
        <form className={styles.formContainerParent}>
          <FormContainer />
          <InputFields />
          <div className={styles.categoryFilter}>
            <form className={styles.gridItem}>
              <div className={styles.gridItemChild} />
              <div className={styles.nominate}>NOMINATE</div>
            </form>
            <form className={styles.submitButtonsLabels}>
              <div className={styles.submitButtonsLabelsChild} />
              <div className={styles.cancel}>CANCEL</div>
            </form>
          </div>
        </form>
      </section>
      <footer className={styles.footer}>
        <div className={styles.footerChild} />
        <FooterContent1 />
        <Newsletter1 />
      </footer>
    </div>
  );
};

export default Desktop1;
