import * as Styled from "./style";
import Button from "../../../../components/button/Button";
import Lottie from "react-lottie";
import homeBanner from "../../../../assets/homeBanner.json";
import { useNavigate } from "react-router-dom";
import { Paths } from "../../../../routes/path";
const BannerSection = () => {
  const navigate = useNavigate();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: homeBanner,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Styled.HomeSectionMainContainer>
      <Styled.HomeSectionContainer>
        <Styled.HomeSectionLeftContainer>
          <Styled.HomeSectionHeading>
            MetaBlog : Where Ideas Flow and Stories Unfold
          </Styled.HomeSectionHeading>
          <Styled.HomeSectionDescription>
            Welcome to MetaBlog, a vibrant blogging community where creativity
            thrives. Dive into a world of captivating narratives, insightful
            perspectives, and boundless inspiration. Unleash your imagination,
            share your voice, and join a community of passionate storytellers.
            Start your journey today and let your words create ripples that
            resonate far and wide.
          </Styled.HomeSectionDescription>
          <Styled.HomeSectionButtonWrapper>
            <Button
              text="Get Started"
              onClick={() => navigate(Paths.allBlog)}
            />
          </Styled.HomeSectionButtonWrapper>
        </Styled.HomeSectionLeftContainer>
        <Styled.HomeSectionRightContainer>
          <Lottie options={defaultOptions} />
        </Styled.HomeSectionRightContainer>
      </Styled.HomeSectionContainer>
    </Styled.HomeSectionMainContainer>
  );
};

export default BannerSection;
