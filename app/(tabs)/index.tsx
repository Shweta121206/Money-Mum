import TipCard from '@/components/TipCard';
import { TIPS } from '@/constants/tips';
import { useMemo } from 'react';
import { Text, View } from 'react-native';

export default function HomeScreen() {
  // Simple random tip for now - in a real app this might be date-based
  const dailyTip = useMemo(() => {
    const randomIndex = Math.floor(Math.random() * TIPS.length);
    return TIPS[randomIndex];
  }, []);

  return (
    <View className="flex-1 items-center justify-start pt-12 bg-gray-50 dark:bg-slate-900">
      <View className="w-full px-6 mb-6">
        <Text className="text-2xl font-bold text-gray-900 dark:text-white">Home Dashboard</Text>
        <Text className="text-lg text-gray-600 dark:text-gray-400">Welcome to Money Mum!</Text>
      </View>

      <TipCard tip={dailyTip} />

      <View className="my-8 h-px w-4/5 bg-gray-300 dark:bg-gray-700" />
    </View>
  );
}
