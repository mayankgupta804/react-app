import { ReactNode } from "react";
import styles from "./Button.module.css";

interface Props {
  onClick: () => void;
  color?: "primary" | "secondary" | "danger";
  children: ReactNode;
}

const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <button
      type="button"
      className={[styles.button, styles["btn-" + color]].join(" ")}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
