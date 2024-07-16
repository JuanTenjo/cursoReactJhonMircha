import React from "react";

export const Footer = ({theme, text}) => {
  return(
    <footer className={theme}>{text.footerTitle}</footer>
  );
};
