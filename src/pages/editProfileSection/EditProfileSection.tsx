import { AiOutlineEdit } from "react-icons/ai";
import { Container, OpacityAnimation, Wrapper } from "../../styles/sharedStyle";
import { EditProfileSectionMainContainer } from "./style";
import * as Styled from "./style";
import { Form, Formik } from "formik";
import Button from "../../components/button/Button";
const EditProfileSection = () => {
  const initialValues = {
    bannerImage: "",
    profileImage: "",
    name: "",
    username: "",
    bio: "",
    email: "",
  };

  const handleBanner = () => {
    alert("handleBanner");
  };

  const handleProfile = () => {
    alert("handleProfile");
  };

  const handleSubmitForm = () => {};

  return (
    <div>
      <Container>
        <Wrapper>
          <OpacityAnimation>
            <EditProfileSectionMainContainer>
              <Formik initialValues={initialValues} onSubmit={handleSubmitForm}>
                {({}) => (
                  <Form>
                    <Styled.ProfileSectionBannerMainLayout>
                      <Styled.ProfileBannerLayout bgImage="https://images.pexels.com/photos/17121023/pexels-photo-17121023/free-photo-of-clouds-over-castle-in-forest.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load">
                        {false ? (
                          <h1>Loading</h1>
                        ) : (
                          <>
                            {true && (
                              <Styled.FileInputLabelContainer>
                                <Styled.FileUploadInput
                                  type="file"
                                  onChange={handleBanner}
                                />
                                <Styled.ProfileImageBannerContainer border="10px">
                                  <Styled.ProfileImageBannerWrapper>
                                    <Styled.ProfileBannerImageIconContainer>
                                      <AiOutlineEdit size={25} />
                                    </Styled.ProfileBannerImageIconContainer>
                                  </Styled.ProfileImageBannerWrapper>
                                </Styled.ProfileImageBannerContainer>
                              </Styled.FileInputLabelContainer>
                            )}
                          </>
                        )}
                      </Styled.ProfileBannerLayout>
                      <Styled.ProfileImageMainContainer>
                        <Styled.ProfileImageMainLayout>
                          <Styled.ProfileImageLayout profileImage="https://images.pexels.com/photos/17121023/pexels-photo-17121023/free-photo-of-clouds-over-castle-in-forest.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load">
                            {false ? (
                              <h1>Loading</h1>
                            ) : (
                              <>
                                {true && (
                                  <Styled.FileInputLabelContainer>
                                    <Styled.FileUploadInput
                                      type="file"
                                      onChange={handleProfile}
                                    />
                                    <Styled.ProfileImageBannerContainer border="10px">
                                      <Styled.ProfileImageBannerWrapper>
                                        <Styled.ProfileImageIconContainer>
                                          <AiOutlineEdit size={25} />
                                        </Styled.ProfileImageIconContainer>
                                      </Styled.ProfileImageBannerWrapper>
                                    </Styled.ProfileImageBannerContainer>
                                  </Styled.FileInputLabelContainer>
                                )}
                              </>
                            )}
                          </Styled.ProfileImageLayout>
                        </Styled.ProfileImageMainLayout>
                      </Styled.ProfileImageMainContainer>
                    </Styled.ProfileSectionBannerMainLayout>
                    {/* form */}
                    <Styled.InputFormFieldWrapper>
                      <Styled.CreateInputFieldMainContainer>
                        <Styled.CreateInputLabel>Name</Styled.CreateInputLabel>
                        <Styled.CreateInputFieldContainer>
                          <Styled.CreateInputField
                            type="text"
                            placeholder="Name"
                            name="name"
                          />
                        </Styled.CreateInputFieldContainer>
                      </Styled.CreateInputFieldMainContainer>
                      <Styled.CreateInputFieldMainContainer>
                        <Styled.CreateInputLabel>
                          Username
                        </Styled.CreateInputLabel>
                        <Styled.CreateInputFieldContainer>
                          <Styled.CreateInputField
                            type="text"
                            placeholder="Username"
                            name="username"
                          />
                        </Styled.CreateInputFieldContainer>
                      </Styled.CreateInputFieldMainContainer>
                      <Styled.CreateInputFieldMainContainer>
                        <Styled.CreateInputLabel>Bio</Styled.CreateInputLabel>
                        <Styled.CreateInputFieldContainer>
                          <Styled.CreateInputTextAreaField
                            as="textarea"
                            placeholder="Bio"
                            name="bio"
                            //   onChange={(
                            //     e: React.ChangeEvent<HTMLTextAreaElement>
                            //   ) => handleDescriptionChange(e, setFieldValue)}
                          />
                        </Styled.CreateInputFieldContainer>
                      </Styled.CreateInputFieldMainContainer>
                      <Styled.CreateInputFieldMainContainer>
                        <Styled.CreateInputLabel>Email</Styled.CreateInputLabel>
                        <Styled.EditProfileEmailContainer>
                          savio.mascarenhas@gmail.com
                        </Styled.EditProfileEmailContainer>
                      </Styled.CreateInputFieldMainContainer>
                      <Styled.EditProfileButtonContainer>
                        <Button text="Save" onClick={() => {}} />
                      </Styled.EditProfileButtonContainer>
                    </Styled.InputFormFieldWrapper>
                  </Form>
                )}
              </Formik>
            </EditProfileSectionMainContainer>
          </OpacityAnimation>
        </Wrapper>
      </Container>
    </div>
  );
};

export default EditProfileSection;
