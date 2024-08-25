import { createPortal } from "react-dom";
import { motion } from "framer-motion";

export default function Modal({ title, children, onClose }) {
  return createPortal(
    <>
      <div className="backdrop" onClick={onClose} />
      <motion.dialog 
      initial={{opacity: 0, y: 30}} //It is use to set animation without any props or condition.
      animate={{ opacity: 1, y:0}} 
      exit={{opacity:0, y:30}} // It is used to set disappearance animation.
      open className="modal">
        <h2>{title}</h2>
        {children}
      </motion.dialog>
    </>,
    document.getElementById("modal")
  );
}
