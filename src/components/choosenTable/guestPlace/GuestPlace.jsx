
import { GuestPlaceStl } from "./guestPlace.styled"


export const GuestPlace = ({guest, active}) => {

  return (
    <GuestPlaceStl $active={active}>
        <img src={guest?.image} alt="" />
    </GuestPlaceStl>
  )
}
