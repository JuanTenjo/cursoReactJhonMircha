import { FooterContext } from "./FooterContext";
import { MainContext } from "./MainContext";
import { HeaderContext } from "./HeaderContext";
import { useState } from "react";

const initialTheme = "light";
const initialLanguage = "es";
const initialAuth = false;
const translations = {
  es: {
    headerTitle: "Mi aplicacion con  Context Api",
    headerSubtitle: "Mi Cabecera",
    headerLight: "Claro",
    headerDark: "Oscuro",
    buttonLogin: "Iniciar Sesion",
    buttonLogout: "Cerrar Sesion",
    mainWelcome: "Bienvenido Guest",
    mainHello: "Hola usuario",
    mainContent: "Mi contenido principal",
    footerTitle: "Mi pie de pagina",
  },
  en: {
    headerTitle: "My application WITH Context Api",
    headerSubtitle: "My Header",
    headerLight: "Sure",
    headerDark: "Dark",
    buttonLogin: "Login",
    buttonLogout: "Close Session",
    mainWelcome: "Welcome",
    mainHello: "Hello",
    mainContent: "My main content",
    footerTitle: "My footer",
  },
};

const MyPageContext = () => {
  const [theme, setTheme] = useState(initialTheme);
  const [language, setLanguage] = useState(initialLanguage);
  const [text, setText] = useState(translations[language]);
  const [auth, setAuth] = useState(initialAuth)

  const handleLanguage = (e) => {
    setLanguage(e.target.value);
    setText(translations[language]);
  };

  const handleTheme = (e) => {
    setTheme(e.target.value);
  };

  const handleAuth = (e) => {
    if(auth){
      setAuth(false);
    }else{
      setAuth(true);
    }
  }

  return (
    <div className="my-page">
      <HeaderContext
        theme={theme}
        text={text}
        auth={auth}
        handleTheme={handleTheme}
        handleLanguage={handleLanguage}
        handleAuth={handleAuth}
      ></HeaderContext>
      <MainContext theme={theme} text={text} auth={auth}></MainContext>
      <FooterContext theme={theme} text={text}></FooterContext>
    </div>
  );
};

export default MyPageContext;
