import CloseIcon from '../../assets/CloseIcon/CloseIcon';
import { FlexBox, Title } from '../../styles/common';
import { UserType } from '../../types/user';
import {
  Overlay,
  PopupContainer,
  PopupLightText,
  PopupRegularText,
  Table,
  TableCell,
} from './style';

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
        <FlexBox justifycontent="space-between" alignItems="center">
          <Title>{user?.name}</Title>
          <CloseIcon onClick={onClose} />
        </FlexBox>
        <Table>
          <tbody>
            {userDetails.map(({ label, value }, index) => (
              <tr key={index}>
                <TableCell>
                  <PopupRegularText>{label}:</PopupRegularText>
                </TableCell>
                <TableCell>
                  <PopupLightText>{value}</PopupLightText>
                </TableCell>
              </tr>
            ))}
          </tbody>
        </Table>
        <FlexBox flexDirection="column" gap="12px">
          <PopupRegularText>Дополнительная информация:</PopupRegularText>
          <PopupLightText>Адрес: {user?.address}</PopupLightText>
        </FlexBox>
      </PopupContainer>
    </Overlay>
  );
};

export default UserPopup;
