import { useAppSelector } from "../../../../logic/redux/store/hooks";
import * as Styled from "./style";

const ProfileBannerSection = () => {
  const isLoggedDetail = useAppSelector(
    (state) => state.userReducer.isLoggedDetail
  );

  return (
    <Styled.ProfileSectionBannerMainLayout>
      <Styled.ProfileBannerLayout
        bgImage={
          (isLoggedDetail[0]?.bannerUrl && isLoggedDetail[0]?.bannerUrl) ||
          "https://images.pexels.com/photos/17121023/pexels-photo-17121023/free-photo-of-clouds-over-castle-in-forest.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
        }></Styled.ProfileBannerLayout>
      <Styled.ProfileImageMainContainer>
        <Styled.ProfileImageMainLayout>
          <Styled.ProfileImageLayout
            profileImage={
              (isLoggedDetail[0]?.profileUrl &&
                isLoggedDetail[0]?.profileUrl) ||
              "https://images.pexels.com/photos/17121023/pexels-photo-17121023/free-photo-of-clouds-over-castle-in-forest.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            }></Styled.ProfileImageLayout>
        </Styled.ProfileImageMainLayout>
      </Styled.ProfileImageMainContainer>
    </Styled.ProfileSectionBannerMainLayout>
  );
};

export default ProfileBannerSection;
