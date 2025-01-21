import { FlexBox, LightText, Title } from '../../styles/common';
import { CardContent, CardWrapper } from './style';
import PhoneIcon from '../../assets/PhoneIcon/PhoneIcon';
import MailIcon from '../../assets/MailIcon/MailIcon';
import { UserType } from '../../types/user';

interface UserCardProps {
  user: UserType;
  handleUserPopup: (user: UserType) => void;
}
const UserCard: React.FC<UserCardProps> = ({ user, handleUserPopup }) => {
  return (
    <CardWrapper onClick={() => handleUserPopup(user)}>
      <Title>{user.name}</Title>
      <CardContent>
        <FlexBox>
          <PhoneIcon />
          <LightText>{user.phone}</LightText>
        </FlexBox>
        <FlexBox>
          <MailIcon />
          <LightText>{user.email}</LightText>
        </FlexBox>
      </CardContent>
    </CardWrapper>
  );
};

export default UserCard;
