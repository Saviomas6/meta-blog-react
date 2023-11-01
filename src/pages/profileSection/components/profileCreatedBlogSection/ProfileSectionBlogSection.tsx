import { Fragment, useState } from "react";
import BlogCard from "../../../../components/blogCard/BlogCard";
import { CardGridContainer } from "../../../../styles/sharedStyle";
import { CreatedBlogContainer, CreatedBlogHeading } from "./style";
import ConfirmModal from "../../../../components/confirmModal/ConfirmModal";
import { useNavigate } from "react-router-dom";

const ProfileSectionBlogSection = () => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  return (
    <>
      <CreatedBlogContainer>
        <CreatedBlogHeading>Created Blog (20)</CreatedBlogHeading>
        <CardGridContainer>
          {Array.from({ length: 12 }, (_x, v) => (
            <Fragment key={v}>
              <BlogCard
                blogImage="https://images.pexels.com/photos/1887792/pexels-photo-1887792.jpeg?auto=compress&cs=tinysrgb&w=1600"
                joinedDate="Joined 20 June 2023"
                profileImage="https://images.pexels.com/photos/16954314/pexels-photo-16954314/free-photo-of-young-woman-standing-in-the-meadow.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                username="Savio Mascarenhas"
                heading="New Blog Heading"
                description="We’ve trained a model called ChatGPT which interacts in a conversational way.."
                setIsDeleteModalOpen={setIsDeleteModalOpen}
                isEditable={true}
                handleRoute={() => navigate("/blogDetail")}
              />
            </Fragment>
          ))}
        </CardGridContainer>
      </CreatedBlogContainer>
      {isDeleteModalOpen && (
        <ConfirmModal
          heading="Are You Sure?"
          description="Do you really want to delete these record?"
          btn2Text="Delete"
          btnText1="Cancel"
          onClick={() => setIsDeleteModalOpen((pre) => !pre)}
        />
      )}
    </>
  );
};

export default ProfileSectionBlogSection;
