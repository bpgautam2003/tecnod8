import React , {useState} from 'react'
import logo from '../images/logo.png'
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";


const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="nav">
            <div className="nav-container">
                <img src={logo} alt="logo" />
                <div className="menu-icon" onClick={toggleMenu}>
                    {menuOpen ? <IoClose size={35} color="white" style={{ margin: 'auto' }} /> : <IoMenu size={35} color="white" style={{margin : 'auto'}}/>}
                </div>
                <ul className={`nav-list ${menuOpen ? 'nav-responsive' : ''}`}>
                    <li>
                        <a href="/#">Home</a>
                    </li>
                    <li>
                        <a href="/#deliverables">Deliverables</a>
                    </li>
                    <li>
                        
                        <a href="/#benefits">Benefits</a>
                    </li>
                    <li>
                        
                        <a href="/#products">Products</a>
                    </li>
                    <li>
                        
                        <a href="/#team">Team</a>
                    </li>
                    <li>
                        
                        <a href="/#contact">Contact</a>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Navbar
