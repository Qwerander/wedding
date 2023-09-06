import styled from 'styled-components';

export const GuestTableStl = styled.div`
  padding: 19px 25px;
  width: 116px;
  height: 180px;
  border-radius: 6px;
  background-color: ${({$choosen}) => ($choosen ? '#fdd' : '#fff')};
  box-shadow: 4px 6px 21px 0px rgba(0, 0, 0, 0.1), -4px -6px 13px 0px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
   &:hover {
    transform: scale(1.05);
   } 

  .title {
    margin-bottom: 18px;
    color: #3d3d3d;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
  }

  .text {
    text-align: center;
    color: #3d3d3d;
    font-size: 16px;
  }

  .text_free {
    text-align: center;
    color: #3d3d3d;
    font-weight: 600;
    font-size: 20px;
  }
`;
