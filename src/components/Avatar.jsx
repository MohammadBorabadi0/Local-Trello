import { useSession } from "next-auth/react";
import Avatar from "react-avatar";

const AvatarComponent = (props) => {
  const session = useSession();
  console.log(session);

  return (
    <Avatar
      name={props.name}
      textSizeRatio={2}
      size={props.size ? props.size : "27"}
      round={props.round ? props.round : "100%"}
    />
  );
};

export default AvatarComponent;
