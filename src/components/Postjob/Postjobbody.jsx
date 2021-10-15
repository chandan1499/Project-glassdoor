import { useState, useRef } from 'react'
import styles from '../GdforEmployers/EmployersBody.module.css';
import axios from 'axios';
import { ModalPage } from '../Modal/Modal';


export function Postjobbody() {

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

        if (name === "imgUrl") {
            setFileName(extractValue(value));
            let reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);

            reader.onload = (e) => {
                setData({ ...data, [name]: e.target.result });
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
        if (data.imgUrl === undefined) {
            data.imgUrl = "https://img.icons8.com/ios-glyphs/90/000000/organization.png";
        }

        axios.post("https://glassdoor-clone-server.herokuapp.com/jobList", data).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        })

        setModalStatus({...modalStatus, isOpen: true, messege: "Job posted successfully!"});
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

                        <label >Company Name <br /> <input onChange={handleChange} type="text" name="company" /><br /></label>
                        <label >Job Profile <br /> <input onChange={handleChange} type="text" name="jobProfile" /><br /></label>
                        <label >Location <br /> <input onChange={handleChange} type="text" name="location" /><br /></label>

                        <label >Salary Range<br /> <select className={styles.salaryRangeSelect} onChange={handleChange} name="salaryRange" id="">
                            <option value="3L-5L">3L-5L</option>
                            <option value="5L-10L">5L-10L</option>
                            <option value="10L-15L">10L-15L</option>
                        </select><br /></label>


                        <label className={styles.imgIcon}>Select Logo  <i className="fas fa-images"></i> <br /><input className={styles.uploadBtn} type="text" readOnly placeholder="Upload File" onClick={(e) => { logoRef.current.click() }} /> <br /></label>
                        <p className={styles.chosenFile}>{fileName}</p>
                        <input style={{ display: 'none' }} onChange={handleChange} ref={logoRef} type="file" name="imgUrl" id={styles.chooselogo} />







                    </form>
                    <h3>Prerequisites</h3>
                    <textarea className={styles.prerequisite} name="prerequisite" id="" cols="30" rows="10" onChange={handleChange}></textarea>

                    <button onClick={handleSubmit}>Post Job</button>
                </div>
            </div>
        </div>
    )
}