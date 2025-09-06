import React from "react";
import { LoaderContainer, LoaderImage } from "./AppLoader.style";

const AppLoader: React.FC = () => {
  return (
    <LoaderContainer>
      <LoaderImage src="/loader.gif" alt="Loading..." />
    </LoaderContainer>
  );
};

export default AppLoader;