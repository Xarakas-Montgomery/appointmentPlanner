import React from "react";

/*export const ContactPicker = ({contacts, onChange, value, name}) => {
  return (
    <>
      <select 
      aria-label="Contact Picker"
      onChange={handleChange}
      value={value}
      name={name}>
      <option value="">No Contact Selected</option>
        {(contacts || []).map((contact, index) => (
          <option placeholder="No Contact Selected" key={index} value={contact.name}>{contact.name}</option>
        ))}
      </select>
    </>
  );
};*/

export const ContactPicker = ({ value, name, onChange, contacts }) => {
  return (
    <select aria-label="Contact Picker" value={value} name={name} onChange={onChange}>
      <option value={""} key={-1}>
        No Contact Selected
      </option>
      {(contacts || []).map((contact) => {
        return (
          <option value={contact} key={contact}>
            {contact}
          </option>
        );
      })}
    </select>
  );
};

