import { useState, createContext } from "react";

export type Author = {
  name: string;
  email: string;
};
type UserContextType = {
  user: Author | null;
  setUser: React.Dispatch<React.SetStateAction<Author | null>>;
};

type UserContextProviderProps = {
  children: React.ReactNode;
};
// export const UserContext = createContext<UserContextType | null>(null);
export const UserContext = createContext({} as UserContextType);

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = useState<Author | null>(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
