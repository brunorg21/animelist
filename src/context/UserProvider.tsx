import React, {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState
} from 'react'
import { IUser } from '../models/user'

const UserContext = createContext({
  user: null as IUser | null,
  setUser: ((user: IUser | null) => {}) as Dispatch<
    SetStateAction<IUser | null>
  >
})

const UserProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null)
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => useContext(UserContext)

export default UserProvider
