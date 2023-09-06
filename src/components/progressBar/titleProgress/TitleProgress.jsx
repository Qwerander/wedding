import React from 'react';
import { TitleProgressStl } from './titlePogress.styled';

export const TitleProgress = ({ progress }) => {
  switch (progress) {
    case 1:
      return <TitleProgressStl>Выберите стол</TitleProgressStl>;
    case 3:
      return <TitleProgressStl>Займите место</TitleProgressStl>;
    case 5:
      return <TitleProgressStl>Введите данные</TitleProgressStl>;
    default:
      return null;
  }
};
