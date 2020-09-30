import React from 'react';
// import FooterLogo from '../../assets/logopng.png';
import {AiFillLinkedin} from 'react-icons/ai';
import './footer.css';

const Footer = () => {
    return(
        <div className="footerWrapper">
            <div className="footerItem">
                <AiFillLinkedin className="footerLogo" />
                <a className="footerLogoText" >Linkedin</a>
            </div>
        </div>
    )
}
export default Footer;