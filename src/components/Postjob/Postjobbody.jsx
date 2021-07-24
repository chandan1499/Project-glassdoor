import { useState } from 'react'
import styles from '../GdforEmployers/Employers_body.module.css';
import axios from 'axios';


export function Postjobbody() {

    const [data, setData] = useState({})

    function handleChange(e) {
        var { name, value } = e.target;

        if (name === "name") {
            value = value[0].toUpperCase() + value.substring(1);
        }

        if (name === "imgUrl") {
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

        console.log(data);

        axios.post("http://localhost:3002/jobList", data).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        })

        alert("Job posted successfully!");
    }


    return (
        <div>
            <div className={styles.body_top}>

            </div>
            <div className={styles.form_outer}>
                <div className={styles.form_container}>
                    <form action="" className={styles.form}>

                        <label >Company Name <br /> <input onChange={handleChange} type="text" name="company" /><br /></label>
                        <label >Job Profile <br /> <input onChange={handleChange} type="text" name="jobProfile" /><br /></label>
                        <label >Location <br /> <input onChange={handleChange} type="text" name="location" /><br /></label>

                        <label >Salary Range<br /> <select onChange={handleChange} name="salaryRange" id="">
                            <option value="3L-5L">3L-5L</option>
                            <option value="5L-10L">5L-10L</option>
                            <option value="10L-15L">10L-15L</option>
                        </select><br /></label>

                        <label >Company Logo <br /> <input onChange={handleChange} type="file" name="imgUrl" id={styles.chooselogo} /><br /></label>







                    </form>
                    <h3>Prerequisites</h3>
                    <textarea name="prerequisite" id="" cols="30" rows="10" onChange={handleChange} style={{resize: "none",width:"750px"}}></textarea>

                    <button onClick={handleSubmit}>Post Job</button>
                </div>
            </div>
        </div>
    )
}