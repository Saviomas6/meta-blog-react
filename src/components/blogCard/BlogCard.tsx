import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import * as Styled from "./style";
import { useNavigate } from "react-router-dom";
import { Paths } from "../../routes/path";
import { handlePrecision } from "../../utils/utils";
import noProfilePicture from "../../assets/noProfilePicture.jpeg";
interface I_Props {
  profileImage: string;
  joinedDate: string;
  username: string;
  blogImage: string;
  heading: string;
  description: string;
  setIsDeleteModalOpen?: any;
  isEditable?: boolean;
  handleRoute(): void;
}

const BlogCard = ({
  blogImage,
  description,
  heading,
  joinedDate,
  profileImage,
  username,
  setIsDeleteModalOpen,
  isEditable,
  handleRoute,
}: I_Props) => {
  const navigate = useNavigate();

  return (
    <Styled.BlogCardMainContainer onClick={handleRoute}>
      <Styled.BlogCardProfileWrapper>
        <Styled.BlogCardProfileImageContainer>
          <Styled.BlogCardProfileImage
            src={profileImage || noProfilePicture}
            alt="profileImage"
          />
        </Styled.BlogCardProfileImageContainer>
        <Styled.BlogCardProfileUserNameWrapper>
          <Styled.BlogCardProfileUserName>
            {username}
          </Styled.BlogCardProfileUserName>
          <Styled.BlogCardProfileJoinedDate>
            {joinedDate}
          </Styled.BlogCardProfileJoinedDate>
        </Styled.BlogCardProfileUserNameWrapper>
      </Styled.BlogCardProfileWrapper>
      <Styled.BlogCardImageContainer>
        <Styled.BlogCardImage src={blogImage} alt="image" />
      </Styled.BlogCardImageContainer>
      <Styled.BlogCardHeading>
        {" "}
        {handlePrecision(heading, 25)}
      </Styled.BlogCardHeading>
      <Styled.BlogCardDescription>
        {handlePrecision(description, 200)}
      </Styled.BlogCardDescription>
      {isEditable && (
        <Styled.BlogCardEditDeleteContainer>
          <Styled.BlogCardIcon
            bgColor="#FFA500"
            onClick={() =>
              navigate(Paths.createBlog, { state: { isEditable: true } })
            }>
            <AiOutlineEdit size={20} color="#fff" />
          </Styled.BlogCardIcon>
          <Styled.BlogCardIcon
            bgColor="#FF0000"
            onClick={() => setIsDeleteModalOpen(true)}>
            <AiOutlineDelete size={20} color="#fff" />
          </Styled.BlogCardIcon>
        </Styled.BlogCardEditDeleteContainer>
      )}
    </Styled.BlogCardMainContainer>
  );
};

export default BlogCard;
