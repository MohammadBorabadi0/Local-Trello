import { create } from "zustand";

export const useSidebarStore = create((set) => ({
    showSidebar: false,
    setShowSidebar: (isShow) => {
        set({ showSidebar: isShow });
    },
}));

export const useSettingsStore = create((set) => ({
    showSettings: false,
    setShowSettings: (isShow) => {
        set({ showSettings: isShow });
    },
}));

export const primaryColors = {
    red: '#f87171',
    blue: '#3b82f6',
    yellow: '#eab308',
    orange: '#f97316',
    green: '#22c55e',
    purple: '#a855f7'
}

export const secondaryColors = {
    red: '#dc2626',
    blue: '#2563eb',
    yellow: '#ca8a04',
    orange: '#c2410c',
    green: '#15803d',
    purple: '#7e22ce'
}

export const useColorStore = create((set) => ({
    bgPrimaryTheme: primaryColors.green,
    bgSecondaryTheme: secondaryColors.green,
    setBgPrimaryTheme: (bgColor) => {
        set({ bgPrimaryTheme: primaryColors[bgColor] });
    },
    setBgSecondaryTheme: (bgColor) => {
        set({ bgSecondaryTheme: secondaryColors[bgColor] });
    },
}));

export const useThemeStore = create((set) => ({
    lightMode: true,
    bgTheme: "#F1F2F4",
    setBgTheme: (isDarkMode) => {
        set({ bgTheme: isDarkMode ? '#222' : '#F1F2F4' })
    },
    setLightMode: (isDarkMode) => {
        set({ lightMode: isDarkMode });
    }
}));

// set({ darkMode: isDarkMode ? '#ebecf0' : '#F1F2F4' });