import styles from './commonPartSalaryInterview.module.css';
import { useRef } from 'react';
import {Link} from 'react-router-dom';

export function CommonPartInSalaryAndInterview({ searchHeading, infoHeading, infoDescription, infoImage, btnTag, navHeading1, navHeading2}) {
    const cvFileUpload = useRef();

    return (
        <div>
            <div className={styles.salariesBtns}>
                <div className={styles.salariesBtnFlex}>
                    <h4>{navHeading1}</h4>
                    <Link to="/reviewForm"> <h4>{navHeading2}</h4></Link>
                </div>
            </div>
            <div className={styles.image}>
                <div className={styles.salariesSearchDiv}>
                    <h1>{searchHeading}</h1>
                    <div className={styles.flex}>
                        <input type="text" placeholder="Job Title or Company" />
                        <input className={styles.locationSearch} type="text" placeholder="Location" />
                        <div className={styles.searchIcon}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="40px" viewBox="0 -5 24 26"><path d="M10.5 3a7.5 7.5 0 107.5 7.5A7.5 7.5 0 0010.5 3zm0-1a8.5 8.5 0 016.35 14.15l5 5a.5.5 0 010 .7.5.5 0 01-.71 0l-5-5A8.5 8.5 0 1110.5 2z" fill="white"></path></svg>
                        </div>
                    </div>
                </div>
                <div className={styles.cvUploading}>
                    <div>
                        <input ref={cvFileUpload} type="file" style={{ display: "none" }} />
                        <button onClick={() => {
                            cvFileUpload.current.click();
                        }}><i className="fas fa-arrow-circle-up"></i> <span>Upload Your CV</span></button>
                    </div>
                    <div>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16 4H8a1 1 0 00-1 1v1h10V5a1 1 0 00-1-1zm-1.5 10a.5.5 0 01.09 1H9.5a.5.5 0 010-1zM20 7H4a1 1 0 00-1 1v6a1 1 0 001 1h3.28l.5 2h8.44l.5-2H20a1 1 0 001-1V8a1 1 0 00-1-1zM6.5 16H4v3a1 1 0 001 1h14a1 1 0 001-1v-3h-2.5l-.5 2H7zM16 3a2 2 0 012 2v1h2a2 2 0 012 2v6a2 2 0 01-1 1.73V19a2 2 0 01-2 2H5a2 2 0 01-2-2v-3.27A2 2 0 012 14V8a2 2 0 012-2h2V5a2 2 0 012-2z" fill="currentColor" fillRule="evenodd"></path></svg>
                            <span>Hiring? Post a Job</span></button>
                    </div>
                </div>
            </div>
            <div className={styles.SomeInfo}>
                <div className={styles.leftInfoPart}>
                    <h1>{infoHeading}</h1>
                    <p>{infoDescription}</p>
                    <button>{btnTag}</button>
                </div>
                <div className={styles.rightInfoPart}>
                    <img src={infoImage} alt="" />
                </div>
            </div>
        </div>
    );
}