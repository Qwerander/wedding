import styled, { css } from 'styled-components';

export const ProgressBarStl = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  margin-bottom: 30px;

  .progress {
    display: flex;
    gap: 15px;
    align-items: center;
    justify-content: center;

    .stage {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 15px;
      min-width: 48px;
      min-height: 48px;
      border: 1px solid black;
      border-radius: 100%;
      ${({ $progress }) =>
        Array.from({ length: $progress }).map(
          (_, index) => css`
            &:nth-child(${index + 1}) {
              border-color: #b93b3b;
            }
          `
        )};
      span {
        position: absolute;
        left: 50%;
        bottom: 0;
        color: #6e6e6e;
        font-size: 12px;
        font-weight: 400;
        transform: translate(-50%, 20px)
      }
    }

    .divider {
      min-width: 30px;
      min-height: 1px;
      border-bottom: 1px solid black;
      ${({ $progress }) =>
        Array.from({ length: $progress }).map(
          (_, index) => css`
            &:nth-child(${index + 1}) {
              border-color: #b93b3b;
            }
          `
        )};
    }
  }
`;
