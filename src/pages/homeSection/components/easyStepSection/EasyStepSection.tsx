import { stepData } from "./stepData";
import * as Styled from "./style";

const EasyStepSection = () => {
  return (
    <Styled.EasyStepSectionContainer>
      <Styled.EasyStepSectionHeading>Easy Steps</Styled.EasyStepSectionHeading>
      <Styled.EasyStepSectionCardGrid>
        {stepData.map((step) => (
          <Styled.EasyStepSectionCardContainer key={step.id}>
            <Styled.EasyStepSectionCardImageContainer>
              <Styled.EasyStepSectionCardImage>
                {step.logo}
              </Styled.EasyStepSectionCardImage>
            </Styled.EasyStepSectionCardImageContainer>

            <Styled.EasyStepSectionCardHeading>
              {step.heading}
            </Styled.EasyStepSectionCardHeading>
            <Styled.EasyStepSectionCardDescription>
              {step.description}
            </Styled.EasyStepSectionCardDescription>
          </Styled.EasyStepSectionCardContainer>
        ))}
      </Styled.EasyStepSectionCardGrid>
    </Styled.EasyStepSectionContainer>
  );
};

export default EasyStepSection;
