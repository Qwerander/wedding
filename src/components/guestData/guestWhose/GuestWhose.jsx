import { GuestWhoseStl } from './guestWhose.styled';
import bride from '../../../assets/img/bride.png';
import groom from '../../../assets/img/groom.png';
import { GuestDataTitle } from '../guestDataTitle/GuestDataTitle';

export const GuestWhose = ({ setGuestData, whose }) => {
  return (
    <GuestWhoseStl $whose={whose}>
      <GuestDataTitle text='Я со стороны' />
      <div className='wrapper'>
        <div className='img groom' onClick={() => setGuestData((prev) => ({ ...prev, who: 'groom' }))}>
          <img src={groom} alt='' />
        </div>
        <div className='img bride' onClick={() => setGuestData((prev) => ({ ...prev, who: 'bride' }))}>
          <img src={bride} alt='' />
        </div>
      </div>
    </GuestWhoseStl>
  );
};
