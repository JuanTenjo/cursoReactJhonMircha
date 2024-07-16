import React from "react";

export const MainContext = ({theme,text,auth}) => {
  return (
    <main className={theme}>
    {auth?<p>{text.mainHello}</p>:<p>{text.mainWelcome}</p>}
    <p>{text.mainContent}</p>
    </main>
  );
};
