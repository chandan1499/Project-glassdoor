import styles from './footer.module.css';
import { useState } from 'react'

export function Footer() {
    const [glassdoorColor, setGlassdoorColor] = useState("#7F7F7F");
    const [facebookColor, setFacebookColor] = useState("#7F7F7F");
    const [twitterColor, setTwitterColor] = useState("#7F7F7F");
    const [youtubeColor, setYoutubeColor] = useState("#7F7F7F");
    const [instaColor, setInstaColor] = useState("#7F7F7F");
    const [countryListPopupStyle, setCountryListPopupStyle] = useState("none");
    const [country, setCountry] = useState("India")

    return (
        <div className={styles.container}>
            <div className={styles.footerHeading}>
                <h4>Glassdoor has millions of jobs plus salary information, company reviews, and interview questions from people on the inside making it easy to find a job that’s right for you.</h4>
            </div>
            <div className={styles.links}>
                <div className={styles.linksDiv}>
                    <div className={styles.logaWithTitle}>
                        <svg className="footerLogo" xmlns="http://www.w3.org/2000/svg" width="151" height="119" viewBox="59 141 151 119"><title>Glassdoor</title><g fill="#fff" id="FooterLogo"><path d="M210 236.65a.53.53 0 0 0-.27-.42c-.34-.18-.84-.3-1.86-.3-2.3 0-4.32 1.15-5.2 3.06v-2.35c0-.2-.16-.36-.37-.36h-3.43c-.2 0-.36.15-.36.35v15.77c0 .2.17.36.37.36h3.6c.2 0 .36-.16.36-.36v-7.1c0-3.16 2.2-4.73 5.04-4.73.67 0 1.33.13 1.66.24.23.08.46-.1.46-.35v-3.85zm-23-.77c5.06 0 8.83 3.5 8.83 8.65 0 5.14-3.77 8.64-8.82 8.64-5.03 0-8.8-3.5-8.8-8.64 0-5.15 3.77-8.65 8.8-8.65zm0 13.03c2.47 0 4.37-1.73 4.37-4.37s-1.9-4.4-4.36-4.4c-2.44 0-4.34 1.76-4.34 4.4 0 2.64 1.9 4.38 4.35 4.38zm-20-13.02c5.05 0 8.82 3.5 8.82 8.65 0 5.14-3.77 8.64-8.8 8.64-5.06 0-8.83-3.5-8.83-8.64 0-5.15 3.76-8.65 8.8-8.65zm0 13.03c2.46 0 4.36-1.73 4.36-4.37s-1.9-4.4-4.35-4.4c-2.45 0-4.35 1.76-4.35 4.4 0 2.64 1.9 4.38 4.36 4.38zm-11.85-19.2c.2 0 .36.15.36.36v22.36c0 .2-.15.36-.35.36h-3.6c-.2 0-.36-.16-.36-.36v-1.95c-1.2 1.7-3.06 2.74-5.45 2.74-4.07 0-7.47-3.1-7.47-8.67s3.4-8.67 7.4-8.67c2.56 0 4.4 1.22 5.5 2.8v-8.6c0-.2.17-.37.37-.37h3.6zm-8.13 19.26c2.43 0 4.3-1.72 4.3-4.43 0-2.73-1.87-4.42-4.3-4.42-2.45 0-4.3 1.76-4.3 4.43 0 2.68 1.85 4.43 4.3 4.43zm-11.12-1.17c0 3.75-2.72 5.37-7.08 5.37-3 0-5.6-.82-7.08-2.5a.365.365 0 0 1 0-.48l2.07-2.73c.14-.18.4-.18.55-.02 1.1 1.13 2.8 1.82 4.9 1.82 1.2 0 2.2-.33 2.2-1.25 0-.9-.9-1.1-3.65-1.68-2.42-.5-5.44-1.62-5.44-5.2 0-3.35 2.63-5.26 6.92-5.26 2.82 0 4.85.86 6.28 2.2.14.14.15.36.03.5l-1.98 2.58a.35.35 0 0 1-.52.06c-.96-.87-2.57-1.4-4.15-1.4-1.34 0-2.1.42-2.1 1.14 0 .83.9 1.02 3.8 1.65 2.85.64 5.25 1.73 5.25 5.2zm-16.64 0c0 3.76-2.7 5.38-7.07 5.38-3.02 0-5.6-.82-7.1-2.5-.1-.14-.1-.34 0-.48l2.08-2.72c.13-.18.4-.18.54-.02 1.1 1.13 2.8 1.82 4.9 1.82 1.2 0 2.2-.33 2.2-1.25 0-.9-.9-1.1-3.65-1.68-2.42-.5-5.44-1.62-5.44-5.2 0-3.35 2.62-5.26 6.92-5.26 2.82 0 4.85.85 6.28 2.2.14.13.15.35.03.5l-1.97 2.57c-.13.17-.37.2-.53.06-.96-.87-2.57-1.4-4.15-1.4-1.34 0-2.1.42-2.1 1.14 0 .83.9 1.02 3.8 1.65 2.85.63 5.24 1.72 5.24 5.18zm-24.4-11.88c4.78 0 7.18 2.12 7.18 6.7v9.83c0 .2-.17.36-.37.36h-3.6a.35.35 0 0 1-.36-.35v-1.88c-.84 1.32-2.48 2.57-5.03 2.57-3.25 0-5.54-2.1-5.54-5.14 0-3 2.23-4.9 5.24-5.18l4.5-.4c.6-.06.84-.26.84-.66v-.26c0-.96-.9-1.65-2.84-1.65-1.57 0-3.2.45-3.93 1.77-.1.18-.33.22-.5.1l-2.62-1.9c-.14-.1-.2-.3-.1-.45 1.15-2.3 3.73-3.45 7.16-3.45zm2.85 10.2v-.66l-4.05.5c-1.34.2-2.03.88-2.03 1.8 0 1.06.82 1.76 2.32 1.76 2.3 0 3.77-1.6 3.77-3.4zm-13.54-16.06v22.35c0 .22-.16.38-.36.38h-3.63a.37.37 0 0 1-.37-.37v-22.35c0-.2.16-.36.36-.36h3.64c.2 0 .36.15.36.36zm-8.3 6.2c.2 0 .37.17.37.38v15.04c0 4.25-2.03 8.1-8.9 8.1-3.17 0-5.35-.9-7.02-2.36-.12-.1-.15-.3.06-.67L62 254c.1-.2.36-.23.53-.08 1.3 1.16 2.78 1.78 4.63 1.78 3.67 0 4.8-1.88 4.8-4.26v-1.05c-1.07 1.54-2.9 2.53-5.26 2.53-4.36 0-7.7-3-7.7-8.48 0-5.5 3.5-8.58 7.57-8.58 2.52 0 4.42 1.22 5.34 2.7v-1.93c0-.2.17-.37.38-.37h3.6zm-8.1 12.68c2.45 0 4.25-1.72 4.25-4.42 0-2.74-1.8-4.42-4.25-4.42-2.46 0-4.3 1.75-4.3 4.42s1.84 4.42 4.3 4.42zM149.6 201.82h-40.27c0 5.6 4.5 10.13 10.07 10.13h30.2c5.56 0 10.06-4.54 10.06-10.13V160.2c0-.2-.16-.38-.36-.38h-9.34c-.2 0-.36.17-.36.37v41.62zm0-60.82c5.56 0 10.06 4.54 10.06 10.14H119.4v41.62c0 .2-.17.37-.37.37h-9.33c-.2 0-.37-.17-.37-.37v-41.62c0-5.6 4.5-10.14 10.07-10.14h30.2z"></path></g></svg>
                    </div>
                    <div className={styles.footerLinks}>
                        <div className={styles.footerLinksBox}>
                            <ul>
                                <li className={styles.linksHeading}>Glassdoor</li>
                                <li>About/Press</li>
                                <li>Blog</li>
                            </ul>
                        </div>
                        <div className={styles.footerLinksBox}>
                            <ul>
                                <li className={styles.linksHeading}>Employers</li>
                                <li>Get a FREE Employer Account</li>
                                <li>Employer Center</li>
                                <li>Post a Job</li>
                            </ul>
                        </div>
                        <div className={styles.footerLinksBox}>
                            <ul>
                                <li className={styles.linksHeading}>Community</li>
                                <li>Help/Contact US</li>
                                <li>Guidelines</li>
                                <li>Terms of Use</li>
                                <li>Privacy & Cookies(New)</li>
                                <li>Privacy Center</li>
                                <li>Do Not Sell My Personal Information</li>
                                <li>Cookie Consent Tool</li>
                            </ul>
                        </div>
                        <div className={styles.footerLinksBox}>
                            <ul>
                                <li className={styles.linksHeading}>Work With Us</li>
                                <li>Advertisers</li>
                                <li>Developers</li>
                                <li>Careers</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.appInfo}>
                        <h3>Download the App</h3>
                        <svg className="android-svg" xmlns="http://www.w3.org/2000/svg" width="24" height="28" viewBox="147 0 25 29"><title>Android</title><g fill="none"><path d="M148.77 9.06c-.98 0-1.77.77-1.77 1.72v7.24c0 .95.8 1.72 1.77 1.72.98 0 1.76-.78 1.76-1.72v-7.24c0-.95-.8-1.72-1.76-1.72zm14.27-6.5l1.24-2.2c.06-.12.02-.26-.1-.33-.1-.06-.27-.02-.33.1l-1.25 2.22c-1.05-.45-2.22-.7-3.47-.7-1.24 0-2.4.24-3.46.7L154.43.13a.26.26 0 0 0-.34-.1c-.12.06-.17.2-.1.33l1.23 2.2c-2.43 1.22-4.07 3.55-4.07 6.22h15.94c0-2.67-1.63-5-4.06-6.22zm-7.54 3.4c-.36 0-.67-.3-.67-.65 0-.35.3-.64.67-.64.37 0 .67.3.67.65 0 .37-.3.66-.67.66zm7.27 0c-.37 0-.67-.3-.67-.65 0-.35.3-.64.67-.64.36 0 .66.3.66.65 0 .37-.3.66-.66.66zm-11.55 3.42V20.6c0 1.02.84 1.85 1.9 1.85h1.28v3.83c0 .94.8 1.72 1.76 1.72.98 0 1.77-.78 1.77-1.73v-3.83h2.4v3.83c0 .95.78 1.72 1.76 1.72.97 0 1.76-.78 1.76-1.73v-3.83h1.3c1.03 0 1.88-.82 1.88-1.85V9.37h-15.82zm20.05 1.4c0-.96-.8-1.72-1.77-1.72-.98 0-1.77.77-1.77 1.72v7.24c0 .95.8 1.72 1.77 1.72.98 0 1.77-.78 1.77-1.72v-7.24z" id="AndroidGroup" fill="#fff"></path></g></svg>
                        <i className="fab fa-apple"></i>
                    </div>
                    <div className={styles.appInfo1}>
                        <svg style={{ cursor: "pointer" }} onMouseOver={() => { setGlassdoorColor("green") }} onMouseOut={() => { setGlassdoorColor("#7F7F7F") }}
                            className="glassdoor-svg"
                            xmlns="http://www.w3.org/2000/svg"
                            width="41"
                            height="40"
                        >
                            <title>Glassdoor</title>
                            <g fill="none">
                                <ellipse cx="20" cy="20" fill={glassdoorColor} rx="20" ry="20"></ellipse>
                                <path
                                    fill="#fff"
                                    d="M23.9 27.22v-11.4c0-.06.03-.1.1-.1h2.57c.05 0 .1.04.1.1v11.4A2.78 2.78 0 0 1 23.89 30h-8.34c-1.54 0-2.78-1.24-2.78-2.78h11.1zm0-16.66c1.52 0 2.77 1.24 2.77 2.77h-11.1v11.4c0 .07-.06.1-.12.1h-2.57c-.06 0-.1-.03-.1-.1v-11.4c0-1.53 1.24-2.77 2.78-2.77h8.33z"
                                ></path>
                            </g>
                        </svg>
                        <svg style={{ cursor: "pointer" }} onMouseOver={() => { setFacebookColor("#1861bf") }} onMouseOut={() => { setFacebookColor("#7F7F7F") }}
                            className="facebook-svg"
                            xmlns="http://www.w3.org/2000/svg"
                            width="41"
                            height="40"
                            viewBox="52 0 41 40"
                        >
                            <title>Facebook</title>
                            <g fill="none" transform="translate(52)">
                                <ellipse cx="20" cy="20" fill={facebookColor} rx="20" ry="20"></ellipse>
                                <path
                                    fill="#fff"
                                    d="M21.78 30.9v-9.8H25l.44-3.77h-3.77V14.9c0-1.12.33-1.9 1.9-1.9h2V9.56c-.35 0-1.57-.12-2.9-.12-2.9 0-4.9 1.78-4.9 5v2.78h-3.33V21h3.34v9.78h4v.1z"
                                ></path>
                            </g>
                        </svg>
                        <svg style={{ cursor: "pointer" }} onMouseOver={() => { setTwitterColor("#1DA1F2") }} onMouseOut={() => { setTwitterColor("#7F7F7F") }}
                            className="twitter-svg"
                            xmlns="http://www.w3.org/2000/svg"
                            width="41"
                            height="40"
                            viewBox="104 0 41 40"
                        >
                            <title>Twitter</title>
                            <g fill="none" transform="translate(104)">
                                <ellipse cx="20" cy="20" fill={twitterColor} rx="20" ry="20"></ellipse>
                                <path
                                    fill="#fff"
                                    d="M30.56 14.2c-.76.34-1.57.56-2.42.66.87-.52 1.54-1.34 1.85-2.33-.82.48-1.73.83-2.7 1.02a4.163 4.163 0 0 0-3.07-1.33c-2.33 0-4.2 1.9-4.2 4.22 0 .33.02.65.1.96-3.5-.18-6.62-1.85-8.7-4.4a4.21 4.21 0 0 0 1.31 5.62c-.7-.02-1.34-.2-1.9-.52v.05c0 2.04 1.44 3.75 3.37 4.14-.34.08-.72.13-1.1.13-.27 0-.54-.02-.8-.07.54 1.67 2.1 2.9 3.95 2.93a8.56 8.56 0 0 1-5.24 1.8c-.33 0-.67-.03-1-.07 1.87 1.2 4.1 1.9 6.47 1.9 7.75 0 12-6.43 12-12 0-.18 0-.37-.02-.55a8.37 8.37 0 0 0 2.1-2.18"
                                ></path>
                            </g>
                        </svg>
                        <svg style={{ cursor: "pointer" }} onMouseOver={() => { setYoutubeColor("red") }} onMouseOut={() => { setYoutubeColor("#7F7F7F") }}
                            className="instagram-svg"
                            xmlns="http://www.w3.org/2000/svg"
                            width="40"
                            height="40"
                        >
                            <title>Instagram</title>
                            <g fill="none">
                                <circle cx="20" cy="20" r="20" fill={youtubeColor}></circle>
                                <path
                                    d="M21.968 12.272s-.216 1.534-.88 2.21c-.843.886-1.787.89-2.22.942-3.101.225-7.757.232-7.757.232s-5.76-.052-7.533-.223c-.493-.093-1.6-.065-2.443-.952-.665-.675-.88-2.21-.88-2.21s-.223-1.8-.223-3.602V6.981c0-1.802.222-3.603.222-3.603s.216-1.534.88-2.21c.843-.886 1.788-.89 2.22-.942C6.456 0 11.107 0 11.107 0h.01s4.651 0 7.752.225c.433.052 1.377.056 2.22.943.664.675.88 2.209.88 2.209s.222 1.801.222 3.603v1.688a33.75 33.75 0 0 1-.222 3.603zM8.798 4.645v6.27l5.88-3.201-5.88-3.069z"
                                    fill="#fff"
                                    transform="translate(8.889 12.222)"
                                ></path>
                            </g>
                        </svg>
                        <svg style={{ cursor: "pointer" }} onMouseOver={() => { setInstaColor("red") }} onMouseOut={() => { setInstaColor("#7F7F7F") }}
                            className="instagram-svg"
                            xmlns="http://www.w3.org/2000/svg"
                            width="40"
                            height="40"
                        >
                            <title>Instagram</title>
                            <g fill="none">
                                <circle cx="20" cy="20" r="20" fill={instaColor}></circle>
                                <path
                                    d="M20 9c-3 0-3.36.02-4.54.07-1.17.06-1.97.24-2.67.5-.73.3-1.34.67-1.95 1.28-.62.6-1 1.23-1.27 1.95-.27.7-.46 1.5-.5 2.67C9 16.64 9 17.02 9 20c0 3 0 3.36.07 4.54.05 1.17.24 1.97.5 2.67.3.73.66 1.34 1.28 1.95.6.62 1.22 1 1.94 1.27.7.27 1.5.46 2.66.5C16.64 31 17 31 20 31c2.98 0 3.36 0 4.53-.07 1.17-.05 1.97-.24 2.67-.5.72-.3 1.34-.66 1.95-1.28.6-.6.98-1.22 1.27-1.94.27-.7.45-1.5.5-2.66C31 23.36 31 23 31 20c0-2.98-.02-3.36-.07-4.53-.06-1.17-.24-1.97-.5-2.67-.3-.72-.67-1.34-1.28-1.95-.6-.6-1.23-.98-1.95-1.27-.7-.27-1.5-.45-2.67-.5C23.36 9 22.98 9 20 9zm0 2c2.93 0 3.28 0 4.44.05 1.07.05 1.65.23 2.04.38.52.2.88.44 1.27.82.38.4.62.75.82 1.27.15.4.33.97.38 2.04.05 1.16.06 1.5.06 4.44 0 2.94 0 3.3-.05 4.45-.05 1.07-.23 1.65-.38 2.04-.2.5-.44.87-.82 1.25-.4.4-.75.63-1.27.83-.4.15-.97.33-2.04.37-1.16.06-1.5.07-4.44.07-2.94 0-3.3 0-4.45-.07-1.07-.04-1.65-.22-2.04-.37-.5-.2-.87-.44-1.25-.83-.4-.38-.63-.75-.83-1.26-.15-.4-.33-.98-.37-2.05-.06-1.16-.07-1.5-.07-4.45 0-2.93 0-3.28.07-4.44.04-1.07.22-1.65.37-2.04.2-.52.44-.88.83-1.27.38-.38.75-.62 1.26-.82.4-.15.98-.33 2.05-.38C16.7 11 17.05 11 20 11zm0 12.67a3.666 3.666 0 1 1-.008-7.332A3.666 3.666 0 0 1 20 23.67zm0-9.3c-3.12 0-5.65 2.5-5.65 5.63A5.65 5.65 0 0 0 20 25.65c3.12 0 5.64-2.53 5.64-5.65 0-3.12-2.52-5.64-5.64-5.64zm7.2-.24a1.325 1.325 0 0 1-2.65 0c0-.73.6-1.32 1.32-1.32.73 0 1.32.6 1.32 1.33"
                                    fill="#fff"
                                ></path>
                            </g>
                        </svg>
                    </div>
                    <div className={styles.footerInput} onClick={()=>{setCountryListPopupStyle("block")}}>
                        <input className={styles.jobtype} value={country} readOnly={true} />
                        <svg style={{
                            color: "black",
                            position: "relative",
                            right: "35px"
                        }} className="SVGInline-svg arrowDown-svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4.4 9.25l7.386 7.523a1 1 0 001.428 0L20.6 9.25c.5-.509.5-1.324 0-1.833a1.261 1.261 0 00-1.8 0l-6.3 6.416-6.3-6.416a1.261 1.261 0 00-1.8 0c-.5.509-.5 1.324 0 1.833z" fillRule="evenodd" fill="currentColor"></path></svg>
                    </div>
                </div>
            </div>
            <div className={styles.bottomCredits}>
                <h4>Brows By : <span> Companies, </span><span> Jobs, </span><span> Locations</span></h4>
            </div>
            <div className={styles.bottomCredits}>
                <h4>Copyright © 2008-2021, Glassdoor, Inc. "Glassdoor" and logo are registered trademarks of Glassdoor, Inc</h4>
            </div>


            <div className={styles.countryListPopup} style={{ display:countryListPopupStyle }}>
                <ul style={{ borderBottom: "none" }}>
                    <li onClick={()=>{setCountry("America"); setCountryListPopupStyle("none")}}>America</li>
                    <li onClick={()=>{setCountry("India"); setCountryListPopupStyle("none")}}>India</li>
                    <li onClick={()=>{setCountry("England"); setCountryListPopupStyle("none")}}>England</li>
                    <li onClick={()=>{setCountry("Australia"); setCountryListPopupStyle("none")}}>Australia</li>
                    <li onClick={()=>{setCountry("Japan"); setCountryListPopupStyle("none")}}>Japan</li>
                    <li onClick={()=>{setCountry("China"); setCountryListPopupStyle("none")}}>China</li>
                    <li onClick={()=>{setCountry("Brasil"); setCountryListPopupStyle("none")}}>Brasil</li>
                    <li onClick={()=>{setCountry("Canada"); setCountryListPopupStyle("none")}}>Canada</li>
                    <li onClick={()=>{setCountry("South Africa"); setCountryListPopupStyle("none")}}>South Africa</li>
                    <li onClick={()=>{setCountry("France"); setCountryListPopupStyle("none")}}>France</li>
                    <li onClick={()=>{setCountry("Pakistan"); setCountryListPopupStyle("none")}}>Pakistan</li>
                    <li onClick={()=>{setCountry("Bangladesh"); setCountryListPopupStyle("none")}}>Bangladesh</li>
                    <li onClick={()=>{setCountry("Sri Lanka"); setCountryListPopupStyle("none")}}>Sri Lanka</li>
                </ul>
            </div>
        </div>
    );
}















