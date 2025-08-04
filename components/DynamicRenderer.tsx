"use client";

import { useEffect } from "react";
import { useAppDispatch } from "@/store/hooks";
import { setSectionContent } from "@/store/slices/contentSlice";

import Header from "./sections/Header";
import Hero from "./sections/Hero";
import AboutUs from "./sections/AboutUs";
import Services from "./sections/Services";
import WhoWeAre from "./sections/WhoWeAre";
import States from "./sections/States";
import Projects from "./sections/Projects";
import BestPrice from "./sections/BestPrice";
import Feedback from "./sections/FeedBack";
import Subscribe from "./sections/Subscribe";
import Footer from "./sections/Footer";
import ContactUs from "./sections/ContactUs";

const componentMap: Record<string, React.ElementType> = {
  Header,
  Hero,
  AboutUs,
  Services,
  WhoWeAre,
  States,
  Projects,
  BestPrice,
  Feedback,
  Subscribe,
  Footer,
  ContactUs
};

type DynamicRendererProps = {
  id: string;
  [key: string]: any;
};

const DynamicRenderer = ({ id, ...props }: DynamicRendererProps) => {
  const dispatch = useAppDispatch();
  const { type, content } = props;

  const Component = componentMap[type];
  if (!Component) {
    console.warn(`Component type "${type}" not found`);
    return <div className="text-center justify-center">Unknown component: {type}</div>;
  }

  useEffect(() => {
    if (content) {
      dispatch(setSectionContent({ id, content }));
    }
  }, [id, content, dispatch]);

  return (
    <div className="flex flex-col justify-center items-center m-0">
      <Component id={id} {...props} />
    </div>
  );
};

export default DynamicRenderer;
