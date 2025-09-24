import { useNavigate } from "react-router-dom";

export const useBrands = () => {
  const navigate = useNavigate();

  const handleContainerClick = (brand: string) => {
    navigate(`/productsList?brand=${brand}`);
  };

  return {
    handleContainerClick,
  } as const;
};

export default useBrands;
