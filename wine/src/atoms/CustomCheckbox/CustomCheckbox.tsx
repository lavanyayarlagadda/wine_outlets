import { Checkbox, FormControlLabel } from "@mui/material";

interface Props {
  label: string;
  checked: boolean;
  onChange: () => void;
}

const CustomCheckbox: React.FC<Props> = ({ label, checked, onChange }) => (
  <FormControlLabel control={<Checkbox checked={checked} onChange={onChange} />} label={label} />
);

export default CustomCheckbox;
