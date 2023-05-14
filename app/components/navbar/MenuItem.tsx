"use client";

import React from "react";

interface MenuItemProps {
  label: string;
  onClickHandler: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ label, onClickHandler }) => {
  return (
    <div
      className="py-3 px-4 hover:bg-neutral-100 transition font-semibold"
      onClick={() => onClickHandler()}
    >
      {label}
    </div>
  );
};

export default MenuItem;
