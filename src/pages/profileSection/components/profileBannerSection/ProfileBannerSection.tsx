import * as Styled from "./style";

const ProfileBannerSection = () => {
  return (
    <Styled.ProfileSectionBannerMainLayout>
      <Styled.ProfileBannerLayout bgImage="https://images.pexels.com/photos/17121023/pexels-photo-17121023/free-photo-of-clouds-over-castle-in-forest.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"></Styled.ProfileBannerLayout>
      <Styled.ProfileImageMainContainer>
        <Styled.ProfileImageMainLayout>
          <Styled.ProfileImageLayout profileImage="https://images.pexels.com/photos/17121023/pexels-photo-17121023/free-photo-of-clouds-over-castle-in-forest.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"></Styled.ProfileImageLayout>
        </Styled.ProfileImageMainLayout>
      </Styled.ProfileImageMainContainer>
    </Styled.ProfileSectionBannerMainLayout>
  );
};

export default ProfileBannerSection;
