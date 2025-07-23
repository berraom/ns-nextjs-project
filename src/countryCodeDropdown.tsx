"use client";

import React, { useState, useRef, useEffect } from "react";
import styled from "@emotion/styled";

const countries = [
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
];

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export const CountryCodeDropdown = ({ value, onChange }: Props) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Dropdown dışına tıklayınca kapanması için
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selected = countries.find((c) => c.code === value) || countries[0];

  return (
    <DropdownWrapper ref={ref}>
      <Selected onClick={() => setOpen(!open)}>
        <Flag>{selected.flag}</Flag>
        <CountryName>
          <span className="name">Turkey</span>
          <span className="code">+90</span>
        </CountryName>

        <Arrow open={open}>▾</Arrow>
      </Selected>

      {open && (
        <Options>
          {countries.map((country) => (
            <Option
              key={country.code}
              onClick={() => {
                onChange(country.code);
                setOpen(false);
              }}
              selected={country.code === value}
            >
              <Flag>{country.flag}</Flag>
              {country.name} ({country.code})
            </Option>
          ))}
        </Options>
      )}
    </DropdownWrapper>
  );
};

const DropdownWrapper = styled.div`

  width: 170px;
  height: 40px;
  border: 1px solid #e8ebec;
  border-radius: 8px;
  padding: 8px 16px 8px 16px;
  background-color: white;
  position: relative;
  user-select: none;
  
`;

const Selected = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: none;
  cursor: pointer;
  background-color: white;
`;

const Flag = styled.span`
  font-size: 24px;       
  border-radius: 50%;    
  width: 24px;
  height: 24px;
  line-height: 30px;
  text-align: center;
  margin-right: 8px;
  display: inline-block;
`;

const CountryName = styled.span`
  display: flex;
  gap: 8px;
  align-items: center;

  .name, .code {
    font-size: 16px;
    line-height: 24px;
    color: #465d69;
  }
`;

const Arrow = styled.span<{ open: boolean }>`
  width: 16px;
  height: 16px;

`;

const Options = styled.div`
  position: absolute;
  top: 110%;
  left: 0;
  width: 100%;
  max-height: 220px;
  overflow-y: auto;
  background: white;
  border: 1px solid #e8ebec;
  border-radius: 8px;
  box-shadow: 0 8px 16px rgb(0 0 0 / 0.1);
  z-index: 1000;
`;

const Option = styled.div<{ selected: boolean }>`
  padding: 8px 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  background-color: ${(p) => (p.selected ? "#007bff33" : "white")};

  &:hover {
    background-color: #007bff22;
  }
`;