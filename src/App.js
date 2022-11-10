import {BrowserRouter} from "react-router-dom";
import "./style/global.module.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import AnimatedRoutes from "./components/AnimatedRoutes";


function App() {
    // alert(location);
    return (
    <BrowserRouter>
        <AnimatedRoutes/>
    </BrowserRouter>
    );
}

export default App;
