import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
  User,
  Button,
} from "@nextui-org/react";
import { signOut, useSession } from "next-auth/react";
import AvatarComponent from "./Avatar";
import { useRouter } from "next/navigation";

export default function DropdownComponent() {
  const { data } = useSession();
  const router = useRouter();

  return (
    <div className="flex items-center gap-4">
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Avatar
            as="button"
            className="transition-transform w-7 h-7 text-xl"
            src={`https://ui-avatars.com/api/?name=${
              data?.user?.name || data?.user?.email || "*"
            }&length=1&background=A81562&color=fff&size=262`}
          />
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Profile Actions"
          variant="flat"
          className="p-3"
        >
          <DropdownItem>
            <div className="flex items-center gap-2">
              <AvatarComponent size={30} textSizeRatio={1} />
              <h4>{data?.user?.name || ""}</h4>
              <h4>{data?.user?.email || ""}</h4>
            </div>
          </DropdownItem>
          <DropdownItem
            key="logout"
            color="danger"
            onClick={() => {
              router.replace("/auth/login");
              signOut();
            }}
          >
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
