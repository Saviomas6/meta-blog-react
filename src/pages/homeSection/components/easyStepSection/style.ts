import styled from "styled-components";
export const EasyStepSectionContainer = styled.div`
  margin: 30px 0;
`;
export const EasyStepSectionHeading = styled.h1`
  color: ${({ theme }) => theme.text};
  text-align: center;
`;
export const EasyStepSectionCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
  margin: 30px 0;
`;

export const EasyStepSectionCardContainer = styled.div`
  background-color: ${({ theme }) => theme.cardBg};
  padding: 20px;
  border-radius: 10px;
`;
export const EasyStepSectionCardImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
`;

export const EasyStepSectionCardImage = styled.div`
  height: 80px;
  width: 80px;
  background-color: #4b6bfb;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  font-weight: 600;
  color: #fff;
`;

export const EasyStepSectionCardHeading = styled.div`
  font-size: 22px;
  color: ${({ theme }) => theme.text};
  text-align: center;
`;
export const EasyStepSectionCardDescription = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.text};
`;
