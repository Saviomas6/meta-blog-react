import styled from "styled-components";
export const ProfileSectionContentContainer = styled.div`
  margin-top: 30px;
`;

export const ProfileSectionUerName = styled.div<{ color?: string }>`
  font-size: 18px;
  color: ${({ theme }) => theme.text};
  text-align: center;
  margin-top: 6px;
`;
export const ProfileSectionName = styled.div<{ color?: string }>`
  font-size: 40px;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
  text-align: center;
  margin-top: 6px;
`;
export const ProfileSectionBioContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProfileSectionBio = styled.div<{ color?: string }>`
  font-size: 16px;
  color: ${({ theme }) => theme.text};
  text-align: center;
  margin-top: 6px;
  width: 600px;
`;

export const EditProfileButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 150px;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;
