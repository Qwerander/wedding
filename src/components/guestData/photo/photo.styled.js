import styled from 'styled-components';

export const PhotoStl = styled.div`
  width: 160px;
  height: 160px;
  border: 1px solid #b93b3b;
  border-radius: 100%;
  overflow: hidden;

  position: relative;
  cursor: pointer;
  input {
    display: none;
  }
  > img {
    position: absolute;
    top: 0;
    object-fit: cover;
  }
  & > div > img {
    transition: opacity 0.3s ease-in-out;
  }
  &:hover div > img {
    opacity: 0;
  }
`;
