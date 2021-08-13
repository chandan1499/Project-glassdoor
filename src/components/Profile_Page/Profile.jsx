import React from "react";
import styles from "./Profile.module.css";
import { Navbar } from "../navbar";
const Profile = () => {
  return (
    <>
    <Navbar />
      <div className={styles.Profile_div1}>
        <div className={styles.Profile_div1_1}>
          <div className={styles.Profile_div1_1_1}>
            <div>
              <div>
                <div>
                  <div>
                    <span>
                      <svg
                        className="SVGInline-svg"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 49 49"
                        role="img"
                        aria-labelledby="SVGInline-0-title"
                      >
                        <title id="SVGInline-0-title">Profile&nbsp;Image</title>
                        <desc>Profile&nbsp;Image</desc>
                        <defs>
                          <path
                            d="M24.5 48.35c13.172 0 23.85-10.678 23.85-23.85S37.672.65 24.5.65.65 11.328.65 24.5 11.328 48.35 24.5 48.35z"
                            id="prefix__a"
                          ></path>
                        </defs>
                        <g fill="none" fillRule="evenodd">
                          <mask id="prefix__b" fill="#fff">
                            <use xlinkHref="#prefix__a"></use>
                          </mask>
                          <use fill="#DFF7E7" xlinkHref="#prefix__a"></use>
                          <path
                            d="M24.5 32.45c7.96 0 14.748 5.013 17.38 12.054A26.398 26.398 0 0124.5 51c-6.65 0-12.728-2.45-17.38-6.496 2.632-7.04 9.42-12.054 17.38-12.054zm0-23.85c5.854 0 10.6 4.746 10.6 10.6 0 5.854-4.746 10.6-10.6 10.6-5.854 0-10.6-4.746-10.6-10.6 0-5.854 4.746-10.6 10.6-10.6z"
                            fill="#056B27"
                            mask="url(#prefix__b)"
                          ></path>
                        </g>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div className={styles.profile_head}>
                  <h1>Finish Your Glassdoor Profile!</h1>
                  <p>
                    Finishing your profile on Glassdoor helps us to better
                    customise job opportunities for you, share relevant company
                    review and salary information, and allows you to be
                    discovered by employers.
                  </p>
                </div>
                <div className={styles.profile_body}>
                  <ul>
                    <li>
                      <span className={styles.spans}>
                        <svg
                          className={styles.svgs}

                          id="prefix__apply-faster"
                          xmlns="http://www.w3.org/2000/svg"
                          width="48"
                          height="48"
                          viewBox="0 0 48 48"
                        >
                          <g fill="none" fillRule="evenodd">
                            <path
                              className="prefix__colorSecondary"
                              fill="#DFF7E7"
                              fillRule="nonzero"
                              d="M38 28v6.75c0 1.243-1.045 2.25-2.333 2.25H12.333C11.045 37 10 35.993 10 34.75V28"
                            ></path>
                            <path
                              className="prefix__colorSecondary"
                              fill="#DFF7E7"
                              fillRule="nonzero"
                              stroke="#0CAA41"
                              strokeWidth="2"
                              d="M38 31v4.5c0 .828-1.045 1.5-2.333 1.5H12.333C11.045 37 10 36.328 10 35.5V31"
                            ></path>
                            <path
                              className="prefix__color"
                              fill="#FFF"
                              fillRule="nonzero"
                              stroke="#0CAA41"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M10.37 14h27.26c1.309 0 2.37 1.007 2.37 2.25v10.125c0 1.243-1.061 2.25-2.37 2.25h-5.334L31.111 32H16.296l-1.185-3.375h-4.74C9.06 28.625 8 27.618 8 26.375V16.25C8 15.007 9.061 14 10.37 14z"
                            ></path>
                            <path
                              className="prefix__color"
                              fillRule="nonzero"
                              stroke="#0CAA41"
                              strokeWidth="2"
                              d="M17 14v-2.4c0-.884.895-1.6 2-1.6h12c1.105 0 2 .716 2 1.6V14"
                            ></path>
                            <rect
                              className="prefix__color"
                              width="9"
                              height="2"
                              x="20"
                              y="26"
                              fill="#0CAA41"
                              fillRule="nonzero"
                              rx="1"
                            ></rect>
                            <circle
                              className="prefix__color"
                              cx="35"
                              cy="34"
                              r="7"
                              fill="#0CAA41"
                            ></circle>
                            <circle
                              cx="35"
                              cy="34"
                              r="8"
                              stroke="#FFF"
                              strokeWidth="2"
                            ></circle>
                            <path
                              fill="#FFF"
                              fillRule="nonzero"
                              d="M33.8 35.4v3c0 .602.79.828 1.109.317l2.999-4.799a.6.6 0 00-.509-.918h-1.2v-2.399c0-.584-.748-.824-1.087-.349l-3 4.2a.6.6 0 00.489.948h1.2z"
                            ></path>
                          </g>
                        </svg>
                      </span>
                      <p>Apply to jobs faster</p>
                    </li>
                    <li>
                      <span className={styles.spans}>
                      <svg className={styles.svgs} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><g fill="none" fillRule="evenodd"><path d="M28 16.1c-2-1.3-4.4-2.1-7-2.1-7.2 0-13 5.8-13 13s5.8 13 13 13 13-5.8 13-13c0-1.273-.192-2.499-.54-3.653a12.93 12.93 0 00-1.083-2.553" fill="#FFF"></path><path d="M28 16.1c-2-1.3-4.4-2.1-7-2.1-7.2 0-13 5.8-13 13s5.8 13 13 13 13-5.8 13-13c0-1.273-.192-2.499-.54-3.653a12.93 12.93 0 00-1.083-2.553" stroke="#0CAA41" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M21 34.429a7.429 7.429 0 110-14.858 7.429 7.429 0 010 14.858zM21 30a3 3 0 100-6 3 3 0 000 6z" fill="#DFF7E7"></path><path d="M24.157 20.221c-.928-.464-2.043-.65-3.157-.65-4.086 0-7.429 3.343-7.429 7.429s3.343 7.429 7.429 7.429 7.429-3.343 7.429-7.429c0-.555-.07-1.086-.185-1.607a10.35 10.35 0 00-.207-.782m7.213-11.362L21.75 26.75" stroke="#0CAA41" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M31.87 10.23l5.19-4.953c.636-.608 1.69-.157 1.69.723v3.25a.5.5 0 00.5.5h3.25c.902 0 1.343 1.1.691 1.723l-5.46 5.222a2 2 0 01-1.382.555h-4.093a1 1 0 01-1-.999l-.005-4.571a2 2 0 01.619-1.45z" fill="#0CAA41" fillRule="nonzero"></path></g></svg>
                      </span>
                      <p>Personalised search results</p>
                    </li>
                    <li>
                    <span className={styles.spans}>
                    <svg className="SVGInline-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><g fill="none" fillRule="evenodd"><path fill="#FFF" stroke="#0CAA41" strokeLinejoin="round" strokeWidth="2" d="M10 39V9h26v30z"></path><circle cx="18" cy="17" r="5" fill="#DFF7E7"></circle><path fill="#0CAA41" d="M18 18.667a1.667 1.667 0 110-3.334 1.667 1.667 0 010 3.334zm-3.144 2.221a3.335 3.335 0 016.288 0A4.98 4.98 0 0118 22a4.98 4.98 0 01-3.144-1.112z"></path><path stroke="#0CAA41" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M25.35 14h6.3m-6.317 4h6.317M14.7 25.5h12.6m-12.633 4H22m-7.3 4h12.6"></path><g strokeWidth="2"><circle cx="32.5" cy="30.5" r="7.5" fill="#DFF7E7" stroke="#0CAA41" strokeLinejoin="square"></circle><circle cx="32.5" cy="30.5" r="9.5" stroke="#FFF"></circle></g><path stroke="#0CAA41" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M38.5 36.5l3.482 3.482"></path></g></svg>
                    </span>
                      <p>Increase visibility to employers</p>
                    </li>
                  </ul>
                  <div className={styles.center_line}></div>
                  <div className={styles.profile_body_right}>
                    <div>
                      <button>Finish My Profile</button>
                    </div>
                    <div>
                      <span>
                      <svg className={styles.svgs} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><g fill="none" fillRule="evenodd"><path d="M16.4 22.476a8.036 8.036 0 002.33 2.734 13.742 13.742 0 00-6.856 5.518 12.581 12.581 0 01-5.624-2.784 8.805 8.805 0 018.25-5.671c.652 0 1.287.07 1.9.203zm17.1-.203c3.778 0 7 2.358 8.25 5.671a12.58 12.58 0 01-6.526 2.94 13.739 13.739 0 00-6.953-5.674 8.04 8.04 0 002.136-2.384 8.855 8.855 0 013.093-.553zm-19-10.182c1.215 0 2.318.482 3.127 1.264a7.972 7.972 0 00-2.127 5.433c0 .733.099 1.443.283 2.117a4.5 4.5 0 11-1.283-8.814zm19 0a4.5 4.5 0 11-2.189 8.433c.124-.56.189-1.14.189-1.736a7.97 7.97 0 00-1.636-4.849 4.494 4.494 0 013.636-1.848z" fill="#DFF7E7"></path><path d="M23.5 26.364c5.037 0 9.334 3.144 11 7.561A16.793 16.793 0 0123.5 38a16.793 16.793 0 01-11-4.075c1.666-4.417 5.963-7.561 11-7.561zm0-13.576a6 6 0 110 12 6 6 0 010-12zm-.05 8.629a.803.803 0 00-.813.793c0 .44.366.792.813.792a.803.803 0 00.813-.792.803.803 0 00-.813-.793zm0-6c-1.014 0-1.906.637-2.156 1.373-.28.826.766 1.26 1.23.51.253-.408.568-.593.926-.593.651 0 .993.287.98.73.005.332-.12.511-.5.805l-.224.17c-.625.49-.916.96-.916 1.798 0 .358.298.645.66.645.363 0 .66-.287.66-.645.037-.532.202-.761.72-1.164l.015-.011c.66-.513.905-.88.905-1.69 0-1.16-1.039-1.928-2.3-1.928z" fill="#0CAA41"></path></g></svg>
                      </span>
                      <div className={styles.profile_body_right_down_pDiv}>
                        <p>Don’t worry, your reviews will always remain anonymous.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
