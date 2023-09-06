import styled from 'styled-components';

export const TablesStl = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .wedding-table {
    display: block;
    margin: 0 auto;
  }

  .tables {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 68px;
    row-gap: 48px;
    > div {
      justify-self: center;
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
    &:disabled {
        opacity: 0.7;
    }
  }
`;
