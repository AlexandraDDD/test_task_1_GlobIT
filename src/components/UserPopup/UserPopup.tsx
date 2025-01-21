import CloseIcon from '../../assets/CloseIcon/CloseIcon';
import { FlexBox, LightText, RegularText, Title } from '../../styles/common';
import { UserType } from '../../types/user';
import { Overlay, PopupContainer, Table, TableCell } from './style';

interface UserPopupProps {
  user: UserType | undefined;
  onClose: () => void;
}
const UserPopup: React.FC<UserPopupProps> = ({ user, onClose }) => {
  const userDetails = [
    { label: 'Телефон', value: user?.phone },
    { label: 'Почта', value: user?.email },
    { label: 'Дата приема', value: user?.hire_date },
    { label: 'Должность', value: user?.position_name },
    { label: 'Подразделение', value: user?.department },
  ];
  return (
    <Overlay onClick={onClose}>
      <PopupContainer onClick={(e: any) => e.stopPropagation()}>
        <FlexBox $justifyContent="space-between" alignItems="center">
          <Title>{user?.name}</Title>
          <CloseIcon onClick={onClose} />
        </FlexBox>
        <Table>
          <tbody>
            {userDetails.map(({ label, value }, index) => (
              <tr key={index}>
                <TableCell>
                  <RegularText fontSize="1.125rem">{label}:</RegularText>
                </TableCell>
                <TableCell>
                  <LightText fontSize="1.125rem">{value}</LightText>
                </TableCell>
              </tr>
            ))}
          </tbody>
        </Table>
        <FlexBox flexDirection="column" gap="12px">
          <RegularText fontSize="1.125rem">
            Дополнительная информация:
          </RegularText>
          <LightText fontSize="1.125rem">Адрес: {user?.address}</LightText>
        </FlexBox>
      </PopupContainer>
    </Overlay>
  );
};

export default UserPopup;
