import { useDispatch, useSelector } from 'react-redux';
import { ChoosenTableStl } from './choosenTable.styled';
import { activeSeatSelect, activeTableSelect, setActiveSeat, setProgress, tableSelect } from '../../store/reducers/dataSlice';
import { GuestPlace } from './guestPlace/GuestPlace';
import { useNavigate } from 'react-router-dom';

export const ChoosenTable = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
  const activeTable = useSelector(activeTableSelect);
  const { seats } = useSelector(tableSelect(activeTable - 1));
  const activeSeat = useSelector(activeSeatSelect);

  const handleClick = (seat) => {
    if (!seats[seat - 1].guest) {
      dispatch(setActiveSeat({ seat }));
    }
  };

  const handleClickProgress = () => {
      dispatch(setProgress(5))
      navigate('/data')
  }

  return (
    <ChoosenTableStl>
      <h3 className='title'>Стол №{activeTable}</h3>
      <div className='table'>
        <div className='seats'>
          {seats.slice(0, 5).map((place) => (
            <div key={place.id} onClick={() => handleClick(place.id)}>
              <GuestPlace guest={place.guest} active={place.id === activeSeat} />
            </div>
          ))}
        </div>
        <div className='center'></div>
        <div className='seats'>
          {seats.slice(5).map((place) => (
            <div key={place.id} onClick={() => handleClick(place.id)}>
              <GuestPlace guest={place.guest} active={place.id === activeSeat} />
            </div>
          ))}
        </div>
      </div>
      <button className='btn' onClick={handleClickProgress} disabled={activeSeat === null}>Далее</button>
    </ChoosenTableStl>
  );
};
