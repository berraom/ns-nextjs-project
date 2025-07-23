"use client";

import { useState } from "react";

const countryList = [
  { code: "+90", name: "Türkiye", flag: "🇹🇷" },
  { code: "+1", name: "Amerika", flag: "🇺🇸" },
  { code: "+49", name: "Almanya", flag: "🇩🇪" },
  { code: "+44", name: "İngiltere", flag: "🇬🇧" },
  { code: "+33", name: "Fransa", flag: "🇫🇷" },
];

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export const CountryCodeDropdown = ({ value, onChange }: Props) => {
  return (
    <select
      className="border px-3 py-2 rounded-md"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {countryList.map((country) => (
        <option key={country.code} value={country.code}>
          {country.flag} {country.name} ({country.code})
        </option>
      ))}
    </select>
  );
};
