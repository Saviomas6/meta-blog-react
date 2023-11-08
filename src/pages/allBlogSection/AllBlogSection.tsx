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
import { useGetAllBlog } from "../../logic/reactQuery/query/useGetAllBlog";
import { formatDate } from "../../utils/utils";

const AllBlogSection = () => {
  const [isCategorySelected, setIsCategorySelected] =
    useState<string>("fashion");
  const navigate = useNavigate();
  const { data } = useGetAllBlog();

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
            {data?.map((value: any, i: number) => (
              <Fragment key={i}>
                <BlogCard
                  blogImage={value?.blogImage}
                  joinedDate={formatDate(value?.user?.joinedDate)}
                  profileImage={value?.user?.profileUrl}
                  username={value?.user?.name}
                  heading={value.blogHeading}
                  description={value.blogDescription}
                  handleRoute={() => navigate(`/blogDetail/${value?._id}`)}
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
