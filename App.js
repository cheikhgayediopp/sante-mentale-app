// App.js
import React from "react";
import { useColorScheme } from "react-native";
import { NavigationContainer, DarkTheme, DefaultTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

import HomeScreen from "./screens/HomeScreen";
import ChartScreen from "./screens/ChartScreen";
import QuizScreen from "./screens/QuizScreen";
import TrackerScreen from "./screens/TrackerScreen";
import ContactScreen from "./screens/ContactScreen";
import TestimonialsScreen from "./screens/TestimonialsScreen";
import Footer from "./components/Footer";
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from "react-native-reanimated";



const Tab = createBottomTabNavigator();

export default function App() {
  const theme = useColorScheme();

  return (
    <QuizProvider>
      <NavigationContainer theme={theme === "dark" ? DarkTheme : DefaultTheme}>
        <View style={{ flex: 1 }}>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ color, size }) => {
                let icon;
                switch (route.name) {
                  case "Accueil":
                    icon = <Ionicons name="home-outline" size={size} color={color} />;
                    break;
                  case "Statistiques":
                    icon = <Ionicons name="stats-chart" size={size} color={color} />;
                    break;
                  case "Quiz":
                    icon = <MaterialCommunityIcons name="brain" size={size} color={color} />;
                    break;
                  case "Suivi":
                    icon = <Ionicons name="journal-outline" size={size} color={color} />;
                    break;
                  case "Contact":
                    icon = <Ionicons name="mail-outline" size={size} color={color} />;
                    break;
                  default:
                    icon = <Ionicons name="ellipse" size={size} color={color} />;
                }
                return icon;
              },
              headerShown: false,
              tabBarActiveTintColor: theme === "dark" ? "#0ff" : "#007AFF",
              tabBarInactiveTintColor: theme === "dark" ? "#888" : "#ccc",
              tabBarStyle: {
                backgroundColor: theme === "dark" ? "#111" : "#fff",
                borderTopWidth: 0.5,
                borderTopColor: theme === "dark" ? "#333" : "#ddd"
              }
            })}
          >
            <Tab.Screen name="Accueil" children={() => <HomeScreen isDark={theme === "dark"} />} />
            <Tab.Screen name="Statistiques" children={() => <ChartScreen isDark={theme === "dark"} />} />
            <Tab.Screen name="Quiz" children={() => <QuizScreen isDark={theme === "dark"} />} />
            <Tab.Screen name="Suivi" children={() => <TrackerScreen isDark={theme === "dark"} />} />
            <Tab.Screen name="Contact" children={() => <ContactScreen isDark={theme === "dark"} />} />
          </Tab.Navigator>
  
          <Footer />
        </View>
      </NavigationContainer>
    </QuizProvider>
  );
  



  return (
    <QuizProvider>
      <NavigationContainer theme={theme === "dark" ? DarkTheme : DefaultTheme}>
        {/* ... Tab.Navigator */}
      </NavigationContainer>
    </QuizProvider>
  );
}


