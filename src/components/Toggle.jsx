"use client";

import React, { useEffect, useState } from "react";
import { Switch } from "@nextui-org/react";
import { MoonIcon } from "@/components/Icons/MoonIcon";
import { SunIcon } from "@/components/Icons/SunIcon";
import { useThemeStore } from "@/store/store";

export default function Toogle() {
  const { lightMode, setLightMode, setBgTheme } = useThemeStore(
    (state) => state
  );

  return (
    <Switch
      defaultSelected
      isSelected={lightMode}
      onClick={() => {
        setBgTheme(lightMode);
        setLightMode(!lightMode);
      }}
      size="lg"
      color="warning"
      startContent={<SunIcon />}
      endContent={<MoonIcon />}
    >
    </Switch>
  );
}
