import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { useContext } from "react";
import { QuizContext } from "../context/QuizContext";


const questions = [
  {
    question: "Ressens-tu souvent de l'anxiété sans raison précise ?",
    answers: ["Jamais", "Parfois", "Souvent"]
  },
  {
    question: "As-tu du mal à te concentrer à cause du téléphone ?",
    answers: ["Pas du tout", "Un peu", "Beaucoup"]
  },
  {
    question: "Combien d'heures dors-tu en moyenne par nuit ?",
    answers: ["Plus de 8h", "Entre 6h et 8h", "Moins de 5h"]
  }
];

const getScore = (answer) => {
  switch (answer) {
    case "Jamais":
    case "Pas du tout":
    case "Plus de 8h":
      return 0;
    case "Parfois":
    case "Un peu":
    case "Entre 6h et 8h":
      return 1;
    case "Souvent":
    case "Beaucoup":
    case "Moins de 5h":
      return 2;
    default:
      return 0;
  }
};

const getStressLevel = (score) => {
  if (score <= 1) return "Stress Faible 😌";
  if (score <= 3) return "Stress Modéré 😐";
  return "Stress Élevé 😟";
};

const { addResult } = useContext(QuizContext);

export default function QuizScreen({ isDark }) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [finished, setFinished] = useState(false);

  const totalScore = answers.reduce((sum, a) => sum + getScore(a), 0);
  const level = getStressLevel(totalScore);

  const colors = {
    text: isDark ? "#fff" : "#222",
    background: isDark ? "#121212" : "#fff",
    button: isDark ? "#4A90E2" : "#007AFF",
    buttonText: "#fff",
    border: isDark ? "#333" : "#ccc"
  };

  const handleAnswer = (answer) => {
    setSelected(answer);
    const updated = [...answers, answer];
    setAnswers(updated);

    setTimeout(() => {
      setSelected(null);
      if (current < questions.length - 1) {
        setCurrent(current + 1);
      } else {
        setFinished(true);
      }
    }, 500);
  };

  const restartQuiz = () => {
    setCurrent(0);
    setAnswers([]);
    setFinished(false);
    setSelected(null);
  };

  if (finished) {
    return (
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <Text style={[styles.title, { color: colors.text }]}>Résultat</Text>
        <Text style={[styles.result, { color: colors.text }]}>
          Score total : {totalScore} / {questions.length * 2}
        </Text>
        <Text style={[styles.level, { color: colors.text }]}>{level}</Text>

        <TouchableOpacity
          style={[styles.answerButton, { backgroundColor: colors.button, borderColor: colors.border }]}
          onPress={restartQuiz}
        >
          <Text style={{ color: colors.buttonText, fontWeight: "600" }}>Recommencer le Quiz</Text>
        </TouchableOpacity>
      </View>
    );
  }
  addResult(totalScore, level);

  const currentQ = questions[current];

  return (
    <ScrollView contentContainerStyle={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>Quiz Prévention</Text>
      <Text style={[styles.question, { color: colors.text }]}>{currentQ.question}</Text>

      {currentQ.answers.map((answer, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.answerButton,
            {
              backgroundColor: selected === answer ? colors.button : "transparent",
              borderColor: colors.border
            }
          ]}
          onPress={() => handleAnswer(answer)}
        >
          <Text style={{ color: selected === answer ? colors.buttonText : colors.text, fontWeight: "600" }}>
            {answer}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexGrow: 1,
    justifyContent: "center"
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 20
  },
  question: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center"
  },
  answerButton: {
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginBottom: 12,
    alignItems: "center"
  },
  result: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 10
  },
  level: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30
  }
});
