import styles from "./desktop1.module.css";

const Desktop1 = () => {
  return (
    <div className={styles.desktop1}>
      <div className={styles.desktop1Child} />
      <a className={styles.image1} target="_blank" />
      <div className={styles.sih1456SpeechToContainer}>
        <p className={styles.speechToText}>SIH1456</p>
        <p className={styles.speechToText}>
          Speech to text transcription for Indian languages
        </p>
        <p className={styles.speechToText}>
          <span>{` `}</span>
          <span className={styles.nationalTechnicalResearch}>
            National Technical Research Organisation(NTRO)
          </span>
        </p>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.blankLine}>{`          `}</p>
      </div>
      <div className={styles.desktop1Item} />
      <i className={styles.sourceLanguage}>{`SOURCE LANGUAGE `}</i>
      <div className={styles.desktop1Inner} />
      <i className={styles.howItWorks}>{`How It Works `}</i>
      <div className={styles.rectangleDiv} />
      <i className={styles.howToUse}>{`How To Use `}</i>
      <div className={styles.desktop1Child1} />
      <i className={styles.sih}>SIH</i>
      <div className={styles.desktop1Child2} />
      <i className={styles.aboutUs}>{`ABOUT US `}</i>
      <div className={styles.ellipseDiv} />
      <div className={styles.desktop1Child3} />
      <img className={styles.vectorIcon} alt="" src="/vector.svg" />
      <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
      <i className={styles.uploadFiles}>Upload Files</i>
      <i className={styles.microphone}>MICROPHONE</i>
      <textarea
        className={styles.rectangleTextarea}
        rows={45}
        maxLength={45}
        cols={45}
      />
      <div className={styles.desktop1Child4} />
      <i className={styles.copy}>copy</i>
    </div>
  );
};

export default Desktop1;
