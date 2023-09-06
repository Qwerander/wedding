import { GuestDataTitle } from '../guestDataTitle/GuestDataTitle';
import { GuestAgeStl } from './guestAge.styled';

export const GuestAge = ({ age, setGuestData }) => {
  const handleAgeChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) {
      setGuestData((prev) => ({ ...prev, age: value }));
    }
  };

  const handleDecreaseAge = () => {
    setGuestData((prev) => ({ ...prev, age: prev.age - 1 }));
  };

  const handleIncreaseAge = () => {
    setGuestData((prev) => ({ ...prev, age: prev.age + 1 }));
  };

  return (
    <GuestAgeStl>
      <GuestDataTitle text='Сколько вам лет?' />
      <div className='wrapper'>
        <button onClick={handleDecreaseAge}>-</button>
        <input type='number' value={age} onChange={handleAgeChange} min={18} max={100}/>
        <button onClick={handleIncreaseAge}>+</button>
      </div>
    </GuestAgeStl>
  );
};
