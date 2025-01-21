import { useState, useEffect } from 'react';
import { getAllUsers, searchUsers } from './api/requests';
import { SearchInput } from './components/SearchInput';
import { UserCard } from './components/UserCard';
import {
  Container,
  CustomError,
  FlexBox,
  GlobalStyle,
  GridBox,
  LightText,
} from './styles/common';
import { UserType } from './types/user';
import UserPopup from './components/UserPopup/UserPopup';

function App() {
  const [users, setUsers] = useState<UserType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [userPopupVisible, setUserPopupVisible] = useState<boolean>(false);
  const [selectedUser, setSelectedUser] = useState<UserType>();
  const [isFirstLoad, setIsFirstLoad] = useState<boolean>(true);

  const handleGetUsers = () => {
    setLoading(true);
    setError(null);
    getAllUsers()
      .then(data => {
        setUsers(data?.data || []);
      })
      .catch(err => {
        console.error('Ошибка:', err);
        setError('Ошибка загрузки данных');
      })
      .finally(() => {
        setLoading(false);
        setIsFirstLoad(false);
      });
  };

  const handleSearch = (term: string) => {
    if (!term) {
      handleGetUsers();
      return;
    }
    setLoading(true);
    setError(null);
    searchUsers(term)
      .then(data => {
        setUsers(data?.data || []);
      })
      .catch(err => {
        console.error('Ошибка:', err);
        setError('Ошибка поиска данных');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleUserPopup = (user: UserType) => {
    setSelectedUser(user);
    setUserPopupVisible(true);
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <SearchInput onSearch={handleSearch} getUsers={handleGetUsers} />
        {loading || isFirstLoad ? (
          <FlexBox justifycontent="center">
            <LightText>Загрузка...</LightText>
          </FlexBox>
        ) : error ? (
          <FlexBox justifycontent="center">
            <CustomError>Произошла ошибка: {error}</CustomError>
          </FlexBox>
        ) : Array.isArray(users) && users.length > 0 ? (
          <GridBox>
            {users.map((user, index) => (
              <UserCard
                handleUserPopup={handleUserPopup}
                key={index}
                user={user}
              />
            ))}
          </GridBox>
        ) : (
          <FlexBox justifyontent="center">
            <LightText>Пользователи не найдены</LightText>
          </FlexBox>
        )}
      </Container>
      {userPopupVisible && (
        <UserPopup
          user={selectedUser}
          onClose={() => setUserPopupVisible(false)}
        />
      )}
    </>
  );
}

export default App;
