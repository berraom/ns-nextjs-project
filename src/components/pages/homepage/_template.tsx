"use client";

import "react-phone-number-input/style.css";
import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import { InputBase, InputField } from "@/components/input";

export const Homepage = () => {
  const [phoneValue, setPhoneValue] = useState<string | undefined>();
  const [formattedPhone, setFormattedPhone] = useState("");

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setFormattedPhone(formatted);
  };

  return (
    <InputBase style={{ display: "flex", gap: 12, alignItems: "center" }}>
      <div style={{ width: 130 }}>
        <PhoneInput
          defaultCountry="TR"
          international
          countryCallingCodeEditable={false}
          value={phoneValue}
          onChange={setPhoneValue}
          className="StyledPhoneInput"
        />
      </div>

      <InputField
        type="tel"
        inputMode="numeric"
        placeholder="555 555 55 55"
        maxLength={14}
        pattern="\d{3}\s\d{3}\s\d{2}\s\d{2}"
        value={formattedPhone}
        onChange={handleInputChange}
      />
    </InputBase>
  );
};
