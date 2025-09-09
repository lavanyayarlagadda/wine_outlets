import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Divider,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import palette from "../../themes/palette";
import AddToCart from "../../atoms/CustomButton/AddToCart";

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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Card
        sx={{
          borderRadius: 2,
          maxWidth: 600,
          mx: "auto", // centers horizontally
          width: "100%",
          border: `1px solid ${palette.success.main}`,
        }}
      >
        <CardContent>
          <Typography variant={isMobile ? "subtitle1" : "h6"} fontWeight="bold" gutterBottom>
            {heading}
          </Typography>
          <Divider sx={{ color: palette.success.main, mx: -2, mb: 2 }} />

          {steps.map((step, index) => (
            <Box
              key={index}
              display="flex"
              alignItems="flex-start" // ⬅️ Align circle to top of text
              flexDirection={isMobile ? "column" : "row"}
              mb={2}
            >
              {/* Number Circle */}
              <Box
                sx={{
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  backgroundColor: palette.primary.dark,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: palette.white.main,
                  fontSize: "14px",
                  fontWeight: "bold",
                  mr: isMobile ? 0 : 2,
                  mb: isMobile ? 1 : 0,
                  flexShrink: 0, // ⬅️ prevent shrinking
                }}
              >
                {index + 1}
              </Box>

              {/* Step Content */}
              <Box>
                <Typography variant={isMobile ? "body1" : "subtitle1"} fontWeight="bold">
                  {step.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontSize: isMobile ? "0.85rem" : "0.9rem" }}
                >
                  {step.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </CardContent>
      </Card>
      {button && <AddToCart onClick={() => console.log("Added to cart")} label="Add to Cart" />}
    </>
  );
};

export default StepsCard;
