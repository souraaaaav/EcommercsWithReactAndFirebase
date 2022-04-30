import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <section class="footer">
            <div class="footer-container container">
                <h2>Herbrand</h2>
                <div class="footer-box">

                    <a href="https://www.facebook.com/rj.neon.9"><i class="bx bxl-facebook"></i></a>
                    <a href="https://www.linkedin.com/in/nusrat-khan-810247200/"><i class="bx bxl-linkedin"></i></a>
                    <a href="https://www.instagram.com/nnion__/"><i class="bx bxl-instagram"></i></a>
                </div>
                <div class="footer-box">
                    <Link to="/termsandcondition">
                        <h3 className='social'>Terms and conditions</h3>
                    </Link>

                </div>
                <div class="footer-box">
                    <h3>Contact us</h3>
                    <a href="https://gmail.com/">nusrat.khan@g.bracu.ac.bd</a>
                </div>
            </div>
        </section>
    )
}

export default Footer