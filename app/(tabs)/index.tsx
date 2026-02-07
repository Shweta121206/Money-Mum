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
    <View className="flex-1 bg-slate-50 dark:bg-slate-950">
      {/* Header Section */}
      <View className="bg-primary-500 pt-16 pb-8 px-6 rounded-b-[32px] shadow-lg">
        <Text className="text-primary-100 text-sm font-medium mb-1">Welcome back,</Text>
        <Text className="text-3xl font-extrabold text-white">Money Mum</Text>
      </View>

      <View className="flex-1 px-6 -mt-6">
        {/* Daily Tip Section */}
        <TipCard tip={dailyTip} />

        {/* Dashboard Placeholder */}
        <View className="mt-6">
          <Text className="text-lg font-bold text-slate-800 dark:text-white mb-3">Your Overview</Text>
          <View className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 items-center">
            <Text className="text-slate-400 dark:text-slate-500">Charts coming soon...</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
