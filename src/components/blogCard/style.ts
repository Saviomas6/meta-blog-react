import styled from "styled-components";

export const BlogCardMainContainer = styled.div`
  background-color: ${({ theme }) => theme.cardBg};
  padding: 20px;
  border-radius: 16px;
  position: relative;
  transition: transform 450ms;
  cursor: pointer;
  &:hover {
    transform: scale(1.03);
  }
`;

export const BlogCardProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
`;
export const BlogCardProfileImageContainer = styled.div`
  height: 50px;
  width: 50px;
`;
export const BlogCardProfileImage = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 100%;
  object-fit: cover;
`;

export const BlogCardProfileUserNameWrapper = styled.div``;

export const BlogCardProfileUserName = styled.div`
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;
export const BlogCardProfileJoinedDate = styled.div`
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

export const BlogCardImageContainer = styled.div`
  width: 100%;
`;
export const BlogCardImage = styled.img`
  width: 100%;
  object-fit: cover;
  aspect-ratio: 1/1;
  border-radius: 16px;
`;
export const BlogCardHeading = styled.div`
  font-weight: 600;
  color: ${({ theme }) => theme.text};
  font-size: 22px;
  margin: 8px 0;
`;
export const BlogCardDescription = styled.div`
  font-weight: 500;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
`;

export const BlogCardEditDeleteContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  position: absolute;
  top: 20px;
  right: 30px;
`;
export const BlogCardIcon = styled.div<{ bgColor?: string }>`
  height: 30px;
  width: 30px;
  background-color: ${({ bgColor }) => bgColor};
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
