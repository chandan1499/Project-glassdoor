import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { useEffect, useState } from "react";

const styles = {
    fontFamily: "sans-serif",
    textAlign: "right",
};

const ModalPage = ({isOpen, messege}) => {
    console.log(isOpen, messege);
    const [open, setOpen] = useState(isOpen);

    useEffect(() => {
        setOpen(isOpen);
    },[isOpen]);

    return (
        <div style={styles}>
            <Modal open={open} onClose={()=>{setOpen(false)}}>
                <h3 style={{marginTop: "25px"}}>{messege}</h3>
            </Modal>
        </div>
    );
}

export { ModalPage }
