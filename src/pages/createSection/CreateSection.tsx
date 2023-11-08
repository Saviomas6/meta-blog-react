import { ChangeEvent, useState } from "react";
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
import { storage } from "./firebase";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useCreateBlogMutation } from "../../logic/reactQuery/mutation/useMutationCreateBlog";
import SuccessModal from "../../components/successModal/SuccessModal";
import ErrorModal from "../../components/errorModal/ErrorModal";

const CreateSection = () => {
  const { state } = useLocation();
  const [isCategorySelected, setIsCategorySelected] =
    useState<string>("fashion");
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [uploadLoading, setUploadLoading] = useState<boolean>(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState<boolean>(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState<boolean>(false);

  const { mutateAsync: createBlog, isLoading }: any = useCreateBlogMutation();

  const handleUploadFile = (
    event: ChangeEvent<HTMLInputElement>,
    setFieldValue: FormikHelpers<FormikValues>["setFieldValue"]
  ) => {
    setUploadLoading(true);
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      const storageRef = storage.ref();
      const fileRef = storageRef.child(file.name);
      const uploadTask = fileRef.put(file);

      uploadTask.on(
        "state_changed",
        (snapshot: any) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setUploadProgress(progress);
        },
        (error: any) => {
          console.log(error);
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then((url) => {
            setFieldValue("image", url);
            setUploadLoading(false);
          });
        }
      );
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

  const handleSubmitForm = async (values: BlogPost) => {
    try {
      const data = {
        blogImage: values.image,
        blogHeading: values.heading,
        blogDescription: values.description,
        blogCategory: values.category ? values.category : isCategorySelected,
      };
      const result = await createBlog(data);
      if (result.data.message) {
        setIsSuccessModalOpen(true);
      }
    } catch (e) {
      setIsSuccessModalOpen(false);
      setIsErrorModalOpen(true);
    }
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
                      {uploadLoading ? (
                        <Styled.UploadProgressBarMainContainer>
                          <Styled.UploadProgressBarContainer>
                            <CircularProgressbar
                              value={uploadProgress}
                              text={`${uploadProgress}%`}
                              styles={buildStyles({
                                textColor: "#999999",
                                pathColor: "#4b6bfb",
                                trailColor: "#999999",
                              })}
                            />
                          </Styled.UploadProgressBarContainer>
                        </Styled.UploadProgressBarMainContainer>
                      ) : !uploadLoading && values.image ? (
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
                        onChange={(event: ChangeEvent<HTMLInputElement>) =>
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
                              setFieldValue("category", category.name);
                            }}>
                            {category.name}
                          </CreateCategory>
                        ))}
                      </Styled.CreateCategoryContainer>
                    </div>
                    <Styled.CreateButtonWrapper>
                      <Button
                        text="Create"
                        type="submit"
                        isLoading={isLoading}
                        disabled={
                          isLoading ||
                          !values?.image ||
                          !values.heading ||
                          !values.description ||
                          !values.category
                        }
                      />
                    </Styled.CreateButtonWrapper>
                  </div>
                </Form>
              )}
            </Formik>
          </Styled.CreateBlogMainContainer>
        </OpacityAnimation>
        {isSuccessModalOpen && (
          <SuccessModal
            heading="Success"
            description="Successfully blog created!"
            onClick={() => setIsSuccessModalOpen(!isSuccessModalOpen)}
          />
        )}
        {isErrorModalOpen && (
          <ErrorModal
            heading="Error"
            description="Something went wrong!"
            onClick={() => setIsErrorModalOpen(!isErrorModalOpen)}
          />
        )}
      </Wrapper>
    </Container>
  );
};

export default CreateSection;
