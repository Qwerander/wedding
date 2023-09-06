import styled from 'styled-components';
import check from '../../../assets/img/icon/check.svg';

export const GuestWhoseStl = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  padding: 0 30px;
  .wrapper {
    display: flex;
    justify-content: space-between;
  }

  .img {
    position: relative;
    z-index: 10;
  }
  .img::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    opacity: 0.5;
    z-index: 100;
    cursor: pointer;
  }
  .groom::before {
    background-image: url(${({ $whose }) => $whose === 'groom' && check});
  }
  .bride::before {
    background-image: url(${({ $whose }) => $whose === 'bride' && check});
  }
`;
