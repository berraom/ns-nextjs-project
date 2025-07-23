"use client";

import { useState } from "react";
import { CountryCodeDropdown } from "@/components/Homepage/countryCodeDropdown";
import { InputBase, InputField } from "@/components/input";

export const Homepage = () => {
  const [countryCode, setCountryCode] = useState("+90");
  const [phoneNumber, setPhoneNumber] = useState("");

  const formatPhoneNumber = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 10);
    const part1 = digits.slice(0, 3);
    const part2 = digits.slice(3, 6);
    const part3 = digits.slice(6, 8);
    const part4 = digits.slice(8, 10);

    let formatted = part1;
    if (part2) formatted += " " + part2;
    if (part3) formatted += " " + part3;
    if (part4) formatted += " " + part4;

    return formatted;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setPhoneNumber(formatted);
  };

  return (
    <InputBase>
      <div className="country-wrapper">
        <CountryCodeDropdown value={countryCode} onChange={setCountryCode} />
      </div>

      <InputField
        type="tel"
        inputMode="numeric"
        placeholder="555 555 55 55"
        maxLength={14}
        pattern="\d{3}\s\d{3}\s\d{2}\s\d{2}"
        value={phoneNumber}
        onChange={handlePhoneChange}
      />
    </InputBase>
  );
};
