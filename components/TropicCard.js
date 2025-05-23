import React from 'react';
import { View, Text, useColorScheme } from 'react-native';
import { AlertCircle } from 'lucide-react-native';

export default function TopicCard({ title, description }) {
  const isDark = useColorScheme() === 'dark';
  return (
    <View className="mb-4 p-4 rounded-2xl shadow-md bg-white dark:bg-black">
      <View className="flex-row items-center mb-2">
        <AlertCircle className={`mr-2 ${isDark ? "text-blue-300" : "text-blue-600"}`} />
        <Text className={`text-xl font-semibold ${isDark ? "text-white" : "text-black"}`}>{title}</Text>
      </View>
      <Text className={`text-base ${isDark ? "text-gray-300" : "text-gray-700"}`}>{description}</Text>
    </View>
  );
}
