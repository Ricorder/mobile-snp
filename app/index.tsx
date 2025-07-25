import { useRouter, useSegments } from 'expo-router';
import { useEffect, useState } from 'react';
import { LogBox, ActivityIndicator, View } from 'react-native';
import s from "./style";

export default function StartPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  LogBox.ignoreAllLogs(true)
  // const segments = useSegments();
  const router = useRouter();
  useEffect(() => {
    if (isAuthenticated) {
      router.replace("/projects");
    }
    if (!isAuthenticated) {
      router.replace("/login");
    }
  }, [isAuthenticated, router]);
  return (
    <View style={s.container}>
      <ActivityIndicator />
    </View>
  );
}
