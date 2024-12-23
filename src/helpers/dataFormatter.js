export default function dataFormatter(login, password, email) {
  const data = {
    login: login,
    password: password,
    email: email,
  };

  return data;
}
