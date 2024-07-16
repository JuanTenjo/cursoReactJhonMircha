import React from "react";

export const FooterContext = ({theme, text}) => {
  return(
    <footer className={theme}>{text.footerTitle}</footer>
  );
};
