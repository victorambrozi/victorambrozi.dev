import styled from "styled-components";

const SocialMediaComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .8rem;

  a {
    > img {
      width: 2rem;
      height: 2rem;
      transition: .3s;

      &:hover {
        transform: translate3d(0, -2px, 0);
      }
    }
  }
`;

export {
  SocialMediaComponent
};