import styled from "@emotion/styled";
import PhoneInput from "react-phone-number-input";

export const PhoneWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 50px;
  align-items: center;
  justify-content: center;
  width: 492px;
  height: 40px;
`;

export const CountryInputWrapper = styled.div`
  flow:row;
  display:flex;
  width:162px;
  height:40px;
  border: 1px solid #E8EBEC;
  gap: 10px;
  border-radius: 8px;
  padding: 8px 16px 8px 16px;
  align-items: center;
`;

export const StyledPhoneInput = styled(PhoneInput)`
  
  height: 24px;
  width: 130px;
  gap: 10px;
  
  .PhoneInputInput {
  border: none;
  outline: none;
  width: 66px;
  height:24px;
  font-weight:400;
  font-size:16px;
  line-height: 24px;
  color: #465D69;
}

  }
`;



export const InputBase = styled.div`
  display: flex;
  flex-direction: row; 
  gap: 8px;
  align-items: center;
  width: 100%; 
`;

export const InputField = styled.input`
  flex: 1;
  width: 322px;
  height: 40px;
  padding: 8px 16px 8px 16px;
  border: 1px solid #E8EBEC;
  border-radius: 8px;
  outline: none;

  &::placeholder {
    color: #465D69;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
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
