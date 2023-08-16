import type { FC } from "react";
import React, { useLayoutEffect, useState } from "react";

import { getAuth } from "firebase/auth";
import Router from "next/router";

import Loading from "@/components/elements/v1/loading";
import { getFirebaseApp } from "@/lib/firebase/utils/init";
import { sleep } from "@/lib/sleep";

import type { User } from "firebase/auth";

const auth = getAuth(getFirebaseApp());

export const AuthContext = React.createContext({});

export const useAuthContext = () => React.useContext(AuthContext);

interface AuthContextProviderProps {
  children: React.ReactNode;
}

export const AuthContextProvider: FC<AuthContextProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useLayoutEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      console.log(user, "🔥🔥🔥🔥🔥");
      if (user) {
        setUser(user);
        Router.push("/dashboard");
      } else {
        setUser(null);
        Router.push("/");
      }

      await sleep(800);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      <Loading isLoading={loading} />
      {children}
    </AuthContext.Provider>
  );
};
