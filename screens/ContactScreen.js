// screens/ContactScreen.js
import React, { useState } from "react";
import { View, Text, TextInput, Pressable, Alert } from "react-native";

export default function ContactScreen({ isDark }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (!name || !email || !message) {
      Alert.alert("Erreur", "Merci de remplir tous les champs.");
      return;
    }
    Alert.alert("Envoyé", "Merci pour votre message !");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <View className="p-4">
      <Text className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-black"}`}>📬 Contact</Text>

      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Nom"
        placeholderTextColor={isDark ? "#aaa" : "#666"}
        className="mb-4 p-3 border rounded-xl bg-white dark:bg-black dark:text-white"
      />
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        keyboardType="email-address"
        placeholderTextColor={isDark ? "#aaa" : "#666"}
        className="mb-4 p-3 border rounded-xl bg-white dark:bg-black dark:text-white"
      />
      <TextInput
        value={message}
        onChangeText={setMessage}
        placeholder="Message"
        multiline
        numberOfLines={4}
        placeholderTextColor={isDark ? "#aaa" : "#666"}
        className="mb-4 p-3 border rounded-xl bg-white dark:bg-black dark:text-white"
      />

      <Pressable onPress={handleSubmit} className="bg-blue-500 p-3 rounded-xl">
        <Text className="text-white text-center font-semibold">Envoyer</Text>
      </Pressable>
    </View>
  );
}
