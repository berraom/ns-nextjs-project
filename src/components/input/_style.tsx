import styled from "@emotion/styled";
import PhoneInput from "react-phone-number-input";

export const PhoneWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-top: 50px;
  width: 492px;
  height: 40px;
`;

export const CountryInputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  border: 1px solid #d0d3d4;
  border-radius: 8px;
`;

export const StyledPhoneInput = styled(PhoneInput)`
  height: 40px;
  width: 162px;
  border: none;
  padding: 8px 16px;
  font-size: 16px;
  background-color: #ffffff;

  .PhoneInputInput {
    border: none;
    outline: none;
    font-size: 16px;
    width: 100%;
  }
`;

export const Input = styled.input`
  flex: 1;
  height: 40px;
  padding: 8px 16px;
  font-size: 16px;
  border: 1px solid #d0d3d4;
  border-radius: 8px;
  outline: none;

  &::placeholder {
    color: #a0a3a5;
  }

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }
`;

export const InputBase = styled.div`
  display: flex;
  flex-direction: column; /* İstersen 'row' yapabilirsin */
`;

export const InputField = styled.input`
  flex: 1;
  height: 40px;
  padding: 8px 16px;
  font-size: 16px;
  border: 1px solid #d0d3d4;
  border-radius: 8px;
  outline: none;

  &::placeholder {
    color: #a0a3a5;
  }

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }
`;

export const InputLabel = styled.label`
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
  line-height: 24px;
  color: #465d69;
`;
