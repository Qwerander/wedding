import { ProgressBarStl } from './progressBar.styled';
import { progressSelect } from '../../store/reducers/dataSlice';
import { useSelector } from 'react-redux';
import { ReactComponent as OkSvg } from '../../assets/img/icon/ok.svg';
import { TitleProgress } from './titleProgress/TitleProgress';

export const ProgressBar = () => {
  const progress = useSelector(progressSelect);

  return (
    <ProgressBarStl $progress={progress}>
      <TitleProgress progress={progress} />
      <div className='progress'>
        <div className='stage'>{progress > 1 ? <OkSvg /> : 1}<span>Стол</span></div>
        <div className='divider'></div>
        <div className='stage'>{progress > 3 ? <OkSvg /> : 2}<span>Место</span></div>
        <div className='divider'></div>
        <div className='stage'>{progress > 5 ? <OkSvg /> : 3}<span>Данные</span></div>
      </div>
    </ProgressBarStl>
  );
};
