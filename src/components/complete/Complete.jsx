import { CompleteStl } from './complete.styled';
import complete from '../../assets/img/complete.png';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { activeSeatSelect, activeTableSelect, clear } from '../../store/reducers/dataSlice';
import { useEffect } from 'react';

export const Complete = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const table = useSelector(activeTableSelect);
  const seat = useSelector(activeSeatSelect);

  const handleClick = () => {
    navigate('/tables');
    dispatch(clear());
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate('/tables');
      dispatch(clear());
    }, 5000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [navigate, dispatch]);

  return (
    <CompleteStl>
      <h2 className='title'>Отлично!</h2>
      <img src={complete} alt='' />
      <div className='wrapper'>
        <p>Вы заняли место №{seat}</p>
        <p> за столом №{table}</p>
      </div>
      <button className='btn' onClick={handleClick}>
        На главную
      </button>
    </CompleteStl>
  );
};
