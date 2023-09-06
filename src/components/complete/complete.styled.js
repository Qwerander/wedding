import styled from 'styled-components';

export const CompleteStl = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  margin-top: 100px;
  .title {
    color: #b93b3b;
    font-family: 'Playfair Display';
    font-size: 30px;
    font-weight: 600;
  }
  .wrapper {
    display: flex;
    flex-direction: column;
    gap: 6px;
    align-items: center;
    > p {
      color: #3d3d3d;
      font-size: 24px;
      font-weight: 600;
    }
  }
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

  }
`;
