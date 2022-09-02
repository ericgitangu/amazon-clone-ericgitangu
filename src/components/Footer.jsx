import React from 'react';
import { AiFillLinkedin, AiOutlineGithub} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 Eric Gitangu's Audio Shop - All rights reserverd</p>
      <p className="icons">
        <a href="https://linkedin.com/in/ericgitangu" >
          <AiFillLinkedin style={{cursor:'pointer'}} />
        </a>  
        <a href="https://github.com/ericgitangu">
          <AiOutlineGithub style={{cursor:'pointer'}}/>
        </a>  
      </p>
    </div>
  )
}

export default Footer
