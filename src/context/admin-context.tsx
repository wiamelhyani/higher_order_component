import { ReactNode, createContext, useEffect } from "react";
import { useState } from "react";
import { getMe } from "@/services/auth";
import { useQuery } from "@tanstack/react-query";

interface IUser {
  role: string[];
  firstName: string;
  lastName: string;
  email: string;
}

type User = {
  user: IUser | null;
};

type UserContextProviderProps = {
  children: ReactNode;
};

export const UserContext = createContext({
  user: null,
} as User);

const UserProvider = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);

  const { data } = useQuery({
    queryKey: ["me"],
    queryFn: () => getMe(),
  });

  useEffect(() => {
    if (data) {
      const userData: IUser = data.data;
      console.log(userData);
      setUser(userData);
    }
  }, [data]);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
