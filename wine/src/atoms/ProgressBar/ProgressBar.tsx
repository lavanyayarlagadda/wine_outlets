import { Box, LinearProgress, Typography } from "@mui/material";

interface Props {
  label: string;
  value: number; // percentage
}

const ProgressBar: React.FC<Props> = ({ label, value }) => (
  <Box display="flex" alignItems="center" gap={1}>
    <Typography variant="body2">{label}</Typography>
    <LinearProgress
      variant="determinate"
      value={value}
      sx={{ flex: 1, height: 8, borderRadius: 5 }}
    />
    <Typography variant="body2">{value}%</Typography>
  </Box>
);

export default ProgressBar;
