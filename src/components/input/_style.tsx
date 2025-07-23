import styled from "@emotion/styled";

export const InputBase = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  justify-content: center;
  width: 492px;
  height: 40px;
  margin-top: 50px;
  
  

  .StyledPhoneInput {
    height: 24px;
    width: 130px;
    gap: 10px;

    .PhoneInputInput {
      border: none;
      outline: none;
      width: 66px;
      height: 24px;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #465D69;
    }
  }
`;

export const InputField = styled.input`
  flex: 1;
  width: 322px;
  height: 40px;
  padding: 8px 16px;
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

export const InputLabel = styled.label``;
