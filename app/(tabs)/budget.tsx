import { Text, View } from 'react-native';

export default function BudgetScreen() {
    return (
        <View className="flex-1 items-center justify-center bg-white">
            <Text className="text-xl font-bold">Budget</Text>
            <Text className="text-gray-500 mt-2">Manage your budget here</Text>
        </View>
    );
}
