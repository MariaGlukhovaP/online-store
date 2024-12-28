import { useState } from "react";

const usePersonalData = () => {
  const [login, setLogin] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();

  const dataFormatter = (login, password, email) => {
    return { login, password, email };
  };

  const setPersonalData = () => {
    const data = dataFormatter(login, password, email);

    console.log(data);

    let api;

    if (email) {
      api = "http://localhost:9001/registration";
    } else {
      api = "http://localhost:9001/login";
    }

    fetch(api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((result) => result.json())
      .then((result) => {
        console.log(result);
        localStorage.setItem("token", result.token);
      });
  };

  const updatePersonalData = () => {
    const data = dataFormatter(login, password, email);

    const token = localStorage.getItem("token");

    fetch("http://localhost:9001/update-personal-data", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(data),
    })
      .then((result) => result.json())
      .then((result) => {
        console.log(result);
      });
  };

  return {
    setPersonalData,
    updatePersonalData,
    setLogin,
    setPassword,
    setEmail,
  };
};

export default usePersonalData;
