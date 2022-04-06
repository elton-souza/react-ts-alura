import { ReactChild } from "react";
import style from "./Button.module.scss";
interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  children: ReactChild;
}
function Button({ type, children }: ButtonProps) {
  return (
    <button type={type} className={style.botao}>
      {children}
    </button>
  );
}

export default Button;
