// import TippyToolTip from "../../components/tippyTooltip/TippyToolTip";
import { useParams } from "react-router-dom";
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
import { useGetBlogById } from "../../logic/reactQuery/query/useGetBlogById";
import { formatDate } from "../../utils/utils";
import noProfilePicture from "../../assets/noProfilePicture.jpeg";

const BlogDetail = () => {
  const { id } = useParams();
  const { data } = useGetBlogById(id && id);

  return (
    <div>
      <Container>
        <Wrapper>
          <OpacityAnimation>
            {/* <TippyToolTip
              placement="bottom"
              toolTipContent={
                <div>
                  Hello world this is my new tooltip added i want a new change
                  in my tooltip
                </div>
              }> */}
            <Category>{data && data[0]?.blogCategory}</Category>
            {/* </TippyToolTip> */}

            <BlogDetailHeading>
              {data && data[0]?.blogHeading}
            </BlogDetailHeading>
            <BlogDetailProfileContainer>
              <BlogDetailProfileImageContainer>
                <BlogDetailProfileImage
                  src={(data && data[0]?.user?.profileUrl) || noProfilePicture}
                  alt="img"
                />
              </BlogDetailProfileImageContainer>
              <BlogDetailProfileUserName>
                {data && data[0]?.user?.name} |{" "}
                {data && formatDate(data[0]?.user?.joinedDate)}
              </BlogDetailProfileUserName>
            </BlogDetailProfileContainer>
            <BlogImageContainer>
              <BlogImage src={data && data[0]?.blogImage} alt="image" />
            </BlogImageContainer>
            <BlogDetailDescription>
              {data && data[0]?.blogDescription}
            </BlogDetailDescription>
          </OpacityAnimation>
        </Wrapper>
      </Container>
    </div>
  );
};

export default BlogDetail;
