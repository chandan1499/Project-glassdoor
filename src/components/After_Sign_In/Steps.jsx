import React from 'react'
import styles from './After_sign_in_2.module.css'
const Steps = (props) => {

//const [text, setText] = useState('Follow three companies')

return <>
 <div className={styles.asi2_div}>
    <p>{props.t}</p>
    <button>Get Started</button>
</div>

</>
};

export default Steps;