import { useState } from "react";
import { TfiHelpAlt } from "react-icons/tfi";
import { SlClose } from "react-icons/sl";
import s from "./PopUpDescriptions.module.css";

const PopUpDescriptions = ({ Paragraph }) => {
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <main>
      <div className={s.help_container}>
        <TfiHelpAlt onClick={openPopup} className={s.TfiHelpAlt} />
      </div>
      <div className={`${s.popup} ${showPopup ? s.show : ""}`}>
        <div className={s.closed_container}>
          <SlClose className={s.closed} onClick={closePopup} />
        </div>
        <div>{Paragraph}</div>
      </div>
    </main>
  );
};

export default PopUpDescriptions;
