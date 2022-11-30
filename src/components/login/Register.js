import styles from '../../style/login.module.scss';
import Logo from "../global/Logo";
import {Link} from "react-router-dom"
import {motion} from "framer-motion";
import {useEffect, useRef, useState} from "react";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import axios from "../api/axios";

const USER_REGEX = /^[a-zA-Z0-9]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

export default function Register() {
    const [nameRef, confirmRef, passRef] = [useRef(), useRef(), useRef()];

    const [nameCorrect, setNameCorrect] = useState(true)
    const [nameError, setNameError] = useState("")

    const [passCorrect, setPassCorrect] = useState(true)
    const [passError, setPassError] = useState("")

    const [matches, setMatches] = useState(true)


    const [errorMsg, setErrorMsg] = useState("")

    function onChangeName(e) {
        const name = e.target.value;
        if(name.length < 3) {
            setNameCorrect(false)
            setNameError("Your name is too short")
        } else if(name.length > 23) {
            setNameCorrect(false)
            setNameError("Your name is too long")
        } else if(!USER_REGEX.test(name)) {
            setNameCorrect(false)
            setNameError("Only letter and numbers!")
        } else {
            setNameCorrect(true)
        }
    }

    function onChangePass(e) {
        const pass = e.target.value;
        if(pass.length < 8) {
            setPassCorrect(false)
            setPassError("Your password is too short")
        } else if(pass.length > 23) {
            setPassCorrect(false)
            setPassError("Your password is too long")
        } else if(!PWD_REGEX.test(pass)) {
            setPassCorrect(false)
            setPassError("Password must contain letters, digit and special character")
        } else {
            setPassCorrect(true)
            onChangeConfirm(e)
        }
    }

    function onChangeConfirm() {
        const confirm = confirmRef.current.value;
        const pass = passRef.current.value;

        setMatches(confirm === pass)

    }

    useEffect(() => {
        document.title = "Login - RemoteRemindersApp"
        nameRef.current.focus();
    }, [nameRef.current])

    async function handleSubmit(event) {
        event.preventDefault();
        if(!USER_REGEX.test(nameRef.current.value) || !PWD_REGEX.test(passRef.current.value)) {
            setErrorMsg("Invalid data");
            return
        }
        try {
            const response = await axios.post(
                "/register",
                JSON.stringify({ user: nameRef.current.value, pwd: passRef.current.value }),
                {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    withCredentials: true
                }
            )
            console.log(response.data);
            console.log(response.accessToken);

        } catch (err) {
            if(!err?.response)
                setErrorMsg("No server response");
            else if(err.response?.status === 409)
                setErrorMsg("Username taken");
            else
                setErrorMsg("Registration failed");
        }
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
                    <input ref={nameRef}
                           className={`col-8 col-md-7 ${styles.textInput} ${!nameCorrect && nameRef.current.value ? styles.errorBorder : ""}`}
                           onChange={onChangeName}
                           placeholder="name"
                    />
                    <div className={(!nameCorrect && nameError) ? `${styles.invalidInputBox} col-8 col-md-7 mx-auto` : "d-none"}>
                        <FontAwesomeIcon icon={faTimes} /> {nameError}
                    </div>
                    <input ref={passRef}
                           className={`col-8 col-md-7 ${styles.textInput} ${!passCorrect && passRef.current.value ? styles.errorBorder : ""}`}
                           onChange={onChangePass}
                           placeholder="password"
                           type="password"
                    />
                    <div className={(!passCorrect && passError) ? `${styles.invalidInputBox} col-8 col-md-7 mx-auto` : "d-none"}>
                        <FontAwesomeIcon icon={faTimes} /> {passError}
                    </div>
                    <input ref={confirmRef}
                           onChange={onChangeConfirm}
                           className={`col-8 col-md-7 ${styles.textInput} ${!matches && confirmRef.current.value ? styles.errorBorder : ""}`}
                           placeholder="confirm password"
                           type="password"/>
                    <div className={(!matches) ? `${styles.invalidInputBox} col-8 col-md-7 mx-auto` : "d-none"}>
                        <FontAwesomeIcon icon={faTimes} /> Passwords must match
                    </div>
                    {errorMsg ? <div className={styles.errorBox}>{errorMsg}</div> : ""}
                    <motion.button disabled={!(matches && passCorrect && nameCorrect)} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={styles.button}>Create</motion.button>
                    <br/>
                    <Link className={styles.registerLink} to={"/login"}>
                        I already have account
                    </Link>
                </form>
            </div>
        </motion.div>
);
}
