import TippyToolTip from "../../components/tippyTooltip/TippyTooltip";
import { Container, OpacityAnimation, Wrapper } from "../../styles/sharedStyle";
import {
  BlogDetailDescription,
  BlogDetailHeading,
  BlogDetailProfileContainer,
  BlogDetailProfileImage,
  BlogDetailProfileImageContainer,
  BlogDetailProfileUserName,
  BlogImage,
  BlogImageContainer,
  Category,
} from "./style";

const BlogDetail = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <OpacityAnimation>
            <TippyToolTip
              placement="bottom"
              toolTipContent={
                <div>
                  Hello world this is my new tooltip added i want a new change
                  in my tooltip
                </div>
              }>
              <Category>Technology</Category>
            </TippyToolTip>

            <BlogDetailHeading>
              Ideas Unleashed: Where Creativity Finds Its Voice Ideas Unleashed:
              Where Creativity Finds Its Voice
            </BlogDetailHeading>
            <BlogDetailProfileContainer>
              <BlogDetailProfileImageContainer>
                <BlogDetailProfileImage
                  src="https://images.pexels.com/photos/5540782/pexels-photo-5540782.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                  alt="img"
                />
              </BlogDetailProfileImageContainer>
              <BlogDetailProfileUserName>
                Savio Mascarenhas | 20 August 2020
              </BlogDetailProfileUserName>
            </BlogDetailProfileContainer>
            <BlogImageContainer>
              <BlogImage
                src="https://images.pexels.com/photos/5540782/pexels-photo-5540782.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                alt="image"
              />
            </BlogImageContainer>
            <BlogDetailDescription>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </BlogDetailDescription>
          </OpacityAnimation>
        </Wrapper>
      </Container>
    </div>
  );
};

export default BlogDetail;
