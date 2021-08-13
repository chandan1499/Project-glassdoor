import styles from './navbar.module.css';
import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { ModalPage } from './Modal/Modal';

export function Navbar() {
    const [jobTypeStyle, setJobTypeStyle] = useState("none");
    const [jobTypeValue, setJobTypeValue] = useState("Jobs");
    const [notificationPopupStyle, setNotificationPopupStyle] = useState("none");
    const [userSettingPopupStyle, setUserSettingPopupStyle] = useState("none");
    const [jobsPopupStyle, setJobsPopupStyle] = useState("none");
    const [companinesPopupStyle, setCompaninesPopupStyle] = useState("none");
    const [salariesPopStyle, setSalariesPopupStyle] = useState("none");
    const [interviewsPopupStyle, setInterviewsPopupStyle] = useState("none");
    const [forEmployersStyle, setForEmployersStyle] = useState("none");
    const [query, setQuery] = useState("");
    const history = useHistory();
    const [modalStatus, setModalStatus] = useState({
        isOpen: false,
        messege: ""
    });

    const handleHideModal = () => {
        setTimeout(() => {
            setModalStatus({ ...modalStatus, isOpen: false, messege: "" });
        }, 3000)
    }

    const handleChange = (e) => {
        setQuery(e.target.value);
    }

    const handleSearch = (e) => {
        e.preventDefault();
        if (query === "") {
            setModalStatus({ ...modalStatus, isOpen: true, messege: "Please type something to search!" });
            handleHideModal();
            return;
        }

        history.push({
            pathname: "/jobsList",
            state: {
                query: query
            }
        });
    }


    return (

        <div>
            <ModalPage isOpen={modalStatus.isOpen} messege={modalStatus.messege} />
            <div className={styles.container}>
                <div className={styles.navbarCont}>
                    <Link to="/"><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="160"
                        height="50"
                        viewBox="0 0 163 32"
                    >
                        <g fill="#0CAA41" fillRule="evenodd">
                            <path
                                id="prefix__icon-logo-glassdoor-1"
                                d="M163 7.366a.55.55 0 00-.285-.447c-.37-.182-.908-.307-2.005-.307-2.475 0-4.664 1.211-5.619 3.237V7.374a.39.39 0 00-.393-.388h-3.706a.39.39 0 00-.393.388v16.684a.39.39 0 00.393.388h3.882a.391.391 0 00.394-.388v-7.505c0-3.352 2.366-5.018 5.442-5.018a6.37 6.37 0 011.794.274c.246.08.496-.12.496-.376V7.366zm-24.807 12.986c-2.653 0-4.705-1.85-4.705-4.644s2.053-4.645 4.705-4.645c2.653 0 4.704 1.852 4.704 4.645 0 2.794-2.051 4.644-4.704 4.644zm0-13.794c-5.447 0-9.515 3.702-9.515 9.15s4.068 9.15 9.515 9.15c5.446 0 9.514-3.702 9.514-9.15s-4.068-9.15-9.514-9.15zm-21.6 13.794c-2.653 0-4.705-1.85-4.705-4.644 0-2.793 2.052-4.644 4.705-4.644s4.704 1.85 4.704 4.644-2.051 4.644-4.704 4.644zm0-13.794c-5.447 0-9.515 3.702-9.515 9.15s4.068 9.15 9.515 9.15c5.446 0 9.514-3.702 9.514-9.15s-4.068-9.15-9.514-9.15zm-21.57 13.837c-2.652 0-4.633-1.85-4.633-4.68 0-2.828 1.981-4.68 4.634-4.68 2.618 0 4.633 1.782 4.633 4.68 0 2.864-2.015 4.68-4.633 4.68zM103.792.001H99.91a.39.39 0 00-.392.388V9.5c-1.203-1.676-3.184-2.969-5.943-2.969-4.315 0-7.994 3.284-7.994 9.186 0 5.901 3.68 9.183 8.064 9.183 2.583 0 4.6-1.117 5.872-2.898v2.057a.39.39 0 00.393.388h3.882a.39.39 0 00.393-.388V.39a.39.39 0 00-.393-.389zM83.01 19.161c0 3.981-2.936 5.693-7.64 5.693-3.249 0-6.044-.864-7.643-2.651a.395.395 0 01-.01-.504l2.244-2.877a.39.39 0 01.589-.022c1.187 1.199 3.01 1.932 5.28 1.932 1.309 0 2.37-.348 2.37-1.326 0-.944-.955-1.152-3.926-1.781-2.618-.525-5.872-1.711-5.872-5.518 0-3.527 2.83-5.553 7.464-5.553 3.047 0 5.238.908 6.783 2.338a.39.39 0 01.037.526l-2.13 2.73a.386.386 0 01-.558.06c-1.045-.92-2.78-1.498-4.486-1.498-1.45 0-2.264.455-2.264 1.223 0 .873.956 1.083 4.104 1.746 3.076.663 5.658 1.816 5.658 5.482zm-17.952.01c0 3.981-2.936 5.693-7.64 5.693-3.249 0-6.044-.864-7.643-2.651a.395.395 0 01-.01-.503l2.244-2.878a.391.391 0 01.589-.022c1.187 1.2 3.01 1.933 5.28 1.933 1.309 0 2.37-.349 2.37-1.327 0-.944-.955-1.152-3.926-1.781-2.618-.524-5.872-1.711-5.872-5.518 0-3.527 2.83-5.552 7.464-5.552 3.046 0 5.237.908 6.782 2.337a.39.39 0 01.037.526l-2.13 2.73a.386.386 0 01-.557.061c-1.045-.92-2.78-1.5-4.487-1.5-1.45 0-2.264.456-2.264 1.224 0 .873.957 1.083 4.104 1.746 3.076.663 5.659 1.816 5.659 5.482zm-23.268-1.78c0 1.92-1.59 3.597-4.067 3.597-1.627 0-2.512-.734-2.512-1.851 0-.978.744-1.712 2.194-1.922l4.385-.523v.699zM38.713 6.6c-3.704 0-6.495 1.224-7.742 3.643a.392.392 0 00.129.495l2.83 1.996c.178.125.428.084.535-.105.786-1.397 2.547-1.874 4.248-1.874 2.087 0 3.076.732 3.076 1.746v.279c0 .42-.247.63-.919.699l-4.846.419c-3.254.313-5.658 2.304-5.658 5.482 0 3.213 2.475 5.448 5.977 5.448 2.759 0 4.527-1.327 5.446-2.724v1.987a.39.39 0 00.393.388h3.883a.39.39 0 00.393-.388V13.689c0-4.854-2.582-7.089-7.745-7.089zM27.163.387v23.668a.39.39 0 01-.393.389h-3.918a.39.39 0 01-.393-.389V.38c0-.21.173-.38.385-.38h3.926a.39.39 0 01.393.388zm-17.72 19.99c-2.652 0-4.633-1.851-4.633-4.68 0-2.829 1.98-4.68 4.633-4.68s4.598 1.782 4.598 4.68c0 2.863-1.945 4.68-4.598 4.68zm8.768-13.41h-3.878a.396.396 0 00-.398.393v2.052c-.99-1.572-3.042-2.864-5.765-2.864-4.386 0-8.17 3.248-8.17 9.08C0 21.424 3.607 24.6 8.311 24.6c2.547 0 4.527-1.047 5.695-2.688v1.117c0 2.514-1.239 4.505-5.2 4.505-1.991 0-3.59-.654-4.992-1.88a.388.388 0 00-.59.082l-1.759 2.91c-.227.376-.196.587-.052.711 1.806 1.55 4.155 2.507 7.57 2.507 7.428 0 9.621-4.085 9.621-8.59V7.355a.39.39 0 00-.393-.388z"
                            ></path>
                        </g>
                    </svg></Link>
                    <div className={styles.flex}>
                        <svg style={{
                            position: "relative",
                            left: "35px",
                            top: "10px",
                            color: "green"
                        }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.5 3a7.5 7.5 0 107.5 7.5A7.5 7.5 0 0010.5 3zm0-1a8.5 8.5 0 016.35 14.15l5 5a.5.5 0 010 .7.5.5 0 01-.71 0l-5-5A8.5 8.5 0 1110.5 2z" fill="currentColor" fillRule="evenodd"></path></svg>
                        <form>
                            <input className={styles.jobSearch} type="text" placeholder="Job Title, Keywords or Company" onChange={handleChange} />
                            <input className={styles.jobtype} onClick={() => { setJobTypeStyle((jobTypeStyle === "none") ? "block" : "none") }} type="text" readOnly={true} value={jobTypeValue} />
                            <svg style={{
                                position: "relative",
                                top: "6px",
                                right: "35px"
                            }} onClick={() => { setJobTypeStyle((jobTypeStyle === "none") ? "block" : "none") }}
                                xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 24 24"><path d="M4.4 9.25l7.386 7.523a1 1 0 001.428 0L20.6 9.25c.5-.509.5-1.324 0-1.833a1.261 1.261 0 00-1.8 0l-6.3 6.416-6.3-6.416a1.261 1.261 0 00-1.8 0c-.5.509-.5 1.324 0 1.833z" fillRule="evenodd" fill="currentColor"></path></svg>
                            <input type="text" placeholder="Location" className={styles.location} />
                            <button className={styles.searchBtn} onClick={handleSearch}>Search</button>
                        </form>
                    </div>
                    <div className={styles.profileSvg}>
                        <span onMouseOver={() => { setNotificationPopupStyle("block") }} onMouseOut={() => { setNotificationPopupStyle("none") }}><svg style={{
                            width: "40px",
                            height: "40px"
                        }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17.61 6H6.39a1 1 0 00-.94.65L3 11h3.28a1 1 0 011 .68v.06l.15.45.57 1.72a.13.13 0 00.12.09h7.82a.13.13 0 00.12-.09l.74-2.23a1 1 0 01.95-.68H21l-2.45-4.35a1 1 0 00-.94-.65zM3 17a1 1 0 001 1h16a1 1 0 001-1v-5h-3.21a.1.1 0 00-.09.07l-.7 2.25a1 1 0 01-1 .68H8a1 1 0 01-1-.69l-.7-2.24a.1.1 0 00-.09-.07H3zm19 0a2 2 0 01-2 2H4a2 2 0 01-2-2v-6l2.51-4.7A2 2 0 016.39 5h11.22a2 2 0 011.88 1.3L22 11z" fill="currentColor" fillRule="evenodd"></path></svg></span>

                        <span onMouseOver={() => { setUserSettingPopupStyle("block") }} onMouseOut={() => { setUserSettingPopupStyle("none") }}><svg style={{
                            width: "40px",
                            height: "40px"
                        }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 19a8.91 8.91 0 01-5.33-1.75 6 6 0 0110.66 0A8.91 8.91 0 0112 21zm6.11-2.4a7 7 0 00-12.22 0 9 9 0 1112.22 0zM12 6a4 4 0 104 4 4 4 0 00-4-4zm0 7a3 3 0 113-3 3 3 0 01-3 3z" fill="currentColor" fillRule="evenodd"></path></svg></span>
                    </div>
                </div>
            </div>
            <div className={styles.jobtypePopup} style={{ display: jobTypeStyle }}>
                <p onClick={() => { setJobTypeValue("Jobs"); setJobTypeStyle("none") }}>Jobs</p>
                <p onClick={() => { setJobTypeValue("Companies"); setJobTypeStyle("none") }}>Companies</p>
                <p onClick={() => { setJobTypeValue("Salaries"); setJobTypeStyle("none") }}>Salaries</p>
                <p onClick={() => { setJobTypeValue("Interviews"); setJobTypeStyle("none") }}>Interviews</p>
            </div>

            <div className={styles.notificationPopup} style={{ display: notificationPopupStyle }} onMouseOver={() => { setNotificationPopupStyle("block") }} onMouseOut={() => { setNotificationPopupStyle("none") }}>
                <h2>Notifications</h2>
                <div className={styles.flex}>
                    <div className={styles.loveSvg}><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                    >
                        <path
                            d="M12 5.11l.66-.65a5.56 5.56 0 017.71.19 5.63 5.63 0 010 7.92L12 21l-8.37-8.43a5.63 5.63 0 010-7.92 5.56 5.56 0 017.71-.19zm7.66 6.75a4.6 4.6 0 00-6.49-6.51L12 6.53l-1.17-1.18a4.6 4.6 0 10-6.49 6.51L12 19.58z"
                            fill="currentColor"
                            fillRule="evenodd"
                        ></path>
                    </svg></div>
                    <div className={styles.notificationPopupDescription}>
                        <p>You have no saved jobs. Save jobs by clicking the heart on a job you like.</p>
                        <h3>Search Jobs</h3>
                    </div>
                </div>
            </div>

            <div className={styles.userProfilePopup} style={{ display: userSettingPopupStyle }} onMouseOver={() => { setUserSettingPopupStyle("block") }} onMouseOut={() => { setUserSettingPopupStyle("none") }}>
                <ul>
                    <Link to="/Profile"><li>Profile</li></Link>
                    <li>CVs</li>
                    <li>Job Preferences</li>
                </ul>
                <ul>
                    <li>Contributions</li>
                    <li>Company Follows</li>
                    <li>Email & Alerts</li>
                </ul>
                <ul>
                    <li>Account Setting</li>
                </ul>
                <ul style={{ borderBottom: "none" }}>
                    <li>Help Center</li>
                    <Link to="/SignIn"><li>Sign out</li></Link>
                </ul>
            </div>

            <div className={styles.navSecondPartContainer}>
                <div className={styles.otherLinks}>
                    <div className={styles.flex}>
                        <Link to="/jobsList"> <div className={styles.link} onMouseOver={() => { setJobsPopupStyle("block") }} onMouseOut={() => { setJobsPopupStyle("none") }}>
                            <svg

                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M16 4H8a1 1 0 00-1 1v1h10V5a1 1 0 00-1-1zm-1.5 10a.5.5 0 01.09 1H9.5a.5.5 0 010-1zM20 7H4a1 1 0 00-1 1v6a1 1 0 001 1h3.28l.5 2h8.44l.5-2H20a1 1 0 001-1V8a1 1 0 00-1-1zM6.5 16H4v3a1 1 0 001 1h14a1 1 0 001-1v-3h-2.5l-.5 2H7zM16 3a2 2 0 012 2v1h2a2 2 0 012 2v6a2 2 0 01-1 1.73V19a2 2 0 01-2 2H5a2 2 0 01-2-2v-3.27A2 2 0 012 14V8a2 2 0 012-2h2V5a2 2 0 012-2z"
                                    fill="currentColor"
                                    fillRule="evenodd"
                                ></path>
                            </svg>
                            <h4>Jobs</h4>
                        </div></Link>
                        <div className={styles.link} onMouseOver={() => { setCompaninesPopupStyle("block") }} onMouseOut={() => { setCompaninesPopupStyle("none") }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.5 6.5a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1A.5.5 0 0112 8V7a.5.5 0 01.5-.5zm4 0a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1A.5.5 0 0116 8V7a.5.5 0 01.5-.5zm-4 4a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5zm4 0a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5zm-1 5h-3a.49.49 0 00-.5.5v3.5h4V16a.5.5 0 00-.5-.5zm4-11h-11A.5.5 0 009 5v14.5h3v-4a1 1 0 011-1h4a1 1 0 011 1v4h3V5a.5.5 0 00-.5-.5zm.5-1a1 1 0 011 1v16H8v-16a1 1 0 011-1zm-15 5v1H3.5a.5.5 0 00-.5.5v9.5h3v1H2v-11a.91.91 0 01.78-1z" fill="currentColor" fillRule="evenodd"></path></svg>
                            <Link to="/companies"><h4>Companies</h4></Link>
                        </div>

                        <Link to="/dicoverSalaries"> <div className={styles.link} onMouseOver={() => { setSalariesPopupStyle("block") }} onMouseOut={() => { setSalariesPopupStyle("none") }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 9a2 2 0 102 2 2 2 0 00-2-2zm0-1a3 3 0 11-3 3 3 3 0 013-3zm8 10a1 1 0 01-1 1H5a1 1 0 01-1-1zm1-13H3.05a1 1 0 00-1 1v10a1 1 0 001 1.05H21A1 1 0 0022 16V6.05A1 1 0 0021 5zM3 6.5a.5.5 0 01.5-.5h1.56A2.06 2.06 0 013 8.06zm.5 9.5a.5.5 0 01-.5-.5v-1.56A2.06 2.06 0 015.06 16zm17.5-.5a.5.5 0 01-.5.5h-1.56A2.06 2.06 0 0121 13.94zm0-2.56A3.06 3.06 0 0017.94 16H6.06A3.06 3.06 0 003 12.94V9.06A3.06 3.06 0 006.06 6h11.88A3.06 3.06 0 0021 9.06zm0-4.88h-.1a1.74 1.74 0 01-2-2.07h1.6a.5.5 0 01.5.5z" fill="currentColor" fillRule="evenodd"></path></svg>
                            <h4>Salaries</h4>
                        </div></Link>

                        <Link to="/discoverInterview"><div className={styles.link} onMouseOver={() => { setInterviewsPopupStyle("block") }} onMouseOut={() => { setInterviewsPopupStyle("none") }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17 10a1 1 0 11-1 1 1 1 0 011-1m-4.5 0a1 1 0 11-1 1 1 1 0 011-1M8 10a1 1 0 11-1 1 1 1 0 011-1m4.5-6C7.78 4 4 7 4 10.66s3.78 6.65 8.5 6.65a.47.47 0 01.39.2l.38.4a8.08 8.08 0 003 1.84A7.26 7.26 0 0116 17a.53.53 0 01.31-.4c2.88-1.14 4.69-3.43 4.69-5.94C21 7 17.22 4 12.5 4m0-1c5.23 0 9.5 3.4 9.5 7.66 0 2.87-2 5.43-5 6.75a6.7 6.7 0 00.47 2.9.5.5 0 01-.57.68 9.12 9.12 0 01-3-1.31 8.91 8.91 0 01-1.3-1.06 4.16 4.16 0 01-.3-.31h-.36a.44.44 0 01-.16.14 7.19 7.19 0 01-3.27 1 4.87 4.87 0 01-.92.78A5.48 5.48 0 015.7 21a.5.5 0 01-.58-.66 3.32 3.32 0 00.1-1.43C3.27 18.15 2 16.65 2 14.94a3.76 3.76 0 011.2-2.69 6.54 6.54 0 01-.2-1.59C3 6.4 7.27 3 12.5 3M3 14.94c0 1.31 1.09 2.53 2.81 3.12a.49.49 0 01.33.35 4.65 4.65 0 01.1 1.36 5.08 5.08 0 00.76-.42 3.91 3.91 0 00.81-.71.47.47 0 01.41-.23 7.34 7.34 0 001.58-.23h-.11a8.74 8.74 0 01-6.22-4.67A2.56 2.56 0 003 14.94" fill="currentColor" fillRule="evenodd"></path></svg>
                            <h4>Interviews</h4>
                        </div></Link>
                    </div>
                    <div className={styles.flex}>
                        <Link to="/forEmployers"><div className={styles.link} onMouseOver={() => { setForEmployersStyle("block") }} onMouseOut={() => { setForEmployersStyle("none") }}>
                            <h4>For Employers</h4>
                        </div></Link>
                        <Link to="postJob"><div className={styles.link}>
                            <svg

                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M16 4H8a1 1 0 00-1 1v1h10V5a1 1 0 00-1-1zm-1.5 10a.5.5 0 01.09 1H9.5a.5.5 0 010-1zM20 7H4a1 1 0 00-1 1v6a1 1 0 001 1h3.28l.5 2h8.44l.5-2H20a1 1 0 001-1V8a1 1 0 00-1-1zM6.5 16H4v3a1 1 0 001 1h14a1 1 0 001-1v-3h-2.5l-.5 2H7zM16 3a2 2 0 012 2v1h2a2 2 0 012 2v6a2 2 0 01-1 1.73V19a2 2 0 01-2 2H5a2 2 0 01-2-2v-3.27A2 2 0 012 14V8a2 2 0 012-2h2V5a2 2 0 012-2z"
                                    fill="currentColor"
                                    fillRule="evenodd"
                                ></path>
                            </svg>
                            <h4>Post Jobs</h4>
                        </div></Link>
                    </div>
                </div>
            </div>


            <div className={styles.jobsPopup} style={{ display: jobsPopupStyle }} onMouseOver={() => { setJobsPopupStyle("block") }} onMouseOut={() => { setJobsPopupStyle("none") }}>
                <ul style={{ borderBottom: "none" }}>
                    <li>Recent Activity</li>
                    <li>Career Insights</li>
                    <li>Job Alerts</li>
                    <li>Saved</li>
                    <li>Applications</li>
                </ul>
            </div>
            <div className={styles.companinesPopup} style={{ display: companinesPopupStyle }} onMouseOver={() => { setCompaninesPopupStyle("block") }} onMouseOut={() => { setCompaninesPopupStyle("none") }}>
                <ul style={{ borderBottom: "none" }}>
                    <Link to="/companies"><li>Discover Companies</li></Link>
                    <Link to="/CompareCompany"><li>Compare Companies</li></Link>
                    <li>Suggested Follows</li>
                    <Link to="/reviewForm"><li>Write a Review</li></Link>
                </ul>
            </div>
            <div className={styles.salariesPopup} style={{ display: salariesPopStyle }} onMouseOver={() => { setSalariesPopupStyle("block") }} onMouseOut={() => { setSalariesPopupStyle("none") }}>
                <ul style={{ borderBottom: "none" }}>
                    <Link to="/dicoverSalaries"><li>Discover Salaries</li></Link>
                    <Link to="/reviewForm"><li>Add a Salary</li></Link>
                </ul>
            </div>
            <div className={styles.interviewsPopup} style={{ display: interviewsPopupStyle }} onMouseOver={() => { setInterviewsPopupStyle("block") }} onMouseOut={() => { setInterviewsPopupStyle("none") }}>
                <ul style={{ borderBottom: "none" }}>
                    <Link to="/discoverInterview"><li>Discover Interviews</li></Link>
                    <Link to="/reviewForm"><li>Add an Interview</li></Link>
                </ul>
            </div>

            <div className={styles.forEmployers} style={{ display: forEmployersStyle }} onMouseOver={() => { setForEmployersStyle("block") }} onMouseOut={() => { setForEmployersStyle("none") }}>
                <ul style={{ borderBottom: "none" }}>
                    <Link to="/forEmployers"><li>Unlock Employer Account</li></Link>
                    <Link to="/postJob"><li>Post a Job</li></Link>
                    <li>Employer Blog</li>
                    <li>Talk to Sales</li>
                </ul>
            </div>

        </div>

    );
}