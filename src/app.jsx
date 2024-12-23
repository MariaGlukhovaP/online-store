import { useState } from "react";
import { MainPage } from "./pages/main-page";
import { ModalBox } from "./components/modal-box/modal-box";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { CartPage } from "./pages/cart-page";
import { UserPage } from "./pages/user-page";
import { LogIn } from "./components/log-in/log-in";
import { Registration } from "./components/registration/registration";

export const App = () => {
  const [page, setPage] = useState("Main");
  const [modalBox, setModalBox] = useState("none");

  const pages = {
    Main: <MainPage />,
    Cart: <CartPage />,
    User: <UserPage />,
  };

  const modalBoxes = {
    none: null,
    Login: (
      <ModalBox setModalBox={setModalBox}>
        <LogIn />
      </ModalBox>
    ),
    Registration: (
      <ModalBox setModalBox={setModalBox}>
        <Registration />
      </ModalBox>
    ),
  };

  return (
    <div>
      <Header setPage={setPage} setModalBox={setModalBox} />
      {pages[page]}
      {modalBoxes[modalBox]}
      <Footer setPage={setPage} />
    </div>
  );
};
