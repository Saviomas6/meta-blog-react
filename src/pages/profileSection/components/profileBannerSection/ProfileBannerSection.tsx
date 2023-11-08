import { useAppSelector } from "../../../../logic/redux/store/hooks";
import * as Styled from "./style";
import noProfilePicture from "../../../../assets/noProfilePicture.jpeg";
import noBannerPicture from "../../../../assets/noBannerPicture.png";

const ProfileBannerSection = () => {
  const isLoggedDetail = useAppSelector(
    (state) => state.userReducer.isLoggedDetail
  );

  return (
    <Styled.ProfileSectionBannerMainLayout>
      <Styled.ProfileBannerLayout
        bgImage={
          (isLoggedDetail[0]?.bannerUrl && isLoggedDetail[0]?.bannerUrl) ||
          noBannerPicture
        }></Styled.ProfileBannerLayout>
      <Styled.ProfileImageMainContainer>
        <Styled.ProfileImageMainLayout>
          <Styled.ProfileImageLayout
            profileImage={
              (isLoggedDetail[0]?.profileUrl &&
                isLoggedDetail[0]?.profileUrl) ||
              noProfilePicture
            }></Styled.ProfileImageLayout>
        </Styled.ProfileImageMainLayout>
      </Styled.ProfileImageMainContainer>
    </Styled.ProfileSectionBannerMainLayout>
  );
};

export default ProfileBannerSection;
