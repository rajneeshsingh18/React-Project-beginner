import { useState } from "react"
import Button from "../Button/Button"
import styles from "./ContactForm.module.css"
import {BiMessageDetail} from "react-icons/bi"
import {FaPhoneAlt} from "react-icons/fa"
import {HiMail} from "react-icons/hi"
import {SiUploaded} from "react-icons/si"




const ContactForm = () => {

  const [name ,setName] =useState('Rajneesh');
  const [email ,setEmail] =useState('abc@gmail.com');
  const [text ,setText] =useState('hi hello bye bye');



  const onSubmit=(event)=>{
    event.preventDefault();
    // name = event.target[0].value;
    // email = event.target[1].value;
    // text = event.target[2].value;

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value) ;
   
    

  }



  return (
    <section className={`${styles.container}`}>
        <div className={`${styles.container_form}`}>

            <div className={`${styles.sub_container}`}>
            <Button handleClick={()=>console.log('Chat with support team...')} text={"VIA SUPPORT CHAT"} icon={<BiMessageDetail fontSize="24px"/>}/>
            <Button handleClick={()=>console.log('Calling support team...')} text={"CALL US"} icon={<FaPhoneAlt fontSize="24px"/>}/>
            </div>
            
            <div>
            <Button isOutline={true} text={"VIA EMAIL FORM"} icon={<HiMail fontSize="24px"/>}/>
            </div>

            <form onSubmit={onSubmit}>
              <div className={`${styles.formcontrol}`}>
              <label htmlFor="name">
                    Name
                </label>
                <input type="text" name="name"/>
              </div>

              <div className={`${styles.formcontrol}`}>
              <label htmlFor="email">
                    E-mail
                </label>
                <input type="mail" name="email"/>
              </div>

              <div className={`${styles.formcontrol}`}>
              <label htmlFor="text">
                    Text
                </label>
                <textarea name="text" rows="7"/>
              </div>

              <div>
              <Button text={"SUBMIT"} icon={<SiUploaded fontSize="24px"/>}/>
              </div>
              
                
            </form>

            {/* <div>
            <h2>
              Displaying data :
            </h2>
            <p>Name  : {name}</p>
            <p>Email : {email}</p>
            <p>Text  : {text}</p>

            </div> */}
            
        </div>
        <div className={`${styles.container_Pics} ${styles.sub_container}`}>
          <img src="./public/main.svg"/>
        </div>
    </section>
  )
}

export default ContactForm