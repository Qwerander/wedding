import styled from 'styled-components';

export const GuestPlaceStl = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 64px;
  border: ${({$active}) => $active ? '3px solid #b93b3b' : '1px solid #b93b3b' };
  background-color:${({$active}) => $active ? '#fdd' : '#fff' };
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;
