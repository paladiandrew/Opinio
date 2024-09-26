import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User } from './User'; // Импортируем ваш класс User

// Создание типа для контекста, который включает User и функцию для его обновления
type UserContextType = {
  user: User | null;
  setUser: (user: User) => void;
};

// Создание контекста с пустыми значениями по умолчанию
const UserContext = createContext<UserContextType>({
  user: null, // начальное значение user будет null
  setUser: () => {}, // пустая функция, так как она будет переопределена позже
});

// Обновляем тип для UserProvider, чтобы включить children
export const UserProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Хук для использования контекста в компонентах
export const useUser = () => {
  return useContext(UserContext);
};