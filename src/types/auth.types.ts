import { ReactNode } from "react"

export type Auth = {
    auth: boolean,
    token: string
}

export type AuthProviderProps = {
    children: ReactNode
}

export type AuthState = {
    value: Auth | null;
  }
export type AuthAction = {
    type: 'SET-USER-ON' | 'SET-USER-OFF',
    payload: AuthState
}

export type AuthContextProps = {
    auth: AuthState,
    handleAuthLogin: (email: string, pass: string) => Promise<void>,
    handleAuthLogout: () => Promise<void>
}
