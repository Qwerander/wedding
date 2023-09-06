import { useSelector } from 'react-redux';
import { GuestTableStl } from './guestTable.styled';
import { tableSelect } from '../../../store/reducers/dataSlice';

export const GuestTable = ({ active, tableNumber }) => {
  const { seats } = useSelector(tableSelect(tableNumber - 1));
  const free = seats.filter((s) => s.guest === null).length;

  return (
    <GuestTableStl $choosen={active === tableNumber}>
      <h2 className='title'>Стол №{tableNumber}</h2>
      <p className='text'>Свободно</p>
      <p className='text_free'>{free}/10</p>
      <p className='text'>мест</p>
    </GuestTableStl>
  );
};
