import { Tip } from '@/constants/tips';
import { Text, View } from 'react-native';

interface TipCardProps {
    tip: Tip;
}

export default function TipCard({ tip }: TipCardProps) {
    return (
        <View className="bg-white dark:bg-slate-800 p-5 rounded-2xl shadow-md my-4 w-full border-l-4 border-secondary-400">
            <View className="flex-row justify-between items-center mb-3">
                <Text className="text-xs font-bold text-primary-600 dark:text-primary-300 uppercase tracking-widest">
                    Daily Tip
                </Text>
                <View className="bg-primary-50 dark:bg-primary-900 px-3 py-1 rounded-full">
                    <Text className="text-xs font-semibold text-primary-700 dark:text-primary-200">
                        {tip.category}
                    </Text>
                </View>
            </View>
            <Text className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">
                {tip.title}
            </Text>
            <Text className="text-slate-600 dark:text-slate-300 leading-6 text-base">
                {tip.description}
            </Text>
        </View>
    );
}
