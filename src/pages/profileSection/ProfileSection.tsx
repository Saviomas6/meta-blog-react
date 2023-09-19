import { Container, OpacityAnimation, Wrapper } from "../../styles/sharedStyle";
import ProfileBannerSection from "./components/profileBannerSection/ProfileBannerSection";
import ProfileContentSection from "./components/profileContentSection/ProfileContentSection";
import ProfileSectionBlogSection from "./components/profileCreatedBlogSection/ProfileSectionBlogSection";
import { ProfileSectionMainContainer } from "./style";

const ProfileSection = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <OpacityAnimation>
            <ProfileSectionMainContainer>
              <ProfileBannerSection />
              <ProfileContentSection />
              <ProfileSectionBlogSection />
            </ProfileSectionMainContainer>
          </OpacityAnimation>
        </Wrapper>
      </Container>
    </>
  );
};

export default ProfileSection;
