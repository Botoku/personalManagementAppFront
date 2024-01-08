"use client";

import React, { createContext, useState, useContext } from "react";

type ContentDisplayProviderProps = {
  children: React.ReactNode;
};
const contextObj: {
  activeSection?: string;
  setSection?: (sec: string) => void;
} = {};
const ContentDisplayContext = createContext(contextObj);
const ContentDisplayProvider = ({ children }: ContentDisplayProviderProps) => {
  const [activeSection, setActiveSection] = useState("todo");

  const setSection = (sec: string) => {
      setActiveSection(sec)
    }
    contextObj.activeSection = activeSection
  return (
    <ContentDisplayContext.Provider value={{activeSection, setSection}}>
      {children}
    </ContentDisplayContext.Provider>
  );
};

export { ContentDisplayContext, ContentDisplayProvider };
