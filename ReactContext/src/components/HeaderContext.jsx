import React from "react";

export const HeaderContext = ({
  theme,
  handleTheme,
  handleLanguage,
  text,
  auth,
  handleAuth,
}) => {
  return (
    <div>
      <header className={theme}>
        <h2>{text.headerTitle}</h2>
        <h3>{text.headerSubtitle}</h3>
        <select name="language" onChange={handleLanguage}>
          <option value="es">ES</option>
          <option value="en">EN</option>
        </select>
        <input
          type="radio"
          name="theme"
          id="lightContext"
          onClick={handleTheme}
          value="light"
          defaultChecked
        />
        <label htmlFor="lightContext">{text.headerLight}</label>
        <input
          type="radio"
          name="theme"
          id="darkContext"
          onClick={handleTheme}
          value="dark"
        />
        <label htmlFor="darkContext">{text.headerDark}</label>
        <button onClick={handleAuth}>
          {auth ? text.buttonLogout : text.buttonLogin}
        </button>
      </header>
    </div>
  );
};
