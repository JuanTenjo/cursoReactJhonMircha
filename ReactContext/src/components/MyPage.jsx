import { Footer } from "./Footer";
import { Main } from "./Main";
import { Header } from "./Header";
import { useState } from "react";

const initialTheme = "light";
const initialLanguage = "es";
const initialAuth = false;
const translations = {
  es: {
    headerTitle: "Mi aplicacion SIN Context Api",
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
    headerTitle: "My application WITHOUT Context Api",
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

const MyPage = () => {
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
      <Header
        theme={theme}
        text={text}
        auth={auth}
        handleTheme={handleTheme}
        handleLanguage={handleLanguage}
        handleAuth={handleAuth}
      ></Header>
      <Main theme={theme} text={text} auth={auth}></Main>
      <Footer theme={theme} text={text}></Footer>
    </div>
  );
};

export default MyPage;
