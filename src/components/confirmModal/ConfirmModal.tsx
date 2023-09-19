import Lottie from "react-lottie";
import {
  Description,
  LottieContainer,
  LottieMainContainer,
  EditButton,
} from "../../styles/sharedStyle";
import CustomModal from "../customModal/CustomModal";
import { ConfirmDeleteButtonWrapper } from "./style";
import deleteLogo from "../../assets/deleteLogo.json";

interface I_Props {
  heading: string;
  onClick(): void;
  description: string;
  btnText1: string;
  btn2Text: string;
  bgColor?: string;
}

const ConfirmModal = ({
  btn2Text,
  btnText1,
  description,
  heading,
  onClick,
  bgColor,
}: I_Props) => {
  const defaultDeleteOption = {
    loop: true,
    autoplay: true,
    animationData: deleteLogo,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <CustomModal heading={heading} onClick={onClick} bgColor={bgColor}>
        <div>
          <LottieMainContainer>
            <LottieContainer>
              <Lottie options={defaultDeleteOption} />
            </LottieContainer>
          </LottieMainContainer>
          <Description>{description}</Description>
          <ConfirmDeleteButtonWrapper>
            <EditButton color="#FFA500">{btnText1}</EditButton>
            <EditButton color="#ff0000">{btn2Text}</EditButton>
          </ConfirmDeleteButtonWrapper>
        </div>
      </CustomModal>
    </div>
  );
};

export default ConfirmModal;
