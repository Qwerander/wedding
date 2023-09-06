import styled from 'styled-components';

export const GuestAgeStl = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  .wrapper {
    display: flex;
    gap: 24px;
    > button {
      font-size: 38px;
      font-weight: 400;
    }
    input[type='number'] {
      border: none;
      outline: none;
      max-width: 30px;
      font-size: 24px;

    }
    input[type='number']::-webkit-inner-spin-button,
    input[type='number']::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`;
