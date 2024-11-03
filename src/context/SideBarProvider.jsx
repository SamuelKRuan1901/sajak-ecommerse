import { createContext, useState } from 'react';

export const SideBarContext = createContext();

export const SideBarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  return (
    <SideBarContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </SideBarContext.Provider>
  );
};
