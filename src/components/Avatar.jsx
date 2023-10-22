import { useSession } from "next-auth/react";
import Avatar from "react-avatar";

const AvatarComponent = (props) => {
  const { data } = useSession();

  return (
    <Avatar
      name={data?.user?.name || data?.user?.email}
      textSizeRatio={props.textSizeRatio || 2}
      size={props.size || 27}
      round={props.round || "100%"}
    />
  );
};

export default AvatarComponent;
