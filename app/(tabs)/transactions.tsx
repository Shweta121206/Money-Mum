import { Text, View } from 'react-native';

export default function TransactionsScreen() {
    return (
        <View className="flex-1 items-center justify-center bg-white">
            <Text className="text-xl font-bold">Transactions</Text>
            <Text className="text-gray-500 mt-2">View your transactions here</Text>
        </View>
    );
}
