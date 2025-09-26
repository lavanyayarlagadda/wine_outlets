// NotFound.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import PageNotFound from "../../assets/NotFound/page-not-found.svg";
import {
  Container,
  Card,
  Illustration,
  Title,
  Subtitle,
  Actions,
  BackButton,
} from "./NotFound.style";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    // If there is a previous history entry, go back, otherwise go to home
    try {
      if (window.history.length > 1) {
        navigate(-1);
      } else {
        navigate("/");
      }
    } catch {
      navigate("/");
    }
  };

  const handleHome = () => navigate("/");

  return (
    <Container>
      <Card>
        <Illustration aria-hidden>
          <img
            src={PageNotFound}
            alt="Page not found illustration"
            style={{ width: "100%", height: "auto" }}
          />
        </Illustration>

        <Title variant="h4">Page not found</Title>
        <Subtitle variant="body1">We couldn't find the page you were looking for.</Subtitle>

        <Actions>
          <BackButton
            variant="outlined"
            startIcon={<ArrowBackIosNewIcon />}
            onClick={handleBack}
            aria-label="Go back"
          >
            Go back
          </BackButton>

          <BackButton
            variant="contained"
            startIcon={<HomeIcon />}
            onClick={handleHome}
            aria-label="Go home"
          >
            Home
          </BackButton>
        </Actions>
      </Card>
    </Container>
  );
};

export default NotFound;
