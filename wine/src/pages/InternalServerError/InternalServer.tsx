import React from "react";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import RefreshIcon from "@mui/icons-material/Refresh";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import Box from "@mui/material/Box";
import ServerError from "../../assets/Error/server_error.svg";
import {
  Container,
  Card,
  Illustration,
  Title,
  Subtitle,
  Actions,
  BackButton,
} from "../NotFound/NotFound.style";

type Props = {
  errorId?: string;
};

const InternalServer: React.FC<Props> = ({ errorId }) => {
  const navigate = useNavigate();

  const handleRetry = () => window.location.reload();
  const handleHome = () => navigate("/");
  const handleSupport = () => navigate("/support");

  return (
    <Container>
      <Card>
        <Illustration aria-hidden>
          <img
            src={ServerError}
            alt="Server error placeholder"
            style={{ width: "100%", height: "auto" }}
          />
        </Illustration>

        <Title variant="h4">Something went wrong</Title>

        <Subtitle variant="body1">
          Our server encountered an unexpected error and couldn't complete your request.
        </Subtitle>

        <Actions>
          <BackButton
            variant="outlined"
            startIcon={<RefreshIcon />}
            onClick={handleRetry}
            aria-label="Retry"
          >
            Retry
          </BackButton>

          <BackButton
            variant="outlined"
            startIcon={<ReportProblemIcon />}
            onClick={handleSupport}
            aria-label="Contact support"
          >
            Contact support
          </BackButton>

          <BackButton
            variant="contained"
            startIcon={<HomeIcon />}
            onClick={handleHome}
            aria-label="Go home"
          >
            Go home
          </BackButton>
        </Actions>

        {errorId && (
          <Box mt={2}>
            <Subtitle variant="caption">Error id: {errorId}</Subtitle>
          </Box>
        )}

        <Box mt={2}>
          <Subtitle variant="caption">
            If this keeps happening, please contact support and include the error id above so we
            can investigate.
          </Subtitle>
        </Box>
      </Card>
    </Container>
  );
};

export default InternalServer;
