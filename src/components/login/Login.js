import styles from '../../style/login.module.scss';
import Logo from "../global/Logo";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";

export default function Login() {

    return (
        <motion.div className={`${styles.body}`}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
        >
            <div className={`col-11 col-sm-7 col-md-5 col-xxl-3`}>
                <Logo className={styles.logo}/>
                <form className={`${styles.content}`} onSubmit={event => event.preventDefault()}>
                    <h1>Login to your account</h1>
                    <input className={"col-8 col-md-6 " + styles.textInput} placeholder="email"/>
                    <input className={"col-8 col-md-6 " + styles.textInput} placeholder="password" type="password"/>
                    <Link className={styles.recoveryLink} to={"/password-recovery"}>
                        I forgot my password
                    </Link>
                    <br/>
                    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={styles.button}>Login</motion.button>
                    <br/>
                    or&nbsp;
                    <Link className={styles.registerLink} to={"/register"}>
                        create new account
                    </Link>
                </form>
            </div>
        </motion.div>
);
}
