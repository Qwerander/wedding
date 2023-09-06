import { useState } from 'react';
import { GuestDataStl } from './guestData.styled';
import { Photo } from './photo/Photo';
import { GuestName } from './guestName/GuestName';
import { GuestGender } from './guestGender/GuestGender';
import { GuestWhose } from './guestWhose/GuestWhose';
import { GuestCompany } from './guestCompany/GuestCompany';
import { GuestAge } from './guestAge/GuestAge';
import { useDispatch, useSelector } from 'react-redux';
import { activeSeatSelect, activeTableSelect, setGuestOnSeat, setProgress } from '../../store/reducers/dataSlice';
import { useNavigate } from 'react-router-dom';

export const GuestData = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const table = useSelector(activeTableSelect) - 1;
  const seat = useSelector(activeSeatSelect) - 1;
  const [guestData, setGuestData] = useState({
    name: '',
    gender: null,
    age: 18,
    who: null,
    withMe: [''],
  });

  const handleClick = () => {
    dispatch(setProgress(10));
    dispatch(setGuestOnSeat({ table, seat, guest: guestData }));
    navigate('/complete')
  };

  return (
    <GuestDataStl>
      <Photo setGuestDat={setGuestData} guestData={guestData} />
      <GuestName setGuestData={setGuestData} />
      <GuestGender setGuestData={setGuestData} />
      <GuestAge age={guestData.age} setGuestData={setGuestData} />
      <GuestWhose setGuestData={setGuestData} whose={guestData.who} />
      <GuestCompany guestData={guestData} setGuestData={setGuestData} />
      <button className='btn' onClick={handleClick} disabled={guestData.name === ''}>
        Далее
      </button>
    </GuestDataStl>
  );
};
