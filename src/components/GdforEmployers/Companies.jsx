import Styles from './Companies.module.css'
export function Companies(){


    return(
        <>
        <div className={Styles.container}>
            <div className={Styles.left}>
                <h2>Your Company Preferences</h2>
                <div className={Styles.left1}>
                    <i class="far fa-building"></i>
                    <p>Preferred Industries</p>
                    <a href="">Add Preferred Industries</a> 
                    <p>Preferred Company Size</p>
                    <a href="">Add Preferred Company Size</a>
                    <p>Companies You Follow</p>
                    <a href="">Follow companies to receive their latest updates, reviews and jobs.</a>
                    <hr />
                    <a href="">Edit Company Preferences</a>
                </div>
                <div className={Styles.left2}>
                    <p>Get personalised recommendations</p>
                    <h2>Are you open to relocation?</h2>
                    <button>Yes</button>
                    <button>No</button>
                    <p>Viewable Employers <i class="fas fa-exclamation-circle"></i></p>
                </div>
            </div>
        </div>
        </>
    )
}