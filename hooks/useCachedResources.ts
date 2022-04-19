import { FontAwesome } from "@expo/vector-icons";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...FontAwesome.font,
          "poppins-extralight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
          "poppins-light": require("../assets/fonts/Poppins-Light.ttf"),
          "poppins-medium": require("../assets/fonts/Poppins-Medium.ttf"),
          "poppins-bold": require("../assets/fonts/Poppins-Bold.ttf"),
          "poppins-black": require("../assets/fonts/Poppins-Black.ttf"),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
