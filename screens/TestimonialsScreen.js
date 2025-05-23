// screens/TestimonialsScreen.js
import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const testimonials = [
  {
    id: "1",
    text: "Cette application m'a vraiment aidé à comprendre l'impact du numérique sur ma santé mentale.",
    author: "Sophie, 22 ans"
  },
  {
    id: "2",
    text: "Les conseils et le quiz sont très pertinents et faciles à suivre.",
    author: "Lucas, 19 ans"
  },
  {
    id: "3",
    text: "Le suivi personnel m'a permis de mieux gérer mon stress lié aux réseaux sociaux.",
    author: "Mariam, 24 ans"
  }
];

export default function TestimonialsScreen({ isDark }) {
  const backgroundColor = isDark ? "#121212" : "#f9f9f9";
  const textColor = isDark ? "#eee" : "#222";

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={[styles.title, { color: textColor }]}>Témoignages</Text>
      <FlatList
        data={testimonials}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.card, { backgroundColor: isDark ? "#222" : "#fff" }]}>
            <Text style={[styles.text, { color: textColor }]}>"{item.text}"</Text>
            <Text style={[styles.author, { color: textColor }]}>{item.author}</Text>
          </View>
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 12,
    textAlign: "center"
  },
  card: {
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3
  },
  text: {
    fontSize: 16,
    fontStyle: "italic",
    marginBottom: 8
  },
  author: {
    fontSize: 14,
    fontWeight: "600",
    textAlign: "right"
  }
});
