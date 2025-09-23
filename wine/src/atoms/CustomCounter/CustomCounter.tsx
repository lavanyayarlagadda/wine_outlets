import React from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { CounterBox, CounterIconButton, CounterValue } from "./CustomCounter.style";

interface CounterProps {
  value: number;
  onChange: (_newValue: number) => void;
  min?: number;
  max?: number;
  step?: number;
}

const CustomCounter: React.FC<CounterProps> = ({
  value,
  onChange,
  min = 1,
  max = Infinity,
  step = 1,
}) => {
  const handleDecrement = () => {
    if (value > min) {
      onChange(value - step);
    }
  };

  const handleIncrement = () => {
    if (value < max) {
      onChange(value + step);
    }
  };

  return (
    <CounterBox>
      <CounterIconButton onClick={handleDecrement}>
        <RemoveIcon />
      </CounterIconButton>
      <CounterValue>{value}</CounterValue>
      <CounterIconButton onClick={handleIncrement}>
        <AddIcon />
      </CounterIconButton>
    </CounterBox>
  );
};

export default CustomCounter;

// interface CounterProps {
//   value: number;
//   // onChange: (_newValue: number) => void;
//   min?: number;
//   max?: number;
//   step?: number;
//     onAdd: () => void;
//   onRemove: () => void;
// }

// const CustomCounter: React.FC<CounterProps> = ({
//   value,
//   // onChange,
//   min = 1,
//   max = Infinity,
//   // step = 1,
//    onAdd,
//   onRemove,
// }) => {
//   const handleDecrement = () => {
//     if (value > min) {
//       // onChange(value - step);
//         onRemove();
//     }
//   };

//   const handleIncrement = () => {
//     if (value < max) {
//       // onChange(value + step);
//        onAdd();
//     }
//   };

//   return (
//     <CounterBox>
//       <CounterIconButton onClick={handleDecrement}>
//         <RemoveIcon />
//       </CounterIconButton>
//       <CounterValue>{value}</CounterValue>
//       <CounterIconButton onClick={handleIncrement}>
//         <AddIcon />
//       </CounterIconButton>
//     </CounterBox>
//   );
// };

// export default CustomCounter;
