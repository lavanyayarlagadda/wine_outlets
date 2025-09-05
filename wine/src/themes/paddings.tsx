import { useEffect, useState } from "react";

const paddings = {
  32: {
    default: "32px",
    sm: "16px",
    md: "20px",
    lg: "28px",
  },
  24: {
    default: "24px",
    sm: "12px",
    md: "16px",
    lg: "20px",
  },
  16: {
    default: "16px",
    sm: "8px",
    md: "12px",
    lg: "14px",
  },
  12: {
    default: "12px",
    sm: "6px",
    md: "8px",
    lg: "10px",
  },
  8: {
    default: "8px",
    sm: "4px",
    md: "6px",
    lg: "6px",
  },
};

type PaddingKey = keyof typeof paddings;

export const getPadding = (sizeKey: PaddingKey): string => {
  const screenWidth = window.innerWidth;

  if (screenWidth <= 767) {
    return paddings[sizeKey].sm;
  } else if (screenWidth <= 992) {
    return paddings[sizeKey].md;
  } else if (screenWidth <= 1280) {
    return paddings[sizeKey].lg;
  } else {
    return paddings[sizeKey].default;
  }
};

const usePadding = (sizeKey: PaddingKey): string => {
  const [padding, setPadding] = useState(getPadding(sizeKey));

  useEffect(() => {
    const handleResize = (): void => {
      setPadding(getPadding(sizeKey));
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [sizeKey]);

  return padding;
};

export default paddings;
export { usePadding };
