import React from 'react';
import { SocialMediaComponent } from './social-media-style';

import instagram from "../../assets/instagram-light.svg";
import linkedin from "../../assets/linkedin-light.svg";
import github from "../../assets/github-light.svg";

const SocialMedia = () => {
  return (
    <SocialMediaComponent>
      <a href="https://github.com/victorambrozi">
        <img src={github} alt="Github" />
      </a>
      <a href="https://www.linkedin.com/in/victorambrozi/">
        <img src={linkedin} alt="Linkedin" />
      </a>
      <a href="https://www.instagram.com/v_ambrozi/">
        <img src={instagram} alt="Instagram" />
      </a>
    </SocialMediaComponent>
  )
};

export default SocialMedia;
