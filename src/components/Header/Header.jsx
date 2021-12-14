import React from 'react';

// components
import SocialMedia from '../SocialMedia/SocialMedia';
import Title from '../Title/Title';
import ToggleTheme from '../ToggleTheme/ToggleTheme';
// style
import { HeaderComponent } from './header-style';
// assets
import avatar from "../../assets/avatar.jpeg";

const Header = () => {
  const navigation = ['Sobre', 'Conhecimentos', 'Projetos', 'Contato'];
  const [menu, setMenu] = React.useState(false);

  // controlar menu
  const menuController = () => {};
  return (
    <HeaderComponent>
      <div className="header-image">
        <img src={avatar} alt="Avatar" />
      </div>

      <div className="header-content">
        <h1>João Victor Ambrozi</h1>
        <p>Desenvolvedor Web Front-end</p>
        <SocialMedia />
      </div>

      <div className="hamburguer" >
        <div className="hamburguer-field" onClick={menuController}></div>
      </div>
      <nav>
        <ul className="nav">
          {
            navigation.map((link, index) => (
              <a href={`#${link}`}>
                <li key={link}>{`0${index + 1}. ${link}`}</li>
                {/* criar função para deixar primeira letra maiúscula */}
              </a>))
          }
        </ul>
      </nav>
      <div className="header-toggle">
        <ToggleTheme />
      </div>
    </HeaderComponent>
  )
}

export default Header
