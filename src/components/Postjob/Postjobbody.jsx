import { useState } from 'react'
import styles from '../GdforEmployers/Employers_body.module.css'
export function Postjobbody(){
    
     const [text,setText] = useState({})
    
     function handleChange(e) {
        var {name,value} =e.target
       setText({...text,[name]:value})
    }
    console.log(text)

    return (
        <div>
            <div className={styles.body_top}>

            </div>
            <div className={styles.form_outer}>
                <div className={styles.form_container}>
                    <form action="" className={styles.form}>
                        
                        <label >Company Name <br /> <input onChange={handleChange} type="text" name="companyname"  /><br /></label>
                        <label >Job Profile <br /> <input onChange={handleChange} type="text" name="jobprofile"  /><br /></label>
                        <label >Location <br /> <input onChange={handleChange} type="text" name="location"  /><br /></label>

                        <label >Salary Range<br /> <select onChange={handleChange} name="salaryrange" id="">
                            <option value="3L-5L">3L-5L</option>
                            <option value="5L-10L">5L-10L</option>
                            <option value="10L-15L">10L-15L</option>
                            </select><br /></label>

                        <label >Company Logo <br /> <input onChange={handleChange} type="file" name="companylogo" id={styles.chooselogo}  /><br /></label>

                        

                        
                        

                        
                    </form>
                    <h3>Prerequisites</h3>
                    <textarea name="prerequisite" id="" cols="30" rows="10" onChange={handleChange}></textarea>
                    
                   <button>Post Job</button>
                </div>
            </div>
        </div>
    )
}