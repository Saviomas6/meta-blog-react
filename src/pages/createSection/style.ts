import styled from "styled-components";
import { Field } from "formik";
export const CreateBlogMainContainer = styled.div`
  background-color: ${({ theme }) => theme.cardBg};
  padding: 20px;
  border-radius: 16px;
`;

export const CreateBlogHeading = styled.h1`
  color: ${({ theme }) => theme.text};
`;

export const UploadMainContainer = styled.label`
  display: block;
  height: 300px;
  width: 600px;
  border-radius: 16px;
  box-sizing: border-box;
  margin-top: 30px;
  background-color: ${({ theme }) => theme.cardBg};
  cursor: pointer;
  border: 1px solid #3b3c4a;
`;

export const UploadContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.cardBg};
  color: ${({ theme }) => theme.text};
  font-size: 18px;
  border-radius: 16px;
`;

export const UploadImageContainer = styled.div`
  height: 100%;
  width: 100%;
`;

export const UploadImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  border-radius: 16px;
`;

export const UploadFile = styled.input<any>`
  display: none;
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
export const CreateCategoryContainer = styled.div`
  width: 600px;
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
`;
export const CreateCategoryLabel = styled.div`
  font-size: 22px;
  color: ${({ theme }) => theme.text};
  margin: 8px 0;
`;

export const CreateButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 250px;
  margin-top: 30px;
`;
