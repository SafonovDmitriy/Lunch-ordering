import { useState } from "react";

export const useToggle = (flag) => {
  const [isOpen, setIsOpen] = useState(flag);
  const onClick = () => {
    setIsOpen((prev) => !prev);
  };
  return [isOpen, onClick];
};
