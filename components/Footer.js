// components/Footer.js
import React, { useEffect } from "react";
import { View, Text, StyleSheet, useColorScheme } from "react-native";
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from "react-native-reanimated";

export default function Footer() {
  const theme = useColorScheme();
  const color = theme === "dark" ? "#888" : "#333";
  const bg = theme === "dark" ? "#111" : "#f5f5f5";

  const opacity = useSharedValue(0);

  useEffect(() => {
    opacity.value = withTiming(1, { duration: 800 }); // animation douce en 800 ms
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value
  }));

  return (
    <Animated.View style={[styles.footer, { backgroundColor: bg }, animatedStyle]}>
      <Text style={[styles.text, { color }]}>© 2025 - Tous droits réservés</Text>
      <Text style={[styles.text, { color }]}>Cheikh Diop & Coumba Faye</Text>
      <Text style={[styles.text, { color }]}>77 522 34 05 / 77 011 18 48</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  footer: {
    paddingVertical: 10,
    alignItems: "center",
    borderTopWidth: 0.5,
    borderTopColor: "#ccc"
  },
  text: {
    fontSize: 12
  }
});
