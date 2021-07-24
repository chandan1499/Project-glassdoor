import { useState } from 'react'
import styles from './Employers_body.module.css'
export function Employers_body(){
    
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
                        <label >Job Function <br /> <input onChange={handleChange} type="text" name="jobfunction"  /><br /></label>
                        <label >Job Type <br /> <input onChange={handleChange} type="text" name="jobtype"  /><br /></label>

                        <label >Website <br /> <input onChange={handleChange} type="text" name="website"  /><br /></label>
                        <label >Total Employees <br /> <input onChange={handleChange} type="number" name="totalemployees"  /><br /></label>
                        <label >HQ City <br /> <input onChange={handleChange} type="text" name="hqcity"  /><br /></label>
                        <label >Annual Revenue <br /> <input onChange={handleChange} type="text" name="annualrevenue"  /><br /></label>
                        <label >Year Founded <br /> <input onChange={handleChange} type="text" name="yearfoung"  /><br /></label>

                        <label >Company Status <br /> <input onChange={handleChange} type="text" name="companystatus"  /><br /></label>
                        <label >Sectors <br /> <input onChange={handleChange} type="text" name="sectors"  /><br /></label>
                        <label >Industry <br /> <input onChange={handleChange} type="text" name="industry"  /><br /></label>
                        <label >Company CEO <br /> <input onChange={handleChange} type="text" name="companyceo"  /><br /></label>

                        
                        <label >Select Logo <br /> <input onChange={handleChange} type="file" name="logo" id={styles.chooselogo} /><br /></label>

                        
                        

                        
                    </form>
                    
                   <button>Create Account</button>
                </div>
            </div>
        </div>
    )
}