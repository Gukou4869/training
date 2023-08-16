import type { FC } from "react";
import React, { useEffect, useState } from "react";

import { onAuthStateChanged, getAuth } from "firebase/auth";
import { useRouter } from "next/navigation";

import Loading from "@/components/elements/v1/loading";
import { getFirebaseApp } from "@/lib/firebase/utils/init";

import type { User } from "firebase/auth";

const auth = getAuth(getFirebaseApp());

export const AuthContext = React.createContext({});

export const useAuthContext = () => React.useContext(AuthContext);

interface AuthContextProviderProps {
  children: React.ReactNode;
}

export const AuthContextProvider: FC<AuthContextProviderProps> = ({ children }) => {
  const router = useRouter();

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      console.log(user);

      if (user) {
        setUser(user);
        await router.push("/dashboard");
      } else {
        setUser(null);
        await router.push("/");
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [router]);

  return <AuthContext.Provider value={{ user }}>{loading ? <Loading /> : children}</AuthContext.Provider>;
};
