import {
  CardGridContainer,
  Container,
  CreateCategory,
  OpacityAnimation,
  Wrapper,
} from "../../styles/sharedStyle";
import BlogCard from "../../components/blogCard/BlogCard";
import { Fragment, useState } from "react";
import { AllBlogCategorySection, AllBlogHeading } from "./style";
import { categoryData } from "./categoryData";
import { useNavigate } from "react-router-dom";

const AllBlogSection = () => {
  const [isCategorySelected, setIsCategorySelected] =
    useState<string>("fashion");
  const navigate = useNavigate();
  return (
    <Container>
      <Wrapper>
        <OpacityAnimation>
          <AllBlogHeading>The Blog Gallery</AllBlogHeading>
          <AllBlogCategorySection>
            {categoryData.map((category) => (
              <CreateCategory
                key={category.id}
                isCategory={isCategorySelected === category.value}
                onClick={() => {
                  setIsCategorySelected(category.value);
                }}>
                {category.name}
              </CreateCategory>
            ))}
          </AllBlogCategorySection>
          <CardGridContainer>
            {Array.from({ length: 20 }, (_x, v) => (
              <Fragment key={v}>
                <BlogCard
                  blogImage="https://images.pexels.com/photos/5540782/pexels-photo-5540782.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                  joinedDate="Joined 20 June 2023"
                  profileImage="https://images.pexels.com/photos/16954314/pexels-photo-16954314/free-photo-of-young-woman-standing-in-the-meadow.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                  username="Savio Mascarenhas"
                  heading="New Blog Heading"
                  description="We’ve trained a model called ChatGPT which interacts in a conversational way.."
                  handleRoute={() => navigate("/blogDetail")}
                />
              </Fragment>
            ))}
          </CardGridContainer>
        </OpacityAnimation>
      </Wrapper>
    </Container>
  );
};

export default AllBlogSection;
