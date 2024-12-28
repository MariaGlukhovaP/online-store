import { useState } from "react";

const usePersonalData = () => {
  const [login, setLogin] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();

  const dataFormatter = (login, password, email) => {
    return { login, password, email };
  };

  const handleClick = () => {
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

  return { handleClick, setLogin, setPassword, setEmail };
};

export default usePersonalData;
