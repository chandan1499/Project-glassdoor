import { useState, useRef } from 'react';
import styles from './EmployersBody.module.css';
import axios from 'axios'
import { ModalPage } from '../Modal/Modal';

export function EmployersBody() {

    const [data, setData] = useState({});
    const [fileName, setFileName] = useState("");
    const logoRef = useRef();
    const [modalStatus, setModalStatus] = useState({
        isOpen: false,
        messege: ""
    });

    const handleHideModal = () => {
        setTimeout(() => {
            setModalStatus({...modalStatus, isOpen: false, messege: ""});
        },3000)
    }

    const extractValue = (str) => {
        let idx = 0;
        for (let i = str.length - 1; i >= 0; i--) {
            if (str[i] === "\\") {
                idx = i;
                break;
            }
        }

        return str.slice(idx + 1);
    }

    function handleChange(e) {
        var { name, value } = e.target;

        if (name === "name") {
            value = value[0].toUpperCase() + value.substring(1);
        }

        if (name === "logo") {
            setFileName(extractValue(value));
            let reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);

            reader.onload = (e) => {
                setData({ ...data, [name]: e.target.result })
                return;
            }
        }

        setData({ ...data, [name]: value });
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        const getRating = () => {
            let rating = 0;
            while (rating < 3) {
                rating = (Math.random() * 5).toFixed(1);
            }

            return rating;
        }

        data.rating = getRating();

        if (data.logo === undefined) {
            data.logo = "https://img.icons8.com/ios-glyphs/90/000000/organization.png";
        }


        axios.post("https://glassdoor-clone-server.herokuapp.com/companies", data).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        })

        setModalStatus({...modalStatus, isOpen: true, messege: "Company registered successfully!"});
        handleHideModal();
    }

    return (
        <div>
            <ModalPage isOpen={modalStatus.isOpen} messege={modalStatus.messege} />
            <div className={styles.body_top}>

            </div>
            <div className={styles.form_outer}>
                <div className={styles.form_container}>
                    <form action="" className={styles.form}>

                        <label >Company Name <br /> <input onChange={handleChange} type="text" name="name" /><br /></label>

                        <label >Website <br /> <input onChange={handleChange} type="text" name="website" /><br /></label>
                        <label >Total Employees <br /> <input onChange={handleChange} type="text" name="totalEmployee" /><br /></label>
                        <label >Salary Range <br /> <input onChange={handleChange} type="text" name="Salary" /><br /></label>
                        <label >Annual Revenue <br /> <input onChange={handleChange} type="text" name="Revenue" /><br /></label>
                        <label >Year Founded <br /> <input onChange={handleChange} type="text" name="foundedYear" /><br /></label>

                        <label >Company Status <br /> <input onChange={handleChange} type="text" name="status" /><br /></label>
                        <label >Sectors <br /> <input onChange={handleChange} type="text" name="companyType" /><br /></label>
                        <label >Company CEO <br /> <input onChange={handleChange} type="text" name="ceo" /><br /></label>


                        <label className={styles.imgIcon}>Select Logo  <i className="fas fa-images"></i> <br /><input className={styles.uploadBtn} type="text" readOnly placeholder="Upload File" onClick={(e) => { logoRef.current.click() }} /> <br /></label>
                        <p className={styles.chosenFile}>{fileName}</p>
                        <input style={{ display: 'none' }} onChange={handleChange} ref={logoRef} type="file" name="logo" id={styles.chooselogo} />

                    </form>

                    <button onClick={handleSubmit}>Create Account</button>
                </div>
            </div>
        </div>
    )
}