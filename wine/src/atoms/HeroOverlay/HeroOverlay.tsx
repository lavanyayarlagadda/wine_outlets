import { useTheme } from "@mui/material";
import {
  OverlayContainer,
  OverlayContentBox,
  OverlayButtonGroup,
  CustomizeTagBox,
  CustomizeTagActionBox,
  CustomizeTitleText,
  CustomizeSubTitleText,
  CustomiseBannerContentWrapper,
} from "./HeroOverlay.style";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import CustomButton from "../CustomButton/CustomButton";
import palette from "../../themes/palette";

export interface HeroOverlayProps {
  title: string;
  subtitle: string;
  firstBtnText: string;
  secondBtnText: string;
  onFirstBtnClick: () => void;
  onSecondBtnClick: () => void;
  handleTagClick?: () => void;
  tagText?: string;
  tagActionText: string;
  tagActionUrl?: string;
}

const HeroOverlay = ({
  title,
  subtitle,
  firstBtnText,
  secondBtnText,
  onFirstBtnClick,
  onSecondBtnClick,
  tagText,
  tagActionText,
  handleTagClick,
}: HeroOverlayProps) => {
  const theme = useTheme();
  return (
    <OverlayContainer>
      <OverlayContentBox>
        <CustomiseBannerContentWrapper>
          {tagText && (
            <CustomizeTagBox>
              <span>{tagText}</span>
              <CustomizeTagActionBox>
                {tagActionText}
                <KeyboardArrowRightIcon onClick={handleTagClick} />
              </CustomizeTagActionBox>
            </CustomizeTagBox>
          )}

          <CustomizeTitleText>{title}</CustomizeTitleText>
          <CustomizeSubTitleText>{subtitle}</CustomizeSubTitleText>
        </CustomiseBannerContentWrapper>

        <OverlayButtonGroup>
          <CustomButton
            text={firstBtnText}
            onClick={onFirstBtnClick}
            bgColor={theme?.palette?.primary?.dark}
            color={theme?.palette?.white?.main}
          />
          <CustomButton
            text={secondBtnText}
            onClick={onSecondBtnClick}
            bgColor={theme?.palette?.primary?.light}
            color={theme?.palette?.primary?.dark}
            border={palette?.grey.light}
          />
        </OverlayButtonGroup>
      </OverlayContentBox>
    </OverlayContainer>
  );
};

export default HeroOverlay;
