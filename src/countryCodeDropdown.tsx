import { InputField } from "@/components/input";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export const CountryCodeDropdown = ({ value, onChange }: Props) => {
  return (
    <InputField as="select" value={value} onChange={e => onChange(e.target.value)}>
      <option value="+90">🇹🇷 Türkiye (+90)</option>
      <option value="+1">🇺🇸 Amerika (+1)</option>
      {/* diğer seçenekler */}
    </InputField>
  );
};
