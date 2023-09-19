import {
  CustomModalClose,
  CustomModalContainer,
  CustomModalHeading,
  CustomModalLayout,
} from "./style";
import { AiFillCloseCircle } from "react-icons/ai";

interface I_Props {
  children: React.ReactNode;
  onClick(): void;
  heading: string;
  bgColor?: string;
}

const CustomModal = ({ children, onClick, heading, bgColor }: I_Props) => {
  return (
    <CustomModalLayout bgColor={bgColor}>
      <CustomModalContainer>
        <CustomModalHeading>{heading}</CustomModalHeading>
        {children}
        <CustomModalClose onClick={onClick}>
          <AiFillCloseCircle size={25} />
        </CustomModalClose>
      </CustomModalContainer>
    </CustomModalLayout>
  );
};

export default CustomModal;
