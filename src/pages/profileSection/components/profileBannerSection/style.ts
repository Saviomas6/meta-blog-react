import styled from "styled-components";
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

export const ProfileImageMainContainer = styled.div`
  position: relative;
`;

export const ProfileImageMainLayout = styled.div<any>`
  height: 187px;
  width: 187px;
  padding: 5px;
  border-radius: 10px;
  background-color: #808080;
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
