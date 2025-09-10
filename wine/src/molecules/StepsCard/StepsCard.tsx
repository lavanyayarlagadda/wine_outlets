import React from "react";
import { CardContent } from "@mui/material";
import AddToCart from "../../atoms/CustomButton/AddToCart";
import {
  StepsCardWrapper,
  StyledDivider,
  StepWrapper,
  StepNumberCircle,
  StepTitle,
  StepDescription,
} from "./StepsCard.style";

interface Step {
  title: string;
  description: string;
}

interface StepsCardProps {
  heading: string;
  steps: Step[];
  button?: boolean;
}

const StepsCard: React.FC<StepsCardProps> = ({ heading, steps, button }) => {
  return (
    <>
      <StepsCardWrapper>
        <CardContent>
          <StepTitle variant="h6" gutterBottom>
            {heading}
          </StepTitle>
          <StyledDivider />

          {steps.map((step, index) => (
            <StepWrapper key={index}>
              <StepNumberCircle>{index + 1}</StepNumberCircle>
              <div>
                <StepTitle variant="subtitle1">{step.title}</StepTitle>
                <StepDescription variant="body2">{step.description}</StepDescription>
              </div>
            </StepWrapper>
          ))}
        </CardContent>
      </StepsCardWrapper>

      {button && <AddToCart onClick={() => console.log("Added to cart")} label="Add to Cart" />}
    </>
  );
};

export default StepsCard;
