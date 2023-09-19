import styles from "./rectangle-instance1.module.css";

const RectangleInstance1 = () => {
  return (
    <div className={styles.instanceParent}>
      <div className={styles.rectangleParent}>
        <button className={styles.instanceChild} />
        <img className={styles.instanceItem} alt="" src="/polygon-21.svg" />
      </div>
    </div>
  );
};

export default RectangleInstance1;
