import styled from "styled-components";
export const BlogDetailHeading = styled.div`
  font-size: 30px;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
  margin-top: 20px;
`;
export const BlogDetailProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
`;
export const BlogDetailProfileImageContainer = styled.div`
  height: 50px;
  width: 50px;
`;
export const BlogDetailProfileImage = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 100%;
  object-fit: cover;
`;
export const BlogDetailProfileUserName = styled.div`
  font-size: 16px;
  color: #808080;
  font-weight: 500;
`;
export const BlogImageContainer = styled.div`
  height: 330px;
  width: 600px;
  margin-top: 20px;
`;
export const BlogImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
`;
export const BlogDetailDescription = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
  margin-top: 20px;
`;

export const Category = styled.div`
  height: 45px;
  width: max-content;
  padding: 0 20px;
  background-color: #4b6bfb;
  border: 1px solid #4b6bfb;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  text-transform: capitalize;
`;
