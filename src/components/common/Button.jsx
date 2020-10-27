import styled from "styled-components";

const StyledButton = styled.button`
  ${({ theme }) => theme.fonts.mainFont(25)};
  background-color: ${({ theme }) => theme.colors.controlPrimaryColor};
  color: ${({ theme }) => theme.colors.textColor};
  border-radius: 12px;
  height: 70px;
  padding: 0 100px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
`;

export default function Button(props) {
  return <StyledButton {...props} />;
}