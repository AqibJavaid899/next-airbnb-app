"use client";

import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="max-w-[2520px] px-4 sm:px-3 md:px-10 xl:px-20 mx-auto">
      {children}
    </div>
  );
};

export default Container;
