import './mainMenu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserTie } from '@fortawesome/free-solid-svg-icons'

import { Link } from 'react-router-dom';
import {useState } from 'react';


function MainMenu() {

    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 100) {
            setColorchange(true);
        }
        else if (window.scrollY <= 100) {
            setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);

    return (
        <>
            <nav className={colorChange ? 'main-menu dark' : 'main-menu'} >
                <Link to="/#main-menu" className="logo">MKJ</Link>
                <div className="main-menu-options">
                    <ul>
                        <li><Link to="/#home">Home</Link> </li>
                        <li><Link to="/#about">About</Link> </li>
                        <li><Link to="/#contact">Contact</Link> </li>
                    </ul>
                </div>

                <div className="side-menu-options">
                    <ul>
                        <li><Link to="/#catalog" className="btn-primary">Products Catelog</Link></li>           {/* <!--Link the PDF--> */}
                        <li><Link to="/admin" className='btn-admin'>Admin  <FontAwesomeIcon icon={faUserTie} style={{ color: "#35fb37", }} />
                        </Link></li>                                              {/* <!--Change to Login--> */}
                    </ul>
                </div>

                <div className="dropdown-menu">
                    <h3>Main Menu</h3>
                    <hr />
                    <div className="dropdown-menu-options">
                        <ul>
                            <li><Link to="/#home">Home</Link></li>
                            <li><Link to="/#about">About</Link></li>
                            <li><Link to="/#contact">Contact</Link></li>
                            <li><Link to="/#catalog" >Products Catelog</Link></li>               {/* <!--Link the PDF--> */}
                            <li><Link to="/admin">admin</Link></li>                           {/* <!--Change to Login--> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default MainMenu;