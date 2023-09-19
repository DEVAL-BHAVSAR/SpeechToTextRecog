import styles from "./rectangle-component-set.module.css";

const RectangleComponentSet = () => {
  return (
    <div className={styles.property1defaultParent}>
      <div className={styles.property1default}>
        <div className={styles.rectangleParent}>
          <button className={styles.instanceChild} />
          <img className={styles.instanceItem} alt="" src="/polygon-23.svg" />
        </div>
      </div>
      <div className={styles.property1english}>
        <div className={styles.rectangleGroup}>
          <button className={styles.instanceChild} />
          <img className={styles.polygonIcon} alt="" src="/polygon-24.svg" />
        </div>
      </div>
      <div className={styles.property1}>
        <div className={styles.rectangleGroup}>
          <button className={styles.instanceChild} />
          <img className={styles.polygonIcon} alt="" src="/polygon-24.svg" />
        </div>
      </div>
    </div>
  );
};

export default RectangleComponentSet;
