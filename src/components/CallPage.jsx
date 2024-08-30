import '../assets/css/Homepage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPhoneFlip, faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FaLinkedin, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';


const CallPage = () => {
  return (
      <div className='callinfo'>
        <p className='phoneitem'><FontAwesomeIcon icon={faLocationDot}/>123 Street, New York, USA</p>
        <p className='phoneitem'><FontAwesomeIcon icon={faPhoneFlip}/>+012 345 6789</p>
        <p className='phoneitem'><FontAwesomeIcon icon={faEnvelope}/>info@example.com</p>
        <div className='socials'>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin color='white' size={25}/>
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook color='white' size={25} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter color='white' size={25} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram color='white' size={25} />
            </a>
        </div>
      </div>
   
  )
}

export default CallPage;
