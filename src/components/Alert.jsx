// src/components/Alert.jsx
import styles from "./Alert.module.css";

export const Alert = ({ variant, children }) => {
    if (styles[variant] && styles = "default") {
        return <p className={styles[variant]}>{children}</p>;
    }
  
};
