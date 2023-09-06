import { TablesStl } from './tables.styled';
import weddingTable from '../../assets/img/wedding-table.png';
import { GuestTable } from './guestTable/GuestTable';
import { useDispatch, useSelector } from 'react-redux';
import { activeTableSelect, setActiveTable, setProgress } from '../../store/reducers/dataSlice';
import { useNavigate } from 'react-router-dom';

export const Tables = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const activeTable = useSelector(activeTableSelect);

  const handleClick = () => {
    dispatch(setProgress(3))
    navigate('/seats')
  }

  return (
    <TablesStl>
      <img className='wedding-table' src={weddingTable} alt='Свадебный стол' />
      <div className='tables'>
        <div onClick={() => dispatch(setActiveTable({ table: 1 }))}>
          <GuestTable tableNumber={1} active={activeTable} />
        </div>
        <div onClick={() => dispatch(setActiveTable({ table: 2 }))}>
          <GuestTable tableNumber={2} active={activeTable} />
        </div>
        <div onClick={() => dispatch(setActiveTable({ table: 3 }))}>
          <GuestTable tableNumber={3} active={activeTable} />
        </div>
        <div onClick={() => dispatch(setActiveTable({ table: 4 }))}>
          <GuestTable tableNumber={4} active={activeTable} />
        </div>
      </div>
      <button className='btn' onClick={handleClick} disabled={activeTable === null}>Далее</button>
    </TablesStl>
  );
};
