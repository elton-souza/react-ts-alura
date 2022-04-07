import style from "./Button.module.scss";
interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  children: React.ReactNode;
  handleTime?: () => void;
}
function Button({ type, children, handleTime }: ButtonProps) {
  return (
    <button type={type} className={style.botao} onClick={handleTime} >
      {children}
    </button>
  );
}

export default Button;
