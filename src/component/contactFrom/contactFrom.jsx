import Button from "../button/button";
import Styles from "./contactFrom.module.css";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { useState } from "react";

const contactFrom = () => {
  const [name, setName] = useState("ssk");
  const [email, setEmail] = useState("Suport@gmail.com");
  const [text, setText] = useState("Subscribe to this channel");

  const onSubmit = (event) => {
    //this 2 lines are used to prevent to reload the page
    event.preventDefault();

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  };
  return (
    <section className={Styles.container}>
      <div className={Styles.contact_form}>
        <div className={Styles.top_btn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />
          <Button text="VIA CALL" icon={<FaPhoneAlt fontSize="24px" />} />
        </div>
        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<HiMail fontSize="24px" />}
        />
        <form onSubmit={onSubmit}>
          <div className={Styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>

          <div className={Styles.form_control}>
            <label htmlFor="name">E-Mail</label>
            <input type="text" name="e-mail" />
          </div>

          <div className={Styles.form_control}>
            <label htmlFor="name">TEXT</label>
            <textarea name="text" rows="8" />
          </div>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <Button text="SUBMIT BUTTON" />
          </div>
          <div>{name + " " + email + " " + text + " "}</div>
        </form>
      </div>
      <div className={Styles.contact_image}>
        <img src="./images/Service.png" alt="contact image" />
      </div>
    </section>
  );
};

export default contactFrom;
