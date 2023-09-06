import styled from 'styled-components';

export const GuestDataStl = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;

  .btn {
    padding: 0px 28px 0px 30px;
    border-radius: 20px;
    background-color: #b93b3b;
    box-shadow: 0px 4px 4px 0px rgba(209, 75, 75, 0.25);
    color: #fff;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    line-height: 30px;
    min-width: 160px;
    margin: 0 auto;
    margin-top: 48px;
    &:disabled {
      opacity: 0.7;
    }
  }
`;
