"use client";
import React, { createContext, useContext, useMemo, useState } from "react";
import { usePopup } from "~/utils/toggle-popups";

interface UtilsContextType {
  headerFeatures: boolean;
  headerFeaturesVisible: boolean;
  headerFeaturesRef: React.RefObject<HTMLDivElement | null>;
  toggleHeaderFeatures: () => void;
  overlayOpen: boolean;
  setOverlayOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export const UtilsContext = createContext<UtilsContextType | null>(null);

export const UtilsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const {
    isActive: headerFeatures,
    isVisible: headerFeaturesVisible,
    ref: headerFeaturesRef,
    togglePopup: toggleHeaderFeatures,
  } = usePopup();
  const [overlayOpen, setOverlayOpen] = useState(false);

  const providerValue = useMemo(
    () => ({
      headerFeatures,
      headerFeaturesRef,
      headerFeaturesVisible,
      toggleHeaderFeatures,
      overlayOpen,
      setOverlayOpen,
    }),
    [
      headerFeatures,
      headerFeaturesRef,
      headerFeaturesVisible,
      toggleHeaderFeatures,
      overlayOpen,
      setOverlayOpen,
    ]
  );

  return (
    <UtilsContext.Provider value={providerValue}>
      {children}
    </UtilsContext.Provider>
  );
};

export const useUtilsContext = (): UtilsContextType => {
  const context = useContext(UtilsContext);
  if (!context) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
};
