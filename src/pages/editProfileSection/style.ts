import { Field } from "formik";
import styled from "styled-components";
export const EditProfileSectionMainContainer = styled.div`
  /* ... */
`;
export const ProfileSectionBannerMainLayout = styled.div``;
export const ProfileBannerLayout = styled.div<any>`
  background: url(${({ bgImage }) => (bgImage ? bgImage : "")});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 430px;
  width: 100%;
  border-radius: 10px;
`;

export const ProfileImageBannerWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: none;
`;

export const ProfileImageBannerContainer = styled.div<any>`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${(props) => props.border};
  &:hover ${ProfileImageBannerWrapper} {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
    cursor: pointer;
    display: flex;
  }
`;
export const ProfileBannerImageIconContainer = styled.div`
  height: 40px;
  width: 40px;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProfileImageMainContainer = styled.div`
  position: relative;
`;

export const ProfileImageMainLayout = styled.div<any>`
  height: 187px;
  width: 187px;
  padding: 5px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.text};
  position: absolute;
  top: -97px;
  left: 50px;
`;

export const ProfileImageLayout = styled.div<any>`
  height: 100%;
  width: 100%;
  background: url(${({ profileImage }) => (profileImage ? profileImage : "")});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10px;
  position: relative;
`;
export const ProfileImageIconContainer = styled.div`
  height: 40px;
  width: 40px;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 12px;
  right: 12px;
`;

export const FileInputLabelContainer = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const FileUploadInput = styled.input`
  display: none;
`;

export const InputFormFieldWrapper = styled.div`
  margin-top: 120px;
`;

export const CreateInputFieldMainContainer = styled.div`
  margin-top: 20px;
`;
export const CreateInputFieldContainer = styled.div`
  width: 600px;
`;
export const CreateInputLabel = styled.label`
  display: block;
  font-size: 22px;
  color: ${({ theme }) => theme.text};
  margin: 8px 0;
`;

export const CreateInputField = styled(Field)`
  height: 50px;
  width: 100%;
  background-color: ${({ theme }) => theme.cardBg};
  color: ${({ theme }) => theme.text};
  outline: none;
  border: 1px solid #3b3c4a;
  border-radius: 10px;
  padding: 0 20px;
  font-size: 18px;
  box-sizing: border-box;
`;
export const CreateInputTextAreaField = styled(Field)`
  height: 200px;
  width: 100%;
  background-color: ${({ theme }) => theme.cardBg};
  color: ${({ theme }) => theme.text};
  outline: none;
  border: 1px solid #3b3c4a;
  border-radius: 10px;
  padding: 10px 20px;
  font-size: 18px;
  box-sizing: border-box;
  resize: none;
`;

export const EditProfileEmailContainer = styled.div`
  height: 50px;
  width: 600px;
  background-color: ${({ theme }) => theme.cardBg};
  color: ${({ theme }) => theme.text};
  outline: none;
  border: 1px solid #3b3c4a;
  border-radius: 10px;
  padding: 0 20px;
  font-size: 18px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  opacity: 0.5;
  cursor: not-allowed;
`;

export const EditProfileButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 131px;
  margin: 20px 0;
`;
