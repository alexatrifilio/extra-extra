import { usersApi } from "../api/users";
import { User } from "../types";

const mapToArray = (object: any) => {
  const array = [];

  for (const elem in object) {
    array.push({
      ...object[elem],
      idDB: elem,
    });
  }

  return array;
};

const generateUserToken = async (id: string) => {
  const newToken = Math.random().toString(36).substr(2);
  const response = await usersApi.patch(id, {
    sessionToken: newToken,
  });
  return response ? newToken : null;
};

export { mapToArray, generateUserToken };
