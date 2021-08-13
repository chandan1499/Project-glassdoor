import React from 'react';
import styles from './SearchRight.module.css';
import { useState } from 'react'
import { ModalPage } from './Modal/Modal';

const SearchRight = ({ company, jobProfile, location, salaryRange, btnStatus }) => {

    const [btnTag, setBtnTag] = useState(btnStatus);
    const [modalStatus, setModalStatus] = useState({
        isOpen: false,
        messege: ""
    });

    const handleHideModal = () => {
        setTimeout(() => {
            setModalStatus({ ...modalStatus, isOpen: false, messege: "" });
        }, 3000)
    }

    const handleApply = () => {
        if (btnTag === "Applied") {
            setModalStatus({ ...modalStatus, isOpen: true, messege: "You have already applied for this job!" });
            handleHideModal();
            return;
        }

        setBtnTag("Applied");
        setModalStatus({ ...modalStatus, isOpen: true, messege: "Successfully applied for this job!" });
        handleHideModal();
    }

    return (
        <>
            <ModalPage isOpen={modalStatus.isOpen} messege={modalStatus.messege} />
            <div className={styles.searchRight_div1}>
                <div className={styles.searchRight_div1_1}>
                    <div>
                        <div>
                            <div>{company}</div>
                            <div>{jobProfile}</div>
                            <div>{location}</div>
                            <div>
                                <span>
                                    <span>
                                        <span>
                                            <svg className={styles.check_svgs} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 9"><path fill="none" stroke="#0CAA41" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M11 1L3.759 8 1 5.333"></path></svg>
                                        </span>
                                        Employer Provided Salary:
                                    </span>
                                    {salaryRange}
                                    <span className={styles.icon_i}>
                                        <svg className="SVGInline-svg greyInfoIcon-svg" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><path d="M7 14A7 7 0 117 0a7 7 0 010 14zm0-.7A6.3 6.3 0 107 .7a6.3 6.3 0 000 12.6zm-.7-7a.7.7 0 011.4 0v4.2a.7.7 0 01-1.4 0zM7 4.2a.7.7 0 110-1.4.7.7 0 010 1.4z" fill="#505863" fillRule="evenodd"></path></svg>
                                    </span>
                                </span>
                            </div>
                        </div>
                        <div className={styles.div_1_1_1_2}>
                            <div>
                                <div>
                                    <div>
                                        <button onClick={handleApply}>
                                            <i></i>
                                            <span>{btnTag}</span>
                                        </button>
                                    </div>
                                    <div>
                                        <button>
                                            <span>
                                                <svg className="SVGInline-svg save-svg css-zve8bc-svg css-lddn1u-svg e1prsu2a0-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 5.11l.66-.65a5.56 5.56 0 017.71.19 5.63 5.63 0 010 7.92L12 21l-8.37-8.43a5.63 5.63 0 010-7.92 5.56 5.56 0 017.71-.19zm7.66 6.75a4.6 4.6 0 00-6.49-6.51L12 6.53l-1.17-1.18a4.6 4.6 0 10-6.49 6.51L12 19.58z" fill="currentColor" fillRule="evenodd"></path></svg>
                                            </span>
                                            <span>Save</span>
                                        </button>
                                    </div>
                                    <div>
                                        <div>
                                            <span>
                                                <svg className="SVGInline-svg css-1cqi1eb-svg e1p6mryr0-svg" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 36 36"><defs><path id="prefix__aMoreDropdown" d="M7.8 20.8a2.8 2.8 0 110-5.6 2.8 2.8 0 010 5.6zm10.2 0a2.8 2.8 0 110-5.6 2.8 2.8 0 010 5.6zm10.2 0a2.8 2.8 0 110-5.6 2.8 2.8 0 010 5.6z"></path></defs><g fill="none" fillRule="evenodd"><mask id="prefix__bMoreDropdown" fill="#fff"><use xlinkHref="#prefix__aMoreDropdown"></use></mask><use fill="#1861bf" xlinkHref="#prefix__aMoreDropdown"></use><g mask="url(#prefix__bMoreDropdown)"><path d="M0 0h36v36H0z"></path></g></g></svg>
                                            </span>
                                            <span>More</span>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.afterPop}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.searchRight_div1_2}>
                    <div>
                        <span>New</span>
                        <span>Be one of the first to Apply!</span>
                    </div>
                </div>
                <div className={styles.searchRight_div1_3}>
                    <div className={styles.searchRight_div1_3_col}>
                        <h3>Rating Highlights</h3>
                        <div className={styles.searchRight_div1_3_col_div}>
                            <strong>Compensation & Benefits:</strong>
                            N/A
                        </div>
                        <div className={styles.searchRight_div1_3_col_div}>
                            <strong>Culture & Values:</strong>
                            N/A
                        </div>
                        <div className={styles.searchRight_div1_3_col_div}>
                            <strong>Career Opportunities:</strong>
                            N/A
                        </div>
                        <div className={styles.searchRight_div1_3_col_div}>
                            <strong>Work/Life Balance:</strong>
                            N/A
                        </div>
                    </div>
                    <div className={styles.searchRight_div1_3_col}>
                        <h3>Job & Company Insights</h3>
                        <div className={styles.searchRight_div1_3_col_div}>
                            <strong>Job Type:</strong>
                            Full-time
                        </div>
                        <div className={styles.searchRight_div1_3_col_div}>
                            <strong>Job Function:</strong>
                            Game Developer
                        </div>
                        <div className={styles.searchRight_div1_3_col_div}>
                            <strong>Industry:</strong>
                            N/A
                        </div>
                        <div className={styles.searchRight_div1_3_col_div}>
                            <strong>Size:</strong>
                            N/A
                        </div>
                    </div>
                </div>
                <div className={styles.searchRight_div1_4}>
                    <div>
                        <div>
                            <span>Job</span>
                        </div>
                        <div><span>Salary</span></div>
                    </div>
                </div>
            </div>
            <div className={styles.loremText}>
                <span>Company Description</span>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
                <span>Responsibility and Duties:-</span>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                <ul>
                    <li>- High degree of responsibility with module-level ownership</li>
                    <li>- High degree of responsibility with module-level ownership</li>
                    <li>- High degree of responsibility with module-level ownership</li>
                    <li>- High degree of responsibility with module-level ownership</li>
                    <li>- High degree of responsibility with module-level ownership</li>
                </ul>
            </div>
            <div className={styles.rightStates}>
                <h4>Average Base Salary Estimate</h4>
                <div>
                    <span>
                        <svg className={styles.rightStates_svg1} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="currentColor" fillRule="evenodd"><path d="M15.54 9.24l-5 4.78-2-1.78a.88.88 0 00-1.21 0 .8.8 0 000 1.16l2.63 2.36a.88.88 0 001.21 0l5.66-5.36a.8.8 0 000-1.16.88.88 0 00-1.29 0z"></path><path d="M12 3a9 9 0 109 9 9 9 0 00-9-9zm0 17a8 8 0 118-8 8 8 0 01-8 8z"></path></g></svg>
                    </span>
                    Estimate provided by employer
                </div>
                <div>
                    <div>
                        ₹1,62,000
                        <span>&nbsp;/mo (est.)</span>
                    </div>
                    <div className={styles.rightLines}>
                        <div></div>
                        <div></div>
                        <div>
                            <span>
                                ₹1L
                                <span>&nbsp;/mo</span>
                            </span>
                            <span>₹2L</span>
                        </div>
                    </div>
                </div>
                <p className={styles.lastP}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
        </>
    );

};

export default SearchRight;
