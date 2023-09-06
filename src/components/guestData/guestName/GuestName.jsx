import { GuestDataTitle } from '../guestDataTitle/GuestDataTitle';
import { GuestInput } from '../guestInput/GuestInput';
import { GuestNameStl } from './guestName.styled';

export const GuestName = ({ setGuestData }) => {
  return (
    <GuestNameStl>
      <GuestDataTitle text='Как вас зовут?' />
      <GuestInput onChange={(e) => setGuestData((prev) => ({ ...prev, name: e.target.value }))} />
    </GuestNameStl>
  );
};
