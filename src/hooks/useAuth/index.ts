import { usersApi } from "../../api/users";
import { generateUserToken } from "../../helpers";
import { LoginPayload } from "../../types";

const useAuth = () => {
  const login = async ({ email, pass }: LoginPayload) => {
    const users = await usersApi.getAll();

    const loggedUser = users.find(
      (user) => user.email === email && user.pass === pass
    );

    if (loggedUser) {
      const token = await generateUserToken(loggedUser.idDB);
      if (token) {
        localStorage.setItem("user-token", token);
      }
    }
  };

  return { login };
};

export { useAuth };
