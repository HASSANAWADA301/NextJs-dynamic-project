"use client";

import { useAppDispatch, useAppSelector } from "../../../src/store/hooks";
import { useEffect,useState } from "react";
import { setTheme } from "../../../src/store/slices/darkSlice";


const ThemeWrapper = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.ui.theme);

  const [isReady, setIsReady] = useState(false);

  
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark" || saved === "light") {
      dispatch(setTheme(saved));
    }
    setIsReady(true);
  }, [dispatch]);


  useEffect(() => {
    if (!isReady) return;

    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);

    console.log("Theme applied:", theme);
  }, [theme, isReady]);

  return <>{children}</>;
};

export default ThemeWrapper;