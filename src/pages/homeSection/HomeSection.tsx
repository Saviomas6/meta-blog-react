import { Fragment } from "react";
import BlogCard from "../../components/blogCard/BlogCard";
import {
  CardGridContainer,
  Container,
  OpacityAnimation,
  Wrapper,
} from "../../styles/sharedStyle";
import BannerSection from "./components/bannerSection/BannerSection";
import EasyStepSection from "./components/easyStepSection/EasyStepSection";
import { HomeBlogCardContainer, HomeBlogCardHeading } from "./style";
import ConfirmModal from "../../components/confirmModal/ConfirmModal";
import ErrorModal from "../../components/errorModal/ErrorModal";
import SuccessModal from "../../components/successModal/SuccessModal";

const HomeSection = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <OpacityAnimation>
            <BannerSection />
            <EasyStepSection />
            <HomeBlogCardContainer>
              <HomeBlogCardHeading>Latest Blogs</HomeBlogCardHeading>
              <CardGridContainer>
                {Array.from({ length: 6 }, (_x, v) => (
                  <Fragment key={v}>
                    <BlogCard
                      blogImage="https://images.pexels.com/photos/5540782/pexels-photo-5540782.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                      joinedDate="Joined 20 June 2023"
                      profileImage="https://images.pexels.com/photos/16954314/pexels-photo-16954314/free-photo-of-young-woman-standing-in-the-meadow.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                      username="Savio Mascarenhas"
                      heading="New Blog Heading"
                      description="We’ve trained a model called ChatGPT which interacts in a conversational way.."
                    />
                  </Fragment>
                ))}
              </CardGridContainer>
            </HomeBlogCardContainer>
          </OpacityAnimation>
        </Wrapper>
      </Container>
    </>
  );
};

export default HomeSection;
