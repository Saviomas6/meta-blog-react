import { useNavigate } from "react-router-dom";
import Button from "../../../../components/button/Button";
import {
  EditProfileButtonContainer,
  ProfileSectionBio,
  ProfileSectionBioContainer,
  ProfileSectionContentContainer,
  ProfileSectionName,
  ProfileSectionUerName,
} from "./style";
import { Paths } from "../../../../routes/path";
import { useAppSelector } from "../../../../logic/redux/store/hooks";
import { formatDate } from "../../../../utils/utils";

const ProfileContentSection = () => {
  const isLoggedDetail = useAppSelector(
    (state) => state.userReducer.isLoggedDetail
  );

  const navigate = useNavigate();
  return (
    <ProfileSectionContentContainer>
      <ProfileSectionName color="#fff">
        {isLoggedDetail[0]?.name || "Unnamed"}
      </ProfileSectionName>
      <ProfileSectionUerName color="#fff">
        {`@${isLoggedDetail[0]?.username}` || "---"}
      </ProfileSectionUerName>
      <ProfileSectionUerName color="#808080">
        {(isLoggedDetail[0]?.joinedDate &&
          formatDate(isLoggedDetail[0]?.joinedDate)) ||
          "---"}
      </ProfileSectionUerName>
      <ProfileSectionBioContainer>
        <ProfileSectionBio color="#fff">
          {isLoggedDetail[0]?.bio ||
            `"Welcome to MetaBlog! Share your story, insights, and passion with the world. 📝✨ #BloggingJourney"`}
        </ProfileSectionBio>
      </ProfileSectionBioContainer>
      <EditProfileButtonContainer>
        <Button
          text="EDIT PROFILE"
          onClick={() => {
            navigate(Paths.editProfile);
          }}
          border="1px solid #4b6bfb"
          bgColor="#4b6bfb"
        />
      </EditProfileButtonContainer>
    </ProfileSectionContentContainer>
  );
};

export default ProfileContentSection;
