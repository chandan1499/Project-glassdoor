import styles from './reviewForm.module.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export function ReviewForm() {
    const [typeCurrentStyle, setTypeCurrentStyle] = useState(true);
    const [selectedRedioBtn, setSelectedRedioBtn] = useState(1);
    const [askForCurrentOrFormer, setAskForCurrentOrFormer] = useState("flex")
    const [yearPopupStyle, setYearPopupStyle] = useState("none");
    const [chosenYear, setChosenYear] = useState("2021")
    const [showFAQStyle, setShowFAQStyle] = useState(false);

    const selectedRedioBtnStyle = {
        background: "#2aabde"
    }

    const nonSelectedRedioBtnStyle = {
        background: "none"
    }

    const clickedBtnStyle = {
        background: "#1861BF",
        color: "white"
    }

    const nonClickedBtnStyle = {
        background: "none",
        color: "black"
    }

    return (
        <div>
            <div className={styles.logo}>
                <Link to="/Dashboard"><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI1IiBoZWlnaHQ9IjI1IiB2aWV3Qm94PSIwIDAgNzA0IDE0MSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gPHBhdGggZD0iTTcwNCAzMi40QzcwNCAzMS42IDcwMy40IDMwLjcgNzAyLjggMzAuNCA3MDEuMiAyOS42IDY5OC44IDI5IDY5NC4xIDI5IDY4My40IDI5IDY3NCAzNC40IDY2OS44IDQzLjNMNjY5LjggMzIuNEM2NjkuOCAzMS41IDY2OS4xIDMwLjcgNjY4LjEgMzAuN0w2NTIuMSAzMC43QzY1MS4yIDMwLjcgNjUwLjQgMzEuNSA2NTAuNCAzMi40TDY1MC40IDEwNS43QzY1MC40IDEwNi42IDY1MS4yIDEwNy40IDY1Mi4xIDEwNy40TDY2OC45IDEwNy40QzY2OS44IDEwNy40IDY3MC42IDEwNi42IDY3MC42IDEwNS43TDY3MC42IDcyLjdDNjcwLjYgNTggNjgwLjggNTAuNyA2OTQuMSA1MC43IDY5Ny4yIDUwLjcgNzAwLjMgNTEuNCA3MDEuOSA1MS45IDcwMi45IDUyLjIgNzA0IDUxLjQgNzA0IDUwLjJMNzA0IDMyLjRaTTU5Ni45IDI4LjhDNjIwLjQgMjguOCA2MzcuOSA0NS4xIDYzNy45IDY5IDYzNy45IDkyLjkgNjIwLjQgMTA5LjIgNTk2LjkgMTA5LjIgNTczLjMgMTA5LjIgNTU1LjggOTIuOSA1NTUuOCA2OSA1NTUuOCA0NS4xIDU3My4zIDI4LjggNTk2LjkgMjguOFpNNTk2LjkgODkuNEM2MDguMyA4OS40IDYxNy4yIDgxLjMgNjE3LjIgNjkgNjE3LjIgNTYuNyA2MDguMyA0OC42IDU5Ni45IDQ4LjYgNTg1LjQgNDguNiA1NzYuNSA1Ni43IDU3Ni41IDY5IDU3Ni41IDgxLjMgNTg1LjQgODkuNCA1OTYuOSA4OS40Wk01MDMuNiAyOC44QzUyNy4xIDI4LjggNTQ0LjcgNDUuMSA1NDQuNyA2OSA1NDQuNyA5Mi45IDUyNy4xIDEwOS4yIDUwMy42IDEwOS4yIDQ4MCAxMDkuMiA0NjIuNSA5Mi45IDQ2Mi41IDY5IDQ2Mi41IDQ1LjEgNDgwIDI4LjggNTAzLjYgMjguOFpNNTAzLjYgODkuNEM1MTUgODkuNCA1MjMuOSA4MS4zIDUyMy45IDY5IDUyMy45IDU2LjcgNTE1IDQ4LjYgNTAzLjYgNDguNiA0OTIuMSA0OC42IDQ4My4yIDU2LjcgNDgzLjIgNjkgNDgzLjIgODEuMyA0OTIuMSA4OS40IDUwMy42IDg5LjRaTTQ0OC4zIDBDNDQ5LjIgMCA0NTAgMC44IDQ1MCAxLjdMNDUwIDEwNS43QzQ1MCAxMDYuNiA0NDkuMiAxMDcuNCA0NDguMyAxMDcuNEw0MzEuNSAxMDcuNEM0MzAuNiAxMDcuNCA0MjkuOCAxMDYuNiA0MjkuOCAxMDUuN0w0MjkuOCA5Ni43QzQyNC4zIDEwNC41IDQxNS42IDEwOS40IDQwNC41IDEwOS40IDM4NS41IDEwOS40IDM2OS42IDk1IDM2OS42IDY5IDM2OS42IDQzLjEgMzg1LjUgMjguNyA0MDQuMSAyOC43IDQxNi4xIDI4LjcgNDI0LjYgMzQuNCA0MjkuOCA0MS43TDQyOS44IDEuN0M0MjkuOCAwLjggNDMwLjYgMCA0MzEuNSAwTDQ0OC4zIDBaTTQxMC40IDg5LjZDNDIxLjcgODkuNiA0MzAuNCA4MS42IDQzMC40IDY5IDQzMC40IDU2LjMgNDIxLjcgNDguNSA0MTAuNCA0OC41IDM5OSA0OC41IDM5MC40IDU2LjYgMzkwLjQgNjkgMzkwLjQgODEuNSAzOTkgODkuNiA0MTAuNCA4OS42Wk0zNTguNSA4NC4yQzM1OC41IDEwMS43IDM0NS44IDEwOS4yIDMyNS41IDEwOS4yIDMxMS41IDEwOS4yIDI5OS40IDEwNS40IDI5Mi41IDk3LjUgMjkyIDk2LjkgMjkyIDk2IDI5Mi41IDk1LjNMMzAyLjIgODIuN0MzMDIuOCA4MS45IDMwNCA4MS45IDMwNC43IDgyLjYgMzA5LjggODcuOSAzMTcuNyA5MS4xIDMyNy41IDkxLjEgMzMzLjIgOTEuMSAzMzcuNyA4OS42IDMzNy43IDg1LjMgMzM3LjcgODEuMSAzMzMuNiA4MC4yIDMyMC44IDc3LjQgMzA5LjUgNzUuMSAyOTUuNCA2OS45IDI5NS40IDUzLjIgMjk1LjQgMzcuNyAzMDcuNyAyOC44IDMyNy43IDI4LjggMzQwLjggMjguOCAzNTAuMyAzMi44IDM1NyAzOS4xIDM1Ny42IDM5LjcgMzU3LjcgNDAuNyAzNTcuMSA0MS40TDM0Ny45IDUzLjRDMzQ3LjMgNTQuMSAzNDYuMiA1NC4zIDM0NS41IDUzLjYgMzQxIDQ5LjYgMzMzLjUgNDcuMSAzMjYuMSA0Ny4xIDMxOS45IDQ3LjEgMzE2LjQgNDkuMSAzMTYuNCA1Mi40IDMxNi40IDU2LjMgMzIwLjUgNTcuMiAzMzQuMSA2MC4xIDM0Ny40IDYzIDM1OC41IDY4LjEgMzU4LjUgODQuMlpNMjgxIDg0LjJDMjgxIDEwMS43IDI2OC4zIDEwOS4yIDI0OCAxMDkuMiAyMzQgMTA5LjIgMjIxLjkgMTA1LjQgMjE1IDk3LjYgMjE0LjQgOTcgMjE0LjQgOTYgMjE0LjkgOTUuNEwyMjQuNiA4Mi43QzIyNS4zIDgxLjkgMjI2LjQgODEuOSAyMjcuMiA4Mi42IDIzMi4zIDg3LjkgMjQwLjIgOTEuMSAyNTAgOTEuMSAyNTUuNiA5MS4xIDI2MC4yIDg5LjYgMjYwLjIgODUuMyAyNjAuMiA4MS4yIDI1Ni4xIDgwLjIgMjQzLjIgNzcuNSAyMzEuOSA3NS4yIDIxNy45IDcwIDIxNy45IDUzLjIgMjE3LjkgMzcuNyAyMzAuMSAyOC44IDI1MC4xIDI4LjggMjYzLjMgMjguOCAyNzIuNyAzMi44IDI3OS40IDM5LjEgMjgwLjEgMzkuNyAyODAuMSA0MC43IDI3OS42IDQxLjRMMjcwLjQgNTMuNEMyNjkuOCA1NC4yIDI2OC43IDU0LjMgMjY4IDUzLjcgMjYzLjUgNDkuNiAyNTYgNDcuMSAyNDguNiA0Ny4xIDI0Mi4zIDQ3LjEgMjM4LjggNDkuMSAyMzguOCA1Mi41IDIzOC44IDU2LjMgMjQyLjkgNTcuMiAyNTYuNSA2MC4xIDI2OS44IDYzLjEgMjgxIDY4LjEgMjgxIDg0LjJaTTE2Ny4yIDI5QzE4OS41IDI5IDIwMC43IDM4LjggMjAwLjcgNjAuMUwyMDAuNyAxMDUuOEMyMDAuNyAxMDYuOCAxOTkuOSAxMDcuNiAxOTkgMTA3LjZMMTgyLjIgMTA3LjZDMTgxLjIgMTA3LjYgMTgwLjUgMTA2LjggMTgwLjUgMTA1LjhMMTgwLjUgOTcuMUMxNzYuNSAxMDMuMyAxNjguOSAxMDkuMSAxNTcgMTA5LjEgMTQxLjggMTA5LjEgMTMxLjIgOTkuMyAxMzEuMiA4NS4yIDEzMS4yIDcxLjIgMTQxLjUgNjIuNCAxNTUuNiA2MS4xTDE3Ni41IDU5LjJDMTc5LjQgNTguOSAxODAuNSA1OCAxODAuNSA1Ni4yTDE4MC41IDU0LjlDMTgwLjUgNTAuNSAxNzYuMiA0Ny4zIDE2Ny4yIDQ3LjMgMTU5LjkgNDcuMyAxNTIuMyA0OS40IDE0OC45IDU1LjUgMTQ4LjQgNTYuMyAxNDcuMyA1Ni41IDE0Ni41IDU2TDEzNC4zIDQ3LjJDMTMzLjYgNDYuNyAxMzMuNCA0NS44IDEzMy44IDQ1IDEzOS4yIDM0LjQgMTUxLjIgMjkgMTY3LjIgMjlaTTE4MC41IDc2LjRMMTgwLjUgNzMuMyAxNjEuNSA3NS42QzE1NS4zIDc2LjYgMTUyLjEgNzkuOCAxNTIuMSA4NC4xIDE1Mi4xIDg5IDE1NS45IDkyLjIgMTYyLjkgOTIuMiAxNzMuNiA5Mi4yIDE4MC41IDg0LjggMTgwLjUgNzYuNFpNMTE3LjMgMS43TDExNy4zIDEwNS43QzExNy4zIDEwNi42IDExNi42IDEwNy40IDExNS42IDEwNy40TDk4LjcgMTA3LjRDOTcuOCAxMDcuNCA5NyAxMDYuNiA5NyAxMDUuN0w5NyAxLjdDOTcgMC43IDk3LjcgMCA5OC43IDBMMTE1LjYgMEMxMTYuNiAwIDExNy4zIDAuOCAxMTcuMyAxLjdaTTc4LjcgMzAuNkM3OS42IDMwLjYgODAuNCAzMS40IDgwLjQgMzIuM0w4MC40IDEwMi4zQzgwLjQgMTIyLjEgNzAuOSAxNDAgMzguOCAxNDAgMjQgMTQwIDEzLjkgMTM1LjggNi4xIDEyOSA1LjUgMTI4LjQgNS4zIDEyNy41IDYuMyAxMjUuOUwxMy45IDExMy4xQzE0LjUgMTEyLjIgMTUuNyAxMTIgMTYuNSAxMTIuNyAyMi41IDExOC4xIDI5LjQgMTIxIDM4IDEyMSA1NS4xIDEyMSA2MC41IDExMi4yIDYwLjUgMTAxLjJMNjAuNSA5Ni4zQzU1LjQgMTAzLjUgNDYuOSAxMDguMSAzNS45IDEwOC4xIDE1LjYgMTA4LjEgMCA5NC4xIDAgNjguNyAwIDQzIDE2LjMgMjguOCAzNS4zIDI4LjggNDcgMjguOCA1NS45IDM0LjQgNjAuMiA0MS40TDYwLjIgMzIuM0M2MC4yIDMxLjQgNjEgMzAuNiA2MS45IDMwLjZMNzguNyAzMC42Wk00MC44IDg5LjVDNTIuMiA4OS41IDYwLjYgODEuNSA2MC42IDY5IDYwLjYgNTYuMiA1Mi4yIDQ4LjQgNDAuOCA0OC40IDI5LjMgNDguNCAyMC44IDU2LjUgMjAuOCA2OSAyMC44IDgxLjQgMjkuMyA4OS41IDQwLjggODkuNVoiIGZpbGw9IiMwY2FhNDEiPjwvcGF0aD4gPC9zdmc+" alt="" />
                </Link>
            </div>
            <div className={styles.bodyContainer}>
                <div className={styles.leftPart}>
                    <h2>What would you like to contribute?</h2>
                    <p>Everything you add helps others find a job and company they'll love. Thanks!</p>
                    <div className={styles.flex}>
                        <h4>Add your anonymous...</h4>
                        <div>
                            <div className={styles.flex} style={{ alignItems: "center" }} onClick={() => { setSelectedRedioBtn(1); setAskForCurrentOrFormer("flex") }}>
                                <div className={styles.redio}>
                                    <div className={styles.innerRedio} style={(selectedRedioBtn === 1) ? selectedRedioBtnStyle : nonSelectedRedioBtnStyle}></div>
                                </div>
                                <p>Company Review</p>
                            </div>
                            <div className={styles.flex} style={{ alignItems: "center" }} onClick={() => { setSelectedRedioBtn(2); setAskForCurrentOrFormer("flex") }}>
                                <div className={styles.redio}>
                                    <div className={styles.innerRedio} style={(selectedRedioBtn === 2) ? selectedRedioBtnStyle : nonSelectedRedioBtnStyle} ></div>
                                </div>
                                <p>Salary</p>
                            </div>
                            <div className={styles.flex} style={{ alignItems: "center" }} onClick={() => { setSelectedRedioBtn(3); setAskForCurrentOrFormer("none") }}>
                                <div className={styles.redio}>
                                    <div className={styles.innerRedio} style={(selectedRedioBtn === 3) ? selectedRedioBtnStyle : nonSelectedRedioBtnStyle}></div>
                                </div>
                                <p>Interview Review</p>
                            </div>
                            <div className={styles.flex} style={{ alignItems: "center" }} onClick={() => { setSelectedRedioBtn(4); setAskForCurrentOrFormer("flex") }}>
                                <div className={styles.redio}>
                                    <div className={styles.innerRedio} style={(selectedRedioBtn === 4) ? selectedRedioBtnStyle : nonSelectedRedioBtnStyle}></div>
                                </div>
                                <p>Banefits Review</p>
                            </div>
                            <div className={styles.flex} style={{ alignItems: "center" }} onClick={() => { setSelectedRedioBtn(5); setAskForCurrentOrFormer("none") }}>
                                <div className={styles.redio}>
                                    <div className={styles.innerRedio} style={(selectedRedioBtn === 5) ? selectedRedioBtnStyle : nonSelectedRedioBtnStyle}></div>
                                </div>
                                <p>Workplace Photo</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.flex} style={{ alignItems: "center", display: askForCurrentOrFormer }}>
                        <p className={styles.firstFlexItem}>Are you a current or former employee?</p>
                        <div className={styles.flex}>
                            <button className={styles.formExtraBtn} style={(typeCurrentStyle) ? clickedBtnStyle : nonClickedBtnStyle} onClick={() => { setTypeCurrentStyle(true) }} >Current</button>
                            <button className={styles.formExtraBtn} style={(!typeCurrentStyle) ? clickedBtnStyle : nonClickedBtnStyle} onClick={() => { setTypeCurrentStyle(false) }}>Former</button>
                        </div>
                    </div>
                    <div className={styles.flex} style={{ alignItems: "center", display: (!typeCurrentStyle) ? "flex" : "none" }}>
                        <p className={styles.firstFlexItem}>Last Year at Employer*</p>
                        <div>
                            <input type="text" readOnly={true} value={chosenYear} onClick={() => { setYearPopupStyle((yearPopupStyle === "none") ? "block" : "none") }} />
                            <svg style={{
                                position: "relative",
                                right: "35px",
                                top: "8px"

                            }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4.4 9.25l7.386 7.523a1 1 0 001.428 0L20.6 9.25c.5-.509.5-1.324 0-1.833a1.261 1.261 0 00-1.8 0l-6.3 6.416-6.3-6.416a1.261 1.261 0 00-1.8 0c-.5.509-.5 1.324 0 1.833z" fillRule="evenodd" fill="currentColor"></path></svg>
                        </div>
                    </div>
                    <div className={styles.flex} style={{ alignItems: "center" }}>
                        <p className={styles.firstFlexItem}>Employer's Name*</p>
                        <div>
                            <input type="text" />
                        </div>
                    </div>
                    <div className={styles.nextBtn}>
                        <button className={styles.formExtraBtn}>Next</button>
                    </div>

                    <div className={styles.yearsPopup} style={{ display: yearPopupStyle }} onClick={() => { setYearPopupStyle("none") }}>
                        <ul>
                            <li onClick={() => { setChosenYear("2021") }} >2021</li>
                            <li onClick={() => { setChosenYear("2020") }} >2020</li>
                            <li onClick={() => { setChosenYear("2019") }} >2019</li>
                            <li onClick={() => { setChosenYear("2018") }} >2018</li>
                            <li onClick={() => { setChosenYear("2017") }} >2017</li>
                            <li onClick={() => { setChosenYear("2016") }} >2016</li>
                        </ul>
                    </div>
                </div>

                <div className={styles.rightPart}>
                    <h3>Millions of people like you have contributed to Glassdoor.</h3>
                    <p><i>There is no other site like Glassdoor. The reviews and salaries are invaluable to anyone wanting to accelerate their career.</i></p>
                    <p className={styles.author}><i>-Rich M.</i></p>
                    <p><i>Glassdoor has helped me negotiate my salary and make sure I'm getting paid fairly.</i></p>
                    <p className={styles.author}><i>– Bijal A.</i></p>
                    <div className={styles.FAQsection} onClick={() => { setShowFAQStyle(!showFAQStyle) }}>
                        <i className="fas fa-caret-right"></i>
                        <p>Frequently Asked Questions</p>
                    </div>
                    <div style={{ display: (showFAQStyle) ? "block" : "none" }}>
                        <h3>What is Glassdoor?</h3>
                        <p>Glassdoor is the world's largest career community where employees and job seekers come together to share an inside look at their companies. This community has already shared millions of anonymous salaries and reviews across hundreds of thousands of companies.</p>
                        <h3>How do I get unlimited access?</h3>
                        <p>First off, it's completely free. All we ask is that you give back to the community by contributing an anonymous inside look of your own - whether it's a company review, salary or interview review. Remember, your contributions are anonymous.</p>
                        <h3>How long is unlimited access?</h3>
                        <p>Unlimited access is granted for 12 months. After that period you may be asked to contribute another salary, review, interview or benefit review to extend your unlimited access for another 12 months.</p>
                        <h3>What do you mean by anonymous?</h3>
                        <p>Your contributions are anonymous to other users — meaning we will never display your email address, Facebook profile or any personal information (optional info such as gender, age, etc.) with any of your contributions. For more information, read our Privacy Policy.</p>
                        <p>You can even contribute if you work at a small company or you're the only person with your job title. Learn More about maintaining your anonymity.</p>
                    </div>
                </div>
            </div>
            <div className={styles.copyRightAndTC}>
                <p>Copyright © 2008–2021, Glassdoor, Inc. "Glassdoor" and logo are proprietary trademarks of Glassdoor, Inc.</p>
                <p>Terms of UsePrivacy & Cookies</p>
            </div>
        </div>
    );
}