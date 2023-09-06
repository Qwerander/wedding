import { GuestInputStl } from "./guestInput.styled";

export const GuestInput = ({ value, onChange }) => {
    return <GuestInputStl type="text" value={value} onChange={onChange} />;
  };