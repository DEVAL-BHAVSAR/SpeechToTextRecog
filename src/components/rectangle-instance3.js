import styles from "./rectangle-instance3.module.css";

const RectangleInstance3 = () => {
  return (
    <div className={styles.instanceParent}>
      <div className={styles.rectangleParent}>
        <button className={styles.instanceChild} />
        <img className={styles.instanceItem} alt="" src="/polygon-22.svg" />
      </div>
    </div>
  );
};

export default RectangleInstance3;
