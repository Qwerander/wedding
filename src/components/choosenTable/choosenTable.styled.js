import styled from 'styled-components';

export const ChoosenTableStl = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;

  .title {
    color: #3d3d3d;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    text-align: center;
  }

  .table {
    width: 300px;
    height: 440px;
    border-radius: 6px;
    background-color: #fff;
    box-shadow: 4px 6px 21px 0px rgba(0, 0, 0, 0.1), -4px -6px 13px 0px rgba(0, 0, 0, 0.1);
    padding: 12px 20px;
    display: grid;
    grid-template-columns: 1fr 100px 1fr;
    gap: 12px;
  }

  .center {
    border-radius: 6px;
    background: #f2f2f2;
    box-shadow: 7px 6px 9px 0px rgba(0, 0, 0, 0.1), -4px -6px 6px 0px rgba(0, 0, 0, 0.1);
  }

  .seats {
    display: flex;
    flex-direction: column;
    gap: 24px;
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
    &:disabled {
        opacity: 0.7;
    }
  }
`;
