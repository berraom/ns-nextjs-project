"use client";

import React from "react";

const countryList = [
  { code: "+1", name: "Amerika Birleşik Devletleri", flag: "🇺🇸" },
  { code: "+7", name: "Rusya", flag: "🇷🇺" },
  { code: "+20", name: "Mısır", flag: "🇪🇬" },
  { code: "+27", name: "Güney Afrika", flag: "🇿🇦" },
  { code: "+30", name: "Yunanistan", flag: "🇬🇷" },
  { code: "+31", name: "Hollanda", flag: "🇳🇱" },
  { code: "+32", name: "Belçika", flag: "🇧🇪" },
  { code: "+33", name: "Fransa", flag: "🇫🇷" },
  { code: "+34", name: "İspanya", flag: "🇪🇸" },
  { code: "+36", name: "Macaristan", flag: "🇭🇺" },
  { code: "+39", name: "İtalya", flag: "🇮🇹" },
  { code: "+40", name: "Romanya", flag: "🇷🇴" },
  { code: "+41", name: "İsviçre", flag: "🇨🇭" },
  { code: "+43", name: "Avusturya", flag: "🇦🇹" },
  { code: "+44", name: "Birleşik Krallık", flag: "🇬🇧" },
  { code: "+45", name: "Danimarka", flag: "🇩🇰" },
  { code: "+46", name: "İsveç", flag: "🇸🇪" },
  { code: "+47", name: "Norveç", flag: "🇳🇴" },
  { code: "+48", name: "Polonya", flag: "🇵🇱" },
  { code: "+49", name: "Almanya", flag: "🇩🇪" },
  { code: "+52", name: "Meksika", flag: "🇲🇽" },
  { code: "+54", name: "Arjantin", flag: "🇦🇷" },
  { code: "+55", name: "Brezilya", flag: "🇧🇷" },
  { code: "+56", name: "Şili", flag: "🇨🇱" },
  { code: "+57", name: "Kolombiya", flag: "🇨🇴" },
  { code: "+58", name: "Venezuela", flag: "🇻🇪" },
  { code: "+60", name: "Malezya", flag: "🇲🇾" },
  { code: "+61", name: "Avustralya", flag: "🇦🇺" },
  { code: "+62", name: "Endonezya", flag: "🇮🇩" },
  { code: "+63", name: "Filipinler", flag: "🇵🇭" },
  { code: "+64", name: "Yeni Zelanda", flag: "🇳🇿" },
  { code: "+65", name: "Singapur", flag: "🇸🇬" },
  { code: "+66", name: "Tayland", flag: "🇹🇭" },
  { code: "+81", name: "Japonya", flag: "🇯🇵" },
  { code: "+82", name: "Güney Kore", flag: "🇰🇷" },
  { code: "+84", name: "Vietnam", flag: "🇻🇳" },
  { code: "+86", name: "Çin", flag: "🇨🇳" },
  { code: "+90", name: "Türkiye", flag: "🇹🇷" },
  { code: "+91", name: "Hindistan", flag: "🇮🇳" },
  { code: "+92", name: "Pakistan", flag: "🇵🇰" },
  { code: "+93", name: "Afganistan", flag: "🇦🇫" },
  { code: "+94", name: "Sri Lanka", flag: "🇱🇰" },
  { code: "+95", name: "Myanmar", flag: "🇲🇲" },
  { code: "+98", name: "İran", flag: "🇮🇷" },
  { code: "+211", name: "Güney Sudan", flag: "🇸🇸" },
  { code: "+212", name: "Fas", flag: "🇲🇦" },
  { code: "+213", name: "Cezayir", flag: "🇩🇿" },
  { code: "+216", name: "Tunus", flag: "🇹🇳" },
  { code: "+218", name: "Libya", flag: "🇱🇾" },
  { code: "+220", name: "Gambiya", flag: "🇬🇲" },
  { code: "+221", name: "Senegal", flag: "🇸🇳" },
  { code: "+222", name: "Moritanya", flag: "🇲🇷" },
  { code: "+223", name: "Mali", flag: "🇲🇱" },
  { code: "+224", name: "Gine", flag: "🇬🇳" },
  { code: "+225", name: "Fildişi Sahili", flag: "🇨🇮" },
  { code: "+226", name: "Burkina Faso", flag: "🇧🇫" },
  { code: "+227", name: "Nijer", flag: "🇳🇪" },
  { code: "+228", name: "Togo", flag: "🇹🇬" },
  { code: "+229", name: "Benin", flag: "🇧🇯" },
  // İstersen devam ettirebilirsin
];

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export const CountryCodeDropdown = ({ value, onChange }: Props) => {
  return (
    <select
      className="CountryDropdown"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {countryList.map(({ code, name, flag }) => (
        <option key={code} value={code}>
          {flag} {name} ({code})
        </option>
      ))}
    </select>
  );
};
