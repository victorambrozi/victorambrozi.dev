import styled from "styled-components";

const HeaderComponent = styled.header`
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  background: linear-gradient(180deg, #5429CF 0%, rgba(84, 41, 207, 0) 100%);

  position: relative;
  .header-image {
    > img {
      width: 84px;
      height: 84px;
      border: 2px solid #F5F5F5;
      border-radius: 50%;
    }
  }
  
  .header-content {
    margin-left: 16px;
    
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    color: ${props => props.theme.colors.text};
     > h1 {
       font-size: 1.6rem;
       font-weight: 400;
     }

     p {
       margin: .8rem 0;
       font-size: 1rem;
       text-transform: uppercase;

     }

    }

    .hamburguer {
      width: 1.8rem;
      height: .18rem;

      position: fixed;
      top: 25px;
      right: 15px;
      border-radius: 5px;
      z-index: 10;

      background: ${props => props.theme.colors.text};
      &:before {
        content: '';
        display: block;

        width: 1.8rem;
        height: .18rem;
        border-radius: 5px;

        background: ${props => props.theme.colors.text};
        position: absolute;
        top: -7px;
      }

      &:after {
        content: '';
        display: block;

        width: 1.8rem;
        height: .18rem;
        border-radius: 5px;

        background: ${props => props.theme.colors.text};
        position: absolute;
        top: 7px;
      }

      .hamburguer-field {
        width: 3rem;
        height: 3rem;

        position: absolute;
        top: -13px;
        left: -5px;

        z-index: 20;
        cursor: pointer;
      }
    }

    .nav {
      padding: 6.4rem 3rem 3rem;
      height: 100vh;
      text-align: center;

      position: fixed;
      top: 0;
      right: 0;
      background: linear-gradient(#5429CF 0%, rgba(255, 255, 255, 0) 100%);
      z-index: 4;
      li {
        color: ${props => props.theme.colors.text}
      }
    }
    
    .header-toggle {
      position: absolute;
      bottom: 25px;
      right: 15px;

    }
`;

export {
  HeaderComponent
}