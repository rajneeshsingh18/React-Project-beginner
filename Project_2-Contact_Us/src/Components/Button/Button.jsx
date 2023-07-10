import {BiMessageDetail} from "react-icons/bi";
import styles from "./Button.module.css";

const Button = ({ handleClick,isOutline ,icon ,text}) => {

  
  return (
    <>
    <button onClick={handleClick}  className= {isOutline ? styles.outline_btn :styles.primary_btn} > {icon} {text}</button>
  
    </>
    
  )
}

export default Button