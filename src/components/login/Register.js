import styles from '../../style/login.module.scss';
import Logo from "../global/Logo";
import {Link} from "react-router-dom"
import {motion} from "framer-motion";
import {useEffect, useRef} from "react";

export default function Register() {
    const [nameRef, emailRef, passRef] = [useRef(), useRef(), useRef()];


    useEffect(() => {
        document.title = "Login - RemoteRemindersApp"
    }, [])

    function handleSubmit(event) {
        event.preventDefault();
        alert(`${nameRef.current.value} ${emailRef.current} ${passRef.current}`)
    }

    return (
        <motion.div className={`${styles.body}`}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
        >
            <div className={`col-11 col-sm-7 col-md-5 col-lg-4 col-xxl-3`}>
                <Logo className={styles.logo}/>
                <form className={`${styles.content}`} onSubmit={handleSubmit}>
                    <h1>Create your new account</h1>
                    <input ref={nameRef} className={"col-8 col-md-7 "+styles.textInput} placeholder="name"/>
                    <input ref={emailRef} className={"col-8 col-md-7 "+styles.textInput} placeholder="email" type={"email"}/>
                    <input ref={passRef} className={"col-8 col-md-7 "+styles.textInput} placeholder="password" type="password"/>
                    <br/>
                    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={styles.button}>Create</motion.button>
                    <br/>
                    <Link className={styles.registerLink} to={"/login"}>
                        I already have account
                    </Link>
                </form>
            </div>
        </motion.div>
);
}
