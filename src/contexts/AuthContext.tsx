import { useRouter } from "next/router";
import { createContext, ReactNode, useState } from "react";

type User = {
  token: string;
}

type SignInCredentials = {
  username: string;
  password: string;
}

type AuthContextData = {
  signIn(credentials: SignInCredentials): Promise<void>;
  isAuthenticated: boolean;
  user: User;
}

type AuthProviderProps = {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>();
  const isAuthenticated = !!user
  const router = useRouter();

  async function signIn({ username, password}: SignInCredentials) {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    };

    const response = await fetch('http://localhost:8080/v1/auth', requestOptions)

    if (response.status === 204) {
      console.log('continue next page')
      const token = Buffer.from(`${username}:${password}`, 'utf-8').toString('base64')
      setUser({ token })

      router.push('/dashboard')
    } else if (response.status === 401) {
      alert('get out of here !')
    } else {
      alert(`status => ${response.status}`)
    }
  }

  return (
    <AuthContext.Provider value={{ signIn, isAuthenticated, user }}>
      { children }
    </AuthContext.Provider>
  )
}

