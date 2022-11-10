import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import styles from "../../style/main.module.scss";
import Logo from "./Logo";
import {Link} from "react-router-dom";

export default function MainNavbar() {
    return (
        <>
            <Navbar className={styles.navBar}>
                <Navbar.Brand className={"text-center text-md-start "+styles.navLogo}>
                    <Link to={"/"}>
                        <Logo textColor={"#fff"} />
                    </Link>
                </Navbar.Brand>
                <Nav className="ms-auto  d-none d-md-flex">
                    <Navbar.Text className={styles.navText}>Current profile:</Navbar.Text>
                    <NavDropdown className={styles.dropdown + " mx-auto order-2 order-md-1"} title="PC" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">PC</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.1">Phone</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link className={styles.profileBox+" mx-auto ms-md-3 order-1 order-md-2"} href="#link">
                        <div className={styles.profileName}>
                            Mateusz
                        </div>
                        <img alt={"profile icon"}
                             className={styles.profileImage}
                             src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlfyVxO8zH2ODuR6WeVcloHAkb51-KS2rFhg&usqp=CAU"}/>
                    </Nav.Link>
                </Nav>
            </Navbar>
            <Navbar className={styles.secondNavBar+" d-flex d-md-none"}>
                <Nav className="mx-auto">
                    <Navbar.Text>Current profile:</Navbar.Text>
                    <NavDropdown className={styles.dropdown + " mx-auto"} title="PC" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">PC</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.1">Phone</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link className={styles.profileBox+" mx-auto ms-md-3"} href="#link">
                        <div className={styles.profileName}>
                            Mateusz
                        </div>
                        <img alt={"profile icon"}
                             className={styles.profileImage}
                             src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlfyVxO8zH2ODuR6WeVcloHAkb51-KS2rFhg&usqp=CAU"}/>
                    </Nav.Link>
                </Nav>
            </Navbar>
        </>
    );
}