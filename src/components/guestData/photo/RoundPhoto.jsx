import styled from 'styled-components';

const RoundPhotoStyled = styled.div`
  clip-path: circle(50%);
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  img {
    height: fit-content;
    object-fit: cover;
  }
`;
const RoundPhoto = ({ addr }) => {
  return (
    <RoundPhotoStyled>
      <img src={addr} alt='' />
    </RoundPhotoStyled>
  );
};

export default RoundPhoto;
