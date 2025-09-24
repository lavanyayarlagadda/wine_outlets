import { Checkbox } from "@mui/material";
import {
  LabelTooltip,
  TruncatedLabel,
  VerticalFormControlLabel,
} from "../../organisms/Filter/FilterPanel.style";

interface Props {
  label: string;
  checked: boolean;
  onChange: () => void;
}

const CustomCheckbox: React.FC<Props> = ({ label, checked, onChange }) => (
  <VerticalFormControlLabel
    control={<Checkbox checked={checked} onChange={onChange} />}
    label={
      <LabelTooltip title={label} arrow>
        <TruncatedLabel>{label}</TruncatedLabel>
      </LabelTooltip>
    }
  />
);

export default CustomCheckbox;
