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

const ProfileContentSection = () => {
  const navigate = useNavigate();
  return (
    <ProfileSectionContentContainer>
      <ProfileSectionName color="#fff">Savio Mascarenhas</ProfileSectionName>
      <ProfileSectionUerName color="#fff">
        @saviomascarenhas
      </ProfileSectionUerName>
      <ProfileSectionUerName color="#808080">
        Joined 20 August 2020
      </ProfileSectionUerName>
      <ProfileSectionBioContainer>
        <ProfileSectionBio color="#fff">
          I am Sarah Johnson, an experienced marketing professional with a knack
          for crafting compelling brand narratives and implementing effective
          strategies. I thrive in fast-paced environments, leveraging my
          analytical skills to drive measurable results and exceed targets.
          Passionate about innovation, I continuously stay updated with the
          latest industry trends to deliver impactful campaigns.
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
