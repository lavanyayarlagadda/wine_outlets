import { Checkbox } from "@mui/material";
import { VerticalFormControlLabel } from "../../organisms/Filter/FilterPanel.style";

interface Props {
  label: string;
  checked: boolean;
  onChange: () => void;
}

const CustomCheckbox: React.FC<Props> = ({ label, checked, onChange }) => (
  <VerticalFormControlLabel control={<Checkbox checked={checked} onChange={onChange} />} label={label} />
);

export default CustomCheckbox;
