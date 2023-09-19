import styled from "styled-components";
export const CustomModalLayout = styled.div<{ bgColor?: string }>`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
  padding: 0px 10px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ bgColor, theme }) =>
    bgColor ? theme.bodyColor : "rgba(0,0,0,0.6)"};
  z-index: 10000;
`;
export const CustomModalContainer = styled.div`
  background-color: ${({ theme }) => theme.cardBg};
  padding: 20px;
  width: 400px;
  border-radius: 10px;
  position: relative;
`;

export const CustomModalHeading = styled.div`
  font-size: 22px;
  color: ${({ theme }) => theme.text};
  font-weight: 600;
  text-align: center;
`;
export const CustomModalClose = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;
