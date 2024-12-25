import { useState } from "react";
import { MainPage } from "../../pages/main-page";
import { CartPage } from "../../pages/cart-page";
import { UserPage } from "../../pages/user-page";
import { ModalBox } from "../modal-box/modal-box";
import { LogIn } from "../log-in/log-in";
import { Registration } from "../registration/registration";
import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { CartContextProvider } from "../cart-context/cart-context";

export const Layout = () => {
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
    <CartContextProvider>
      <Header setPage={setPage} setModalBox={setModalBox} />
      {pages[page]}
      {modalBoxes[modalBox]}
      <Footer setPage={setPage} />
    </CartContextProvider>
  );
};
