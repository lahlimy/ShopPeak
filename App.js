import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";

import OfflineNotice from "./app/components/OfflineNotice";
import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";

import AuthNavigator from "./app/navigation/AuthNavigator";
import AppNavigator from "./app/navigation/AppNavigator";
import navigationTheme from "./app/navigation/navigationTheme";

export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreToken = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  };

  const handelReady = async () => {
    if (isReady) return;
    try {
      await SplashScreen.preventAutoHideAsync();
    } catch (error) {
      console.log(error);
    }

    if (!isReady) {
      try {
        setIsReady(true);
        await SplashScreen.hideAsync();
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    handelReady();
    restoreToken();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
