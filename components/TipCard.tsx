import { Tip } from '@/constants/tips';
import { Text, View } from 'react-native';

interface TipCardProps {
    tip: Tip;
}

export default function TipCard({ tip }: TipCardProps) {
    return (
        <View className="bg-emerald-100 dark:bg-emerald-900 p-4 rounded-xl shadow-sm my-4 w-11/12">
            <View className="flex-row justify-between items-center mb-2">
                <Text className="text-xs font-bold text-emerald-700 dark:text-emerald-300 uppercase tracking-wider">
                    Daily Tip
                </Text>
                <Text className="text-xs text-emerald-600 dark:text-emerald-400 bg-emerald-200 dark:bg-emerald-800 px-2 py-0.5 rounded-full">
                    {tip.category}
                </Text>
            </View>
            <Text className="text-lg font-bold text-emerald-900 dark:text-emerald-50 mb-1">
                {tip.title}
            </Text>
            <Text className="text-emerald-800 dark:text-emerald-200 leading-5">
                {tip.description}
            </Text>
        </View>
    );
}
