import React, { useMemo } from "react";
import { ContactPicker } from '../contactPicker/ContactPicker'

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  name,
  setName,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  const contactNames = useMemo(() => {
    return (contacts || []).map((contact) => contact.name);
  }, [contacts]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <input
          type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Appointment's Name">
          </input>
        </label>

        <label>
          <ContactPicker 
          name="contact"
          value={contact}
          contacts={contactNames}
          onChange={(e) => setContact(e.target.value)}/>
        </label>

        <label>
          <input
            type='date'
            value={date}
            min={getTodayString()}
            onChange={(e) => setDate(e.target.value)}
            required
            placeholder="Select a date">
          </input>
        </label>

        <label>
          <input
            type='time'
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
            placeholder="Select a time">
          </input>
        </label>

        <input aria-label="Add Appointment" type="submit" value="Add Appointment"/>
      </form>

    </>
  );
};
