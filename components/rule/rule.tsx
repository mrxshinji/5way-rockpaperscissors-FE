import Image from "next/image";
import styles from "./rule.module.css";

type RuleProps = {
    handleToggleRule: () => void;
  }

const Rules = ({handleToggleRule}: RuleProps) => {
  return (
    <div className={styles.ruleWrapper}>
      <h1>RULES</h1>
      <Image
        src={"/static/image-rules-bonus.svg"}
        alt='Rule'
        width={300}
        height={300}
      />
      <div className={styles.close} onClick={handleToggleRule}>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Rules;
