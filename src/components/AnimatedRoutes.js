import {Route, Routes, useLocation} from "react-router-dom";
import Main from "./main/Main";
import Login from "./login/Login";
import Register from "./login/Register";
import ErrorScreen from "./ErrorScreen";
import {AnimatePresence} from "framer-motion";
import {useState} from "react";

export default function AnimatedRoutes() {
    const [loggedUser, setLoggedUser] = useState();

    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Main loggedUser={loggedUser}/>}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/register" element={<Register />}/>
                <Route path="*" element={<ErrorScreen />}/>
            </Routes>
        </AnimatePresence>
    );
}