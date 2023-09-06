import { useRef } from 'react';
import { uploadFile } from './fileUploader';
import { PhotoStl } from './photo.styled';
import { useDispatch } from 'react-redux';
import PhotoAlt from './photo_alt.png';
import avatar from './photo_alt.png';
import ImageHover from './photo_hover.png';
import RoundPhoto from './RoundPhoto';

export const Photo = () => {
  const refAvatar = useRef();
  const dispatch = useDispatch();
  const addPhoto = () => {
    refAvatar.current.click(); // Открыть окно выбора файла
  };

  const handleFileChange = (e) => {};

  return (
    <PhotoStl onClick={addPhoto}>
      <img src={ImageHover} alt='' />
      <RoundPhoto addr={avatar ? `${avatar}` : PhotoAlt} />
      <input type='file' name='' id='loadPhoto' ref={refAvatar} onChange={handleFileChange} />
    </PhotoStl>
  );
};
