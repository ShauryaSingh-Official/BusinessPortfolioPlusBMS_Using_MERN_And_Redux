import './home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faXTwitter, faInstagram, faYoutube} from '@fortawesome/free-brands-svg-icons'

import kanahajiImg from '../../images/ProductMain.jpg';
import contactImg from '../../images/contact.jpg';
import product1 from '../../images/product1.jpg';
import product2 from '../../images/product2.jpg';
import product3 from '../../images/product3.jpg';
import product4 from '../../images/product4.jpg';


function Home(){
    return (
        <>
        <header>
        <div className="box">

        </div>
        <main className="container" id="home">
            <div className="home-text">
                <h1 className="font-large">MERE KANHA JI</h1>
                <h4 className="font-medium typewritter">TYPEWRITTER</h4>
                <p className="font-medium">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore optio ratione
                    cupiditate earum assumenda rerum iste placeat voluptatem, minima excepturi voluptatibus quisquam vel
                    minus culpa saepe quibusdam. Autem minima eos dolorum voluptas odio quibusdam eaque quaerat ut
                    tempore architecto laborum vel, cum quasi? Vero aperiam explicabo, quis maxime dolor ducimus?</p>
                <h4 className="font-medium"> -- Founder/CEO</h4>
                <button className="btn-secondary knowMore"><a href="#about">Know More</a></button>
            </div>
            <div className="home-image">
                <img src={kanahajiImg} alt='home-kanahaJi' />
            </div>
        </main>

    </header>

    <section id="about">
        <div className="about-area container">
            <h2 className="about-heading font-medium">About Company</h2>
            <h4 className="font-small">Since 2021,</h4>
            <p className="about-text font-small">We are the emerging business organization in supplying and manufacturing
                the
                Best Quality brass items (Ladoo Gopal -Specialist) based in Aligarh Uttar Pradesh India (202001).
                Our aim is to promote our religion by providing best Quality idols to make customer happy and
                satisfied.<br/>
                We are the experienced persons in manufacturing field who persists more than 30 years of experience. We
                supplies our products in India at any location at best price in industry.
            </p>
        </div>
    </section>

    <article id="top-products">
        {/* <div className="container"> */}
            <div className="top-products-list">
                
                <section className="product product1">
                    <div className='productImage'>
                        <img src={product1}/>
                    </div>
                    <div className='top-product-text'>
                        <h3 >Metal : Ashtadhatu </h3>
                        <h3>Size : No.6</h3>
                        <h3>Weight : 1.2 kg</h3>
                    </div>
                </section>

                <section className="product product1">
                    <div className='productImage'>
                        <img src={product2}/>
                    </div>
                    <div className='top-product-text'>
                        <h3 >Metal : Ashtadhatu </h3>
                        <h3>Size : No.4</h3>
                        <h3>Weight : 0.6 kg</h3>
                    </div>
                </section>
                
                <section className="product product1">
                    <div className='productImage'>
                        <img src={product3}/>
                    </div>
                    <div className='top-product-text'>
                        <h3 >Metal : Ashtadhatu </h3>
                        <h3>Size : No.6</h3>
                        <h3>Weight : 1.1 kg</h3>
                    </div>
                </section>
                
                <section className="product product1">
                    <div className='productImage'>
                        <img src={product4}/>
                    </div>
                    <div className='top-product-text'>
                        <h3 >Metal : Ashtadhatu </h3>
                        <h3>Size : No.6</h3>
                        <h3>Weight : 2 kg</h3>
                    </div>
                </section>
            </div>
            <button className="btn-secondary more-products-btn"><a href="#catelog">More Products</a></button>
        {/* </div> */}

    </article>

    {/* <article id="testimonials" className="higher-persons-view">
        <section className="container">
            <div>SLIDER</div>
        </section>
    </article> */}

    <article id="contact">
        <img src={contactImg} className="contact-bg-image" alt="contact-background"/>
        <section className="container">

            {/*  <h2 className="font-medium">Contact Us</h2>  */}
            <div className="contact-links">
                 {/* ICON  */}
                <div className="contact-method1 contact-method">
                    <a href="tel:+918267901206"  target="_blank" rel="noreferrer">
                        <span className="font-large icon-link">
                            <FontAwesomeIcon icon={faPhone} size='xl' style={{color:'#00ff20',}}/>
                        </span>
                        <span className="font-small icon-link-text">Call Us</span>
                    </a>
                </div>

                <div className="contact-method2 contact-method">
                    <a href="mailto:souravk48560@gmail.com"  target="_blank" rel="noreferrer">
                        <span className="font-large icon-link">
                        <FontAwesomeIcon icon={faEnvelope} size='xl' style={{color:'#f0f000',}}/>
                        </span>
                        <span className="font-small icon-link-text">Mail Us</span>
                    </a>
                </div>

                <div className="contact-method3 contact-method">
                    <a href="https://fb.com" target="_blank" rel="noreferrer">
                        <span className="font-large icon-link">
                        <FontAwesomeIcon icon={faFacebook} size='xl' style={{color:'#216ae8',}}/>
                        </span>
                        <span className="font-small icon-link-text">Facebook</span>
                    </a>
                </div>

                <div className="contact-method5 contact-method">
                    <a href="https://instagram.com" target='_blank' rel="noreferrer">
                        <span className="font-large icon-link">
                            <FontAwesomeIcon icon={faInstagram} size='xl' style={{color:'#feda74',}}/>
                        </span>
                        <span className="font-small icon-link-text">
                            Instagram
                        </span>

                    </a>
                </div>

                <div className="contact-method4 contact-method">
                    <a href="https://youtube.com" target="_blank" rel="noreferrer">
                        <span className="font-large icon-link">
                            <FontAwesomeIcon icon={faYoutube} size='xl' style={{color : '#ed1d1d',}}/>
                        </span>
                        <span className="font-small icon-link-text">Youtube</span>
                    </a>
                </div>

                <div className="contact-method4 contact-method">
                    <a href="https://twitter.com" target="_blank" rel="noreferrer">
                        <span className="font-large icon-link">
                            <FontAwesomeIcon icon={faXTwitter} size="xl" style={{color: "#4d87ea",}} />
                        </span>
                        <span className="font-small icon-link-text">Twitter</span>
                    </a>
                </div>

            </div>

            <div className="location">
                <iframe width="100%" height="510" title='AddressMap'
                    src="https://maps.google.com/maps?q=aligarh&t=k&z=10&ie=UTF8&iwloc=&output=embed">
                </iframe>
            </div>
        </section>
    </article>



    <article id="faq">
        <section className="faq-area">
            <div className="faq-section container">
                <h2 className="font-medium faq-heading">Frequently Asked Questions (FAQs)</h2>

                <details className="font-small">
                    <summary>1. How can i connect to MereKanhaJi.com ?</summary>
                    <p>It's simple to connect with us - <br/>
                        Call Us ( our head persons will ineract with you ) or <br/>
                        Email Us ( Email us with your contact details and we will connect with you soon. )
                        OR click here: <a href="#contact">Contact Page</a> <br /><br />
                        <hr />
                    </p>
                </details>

                <details className="font-small">
                    <summary>2. Is MereKanhaJi.com a B2B organization ?</summary>
                    <p>Yes, we are the emerging Business to Business (B2B) organization. <br />
                        ( Specially in Laddu Gopal/ KanhaJi / ThakurJi / Bal Gopal ) <br />
                        ( Go to: <a href="#contact">Contact page.</a> ) <br /><br />
                        <hr />
                    </p>
                </details>

                <details className="font-small">
                    <summary>3: Do we accept orders from direct customer/user ?</summary>
                    <p>We appreciate the religious feelings of our customers, So We welcomes you. You can also place
                        your order via Call us or email and we will definately connect you. <br /><br />
                        <hr />
                    </p>
                </details>
        </div>
        </section>
    </article>



    
        </>
    )
}

export default Home;