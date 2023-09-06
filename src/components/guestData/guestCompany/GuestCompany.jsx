import { useState } from "react";
import { GuestCompanyStl } from "./guestCompany.styled"
import { GuestDataTitle } from "../guestDataTitle/GuestDataTitle";
import { GuestInput } from "../guestInput/GuestInput";

export const GuestCompany = ({guestData, setGuestData}) => {
    const [additionalGuests, setAdditionalGuests] = useState(guestData.withMe);

    const handleInputChange = (index, e) => {
      const updatedGuests = [...additionalGuests];
      updatedGuests[index] = e.target.value;
      setAdditionalGuests(updatedGuests);
      setGuestData(prevData => ({ ...prevData, withMe: [...updatedGuests] }));
    };
  
    const handleAddField = () => {
      setAdditionalGuests(prevGuests => [...prevGuests, ' ']);
    };
  
    return (
      <GuestCompanyStl>
        <GuestDataTitle text='Со мной придут' />
        {additionalGuests.map((guest, index) => (
          <GuestInput
            key={index}
            value={guest}
            onChange={(e) => handleInputChange(index, e)}
          />
        ))}
        <button onClick={handleAddField}>Добавить</button>
      </GuestCompanyStl>
    );
}
