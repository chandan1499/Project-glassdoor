import { useState } from 'react';
import styles from './Employers_body.module.css';
import axios from 'axios'

export function Employers_body() {

    const [data, setData] = useState({})

    function handleChange(e) {
        var { name, value } = e.target;

        if (name === "name") {
            value = value[0].toUpperCase() + value.substring(1);
        }

        if (name === "logo") {
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


        axios.post("http://localhost:3001/companies", data).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        })

        alert("Company registered successfully!");
    }

    return (
        <div>
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


                        <label >Select Logo <br /> <input onChange={handleChange} type="file" name="logo" id={styles.chooselogo} /><br /></label>





                    </form>

                    <button onClick={handleSubmit}>Create Account</button>
                </div>
            </div>
        </div>
    )
}