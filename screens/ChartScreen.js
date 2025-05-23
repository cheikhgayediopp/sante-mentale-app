import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { BarChart, Grid, XAxis, YAxis } from "react-native-svg-charts";
import * as scale from "d3-scale";

const data = [70, 45, 60, 30, 80, 55, 40]; // Données exemple : niveau de stress ou sommeil
const labels = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];

export default function ChartScreen({ isDark }) {
  const colors = {
    text: isDark ? "#fff" : "#222",
    background: isDark ? "#121212" : "#f5f5f5",
    bar: isDark ? "#4A90E2" : "#007AFF",
    grid: isDark ? "#333" : "#ccc"
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>
        Statistiques Hebdomadaires
      </Text>
      <View style={styles.chartContainer}>
        <YAxis
          data={data}
          contentInset={{ top: 20, bottom: 20 }}
          svg={{ fill: colors.text, fontSize: 12 }}
          numberOfTicks={6}
          formatLabel={(value) => `${value}`}
        />
        <View style={{ flex: 1, marginLeft: 10 }}>
          <BarChart
            style={{ flex: 1 }}
            data={data}
            svg={{ fill: colors.bar }}
            contentInset={{ top: 20, bottom: 20 }}
            spacingInner={0.3}
            gridMin={0}
          >
            <Grid svg={{ stroke: colors.grid }} />
          </BarChart>
          <XAxis
            style={{ marginTop: 10 }}
            data={data}
            scale={scale.scaleBand}
            formatLabel={(_, index) => labels[index]}
            svg={{ fill: colors.text, fontSize: 12 }}
          />
        </View>
      </View>
      <Text style={[styles.info, { color: colors.text }]}>
        Niveaux de stress / bien-être enregistrés cette semaine.
      </Text>
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
    textAlign: "center",
    marginBottom: 20
  },
  chartContainer: {
    flexDirection: "row",
    height: 220
  },
  info: {
    marginTop: 16,
    fontSize: 14,
    textAlign: "center",
    fontStyle: "italic"
  }
});
