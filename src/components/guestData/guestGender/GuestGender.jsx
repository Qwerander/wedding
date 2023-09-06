import { GuestDataTitle } from '../guestDataTitle/GuestDataTitle';
import { GuestGenderStl } from './guestGender.styled';

export const GuestGender = ({ setGuestData }) => {
  const handleChange = (e) => {
    setGuestData((prev) => ({ ...prev, gender: e.target.value }));
  };
  return (
    <GuestGenderStl>
      <GuestDataTitle text='Ваш пол' />
      <div className='wrapper'>
        <label>
          <input type='radio' name='gender' value='male' onChange={handleChange} />М
        </label>
        <label>
          <input type='radio' name='gender' value='female' onChange={handleChange} />Ж
        </label>
      </div>
    </GuestGenderStl>
  );
};
