import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faXTwitter, faInstagram, faYoutube} from '@fortawesome/free-brands-svg-icons'

export default function Footer(){
    return(
        <>
        <footer id="footer">
        <article className="footer-area">
            <div className="footer-container container">
                <div className="footer-top">
                    <div className="footer-left">
                        <h2>My Kanha Ji <span class="verified-icon"><FontAwesomeIcon  icon={faCircleCheck} size='2xs' style={{color:'#00ff20',}}/></span>
                            
                        </h2>
                        <p className="footer-address font-small">Jaiganj Sasni Gate,<br/>Aligarh Uttar Pradesh India
                            (202001).<br /><br />

                            <a href="tel:+918267901206" className="font-small" target='_blank' rel="noreferrer">+918267901206</a>
                            <a href="mailto:souravk48560@gmail.com" className="font-small" target='_blank' rel="noreferrer">souravk48560@gmail.com</a>
                        </p>
                    </div>

                    <div className="footer-right font-small">
                        <h2 className="font-small">Social Links</h2>
                        <div className="footer-icons-container">
                            <a href="https://facebook.com" target='_blank' rel="noreferrer" className="footer-social-links"><FontAwesomeIcon icon={faFacebook} size="xl" style={{color: "#4d87ea",}} /></a>
                            <a href="https://Instagram.com" target='_blank' rel="noreferrer" className="footer-social-links"><FontAwesomeIcon icon={faInstagram} size="xl" style={{color: "#feda74",}} /></a>
                            <a href="https://Youtube.com" target='_blank' rel="noreferrer" className="footer-social-links"><FontAwesomeIcon icon={faYoutube} size="xl" style={{color: "#ed1d1d",}} /></a>
                            <a href="https://twitter.com" target='_blank' rel="noreferrer" className="footer-social-links"><FontAwesomeIcon icon={faXTwitter} size="xl" style={{color: "#4d87ea",}} /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-mid">
                <h2>&copy SHAURAYA SINGH 2023. BMS ALL RIGHTS RESERVED.</h2>
            </div>
            
        </article>
    </footer>
        </>
    )
}