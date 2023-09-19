import styles from "./rectangle-instance2.module.css";

const RectangleInstance2 = () => {
  return (
    <div className={styles.instanceParent}>
      <div className={styles.rectangleParent}>
        <button className={styles.instanceChild} />
        <img className={styles.instanceItem} alt="" src="/polygon-2.svg" />
      </div>
    </div>
  );
};

export default RectangleInstance2;
