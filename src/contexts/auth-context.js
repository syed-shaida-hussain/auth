import { useState, createContext, useEffect , useContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  // const [auth, setAuth] = useState({
  //   token: '',
  //   user: {},
  //   isAuth: false
  // });

  // useEffect(() => {
  //   setAuth({
  //     token: localStorage.getItem("token"),
  //     user: JSON.parse(localStorage.getItem("user")),
  //     isAuth: localStorage.getItem("isAuth")
  //   })
  // }, []);

  const [auth, setAuth] = useState({
    token: localStorage.getItem("AUTH_TOKEN"),
    status: localStorage.getItem("AUTH_TOKEN") ? true : false,
    username: localStorage.getItem("username") || "",
  });

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };



