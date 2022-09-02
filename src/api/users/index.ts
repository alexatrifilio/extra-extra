import { mapToArray } from "../../helpers";
import { User, UserPayload } from "../../types";

const post = async (payload: UserPayload) => {
  await fetch(
    "https://extra-extra-c25b8-default-rtdb.firebaseio.com/users.json",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }
  );
};

const getAll = async (): Promise<User[]> => {
  const get = await fetch(
    "https://extra-extra-c25b8-default-rtdb.firebaseio.com/users.json"
  );
  const data = await get.json();
  return mapToArray(data);
};

const get = async (id: string): Promise<User> => {
  const get = await fetch(
    `https://extra-extra-c25b8-default-rtdb.firebaseio.com/users/${id}.json`
  );
  const data = await get.json();
  return data;
};

const del = async (id: string) => {
  await fetch(
    `https://extra-extra-c25b8-default-rtdb.firebaseio.com/users/${id}.json`,
    {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }
  );
};

const patch = async (id: string, payload: Partial<User>) => {
  const resp = await fetch(
    `https://extra-extra-c25b8-default-rtdb.firebaseio.com/users/${id}.json`,
    {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }
  );

  const data = await resp.json();

  return data;
};

export const usersApi = { post, get, getAll, del, patch };
