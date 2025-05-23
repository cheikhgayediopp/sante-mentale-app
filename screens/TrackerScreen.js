import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { QuizContext } from "../context/QuizContext";

export default function TrackerScreen({ isDark }) {
  const { history } = useContext(QuizContext);

  const colors = {
    text: isDark ? "#fff" : "#000",
    background: isDark ? "#121212" : "#fff",
    border: isDark ? "#333" : "#ccc"
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>Suivi Personnel</Text>
      {history.length === 0 ? (
        <Text style={{ color: colors.text }}>Aucun résultat pour le moment.</Text>
      ) : (
        <FlatList
          data={history}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={[styles.card, { borderColor: colors.border }]}>
              <Text style={[styles.date, { color: colors.text }]}>{item.date}</Text>
              <Text style={[styles.level, { color: colors.text }]}>{item.level}</Text>
              <Text style={[styles.score, { color: colors.text }]}>
                Score : {item.score}
              </Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center"
  },
  card: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
    marginBottom: 10
  },
  date: {
    fontSize: 14,
    marginBottom: 4
  },
  level: {
    fontSize: 16,
    fontWeight: "600"
  },
  score: {
    fontSize: 14
  }
});
