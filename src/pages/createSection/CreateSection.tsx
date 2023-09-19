import { useState } from "react";
import Button from "../../components/button/Button";
import {
  Container,
  CreateCategory,
  OpacityAnimation,
  Wrapper,
} from "../../styles/sharedStyle";
import * as Styled from "./style";
import { FaUpload } from "react-icons/fa";
import { Formik, Form, FormikHelpers, FormikValues } from "formik";
import { categoryData } from "./categoryData";
import { useLocation } from "react-router-dom";
const CreateSection = () => {
  const { state } = useLocation();
  const [isCategorySelected, setIsCategorySelected] =
    useState<string>("fashion");

  const handleUploadFile = (
    event: Event,
    setFieldValue: FormikHelpers<FormikValues>["setFieldValue"]
  ) => {
    const input = event.target as HTMLInputElement;
    if (input?.files && input?.files[0]) {
      setFieldValue("image", URL.createObjectURL(input?.files[0]));
    }
  };

  interface BlogPost {
    image: string;
    heading: string;
    description: string;
    category: string;
  }

  const initialValues: BlogPost = {
    image: "",
    heading: "",
    description: "",
    category: "",
  };

  const handleSubmitForm = (values: BlogPost) => {
    console.log(values);
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
    setFieldValue: FormikHelpers<FormikValues>["setFieldValue"]
  ) => {
    setFieldValue("description", event.target.value);
  };

  return (
    <Container>
      <Wrapper>
        <OpacityAnimation>
          <Styled.CreateBlogMainContainer>
            <Styled.CreateBlogHeading>
              {state?.isEditable ? "EDIT" : "CREATE"} YOUR BLOG
            </Styled.CreateBlogHeading>
            <Formik initialValues={initialValues} onSubmit={handleSubmitForm}>
              {({ values, setFieldValue }) => (
                <Form>
                  <div>
                    <Styled.UploadMainContainer htmlFor="file">
                      {values.image ? (
                        <Styled.UploadImageContainer>
                          <Styled.UploadImage src={values.image} alt="image" />
                        </Styled.UploadImageContainer>
                      ) : (
                        <Styled.UploadContainer>
                          <FaUpload size={30} />
                          <div>Upload Image</div>
                        </Styled.UploadContainer>
                      )}

                      <Styled.UploadFile
                        type="file"
                        id="file"
                        onChange={(event: Event) =>
                          handleUploadFile(event, setFieldValue)
                        }
                      />
                    </Styled.UploadMainContainer>
                    <Styled.CreateInputFieldMainContainer>
                      <Styled.CreateInputLabel>Heading</Styled.CreateInputLabel>
                      <Styled.CreateInputFieldContainer>
                        <Styled.CreateInputField
                          type="text"
                          placeholder="Heading"
                          name="heading"
                        />
                      </Styled.CreateInputFieldContainer>
                    </Styled.CreateInputFieldMainContainer>
                    <Styled.CreateInputFieldMainContainer>
                      <Styled.CreateInputLabel>
                        Description
                      </Styled.CreateInputLabel>
                      <Styled.CreateInputFieldContainer>
                        <Styled.CreateInputTextAreaField
                          as="textarea"
                          placeholder="Description"
                          name="description"
                          onChange={(
                            e: React.ChangeEvent<HTMLTextAreaElement>
                          ) => handleDescriptionChange(e, setFieldValue)}
                        />
                      </Styled.CreateInputFieldContainer>
                    </Styled.CreateInputFieldMainContainer>
                    <div>
                      <Styled.CreateCategoryLabel>
                        Category
                      </Styled.CreateCategoryLabel>
                      <Styled.CreateCategoryContainer>
                        {categoryData.map((category) => (
                          <CreateCategory
                            key={category.id}
                            isCategory={isCategorySelected === category.value}
                            onClick={() => {
                              setIsCategorySelected(category.value);
                              setFieldValue("category", category.value);
                            }}>
                            {category.name}
                          </CreateCategory>
                        ))}
                      </Styled.CreateCategoryContainer>
                    </div>
                    <Styled.CreateButtonWrapper>
                      <Button text="Create" type="submit" />
                    </Styled.CreateButtonWrapper>
                  </div>
                </Form>
              )}
            </Formik>
          </Styled.CreateBlogMainContainer>
        </OpacityAnimation>
      </Wrapper>
    </Container>
  );
};

export default CreateSection;
