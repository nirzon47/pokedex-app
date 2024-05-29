import { Image } from 'expo-image'
import { Text, View } from 'react-native'

const Loading = () => {
	return (
		<View className='flex items-center justify-center h-[75vh]'>
			<Image
				source={require('@/assets/loading.gif')}
				style={{ width: 100, height: 100 }}
			/>
			<Text className='text-xl my-4 font-semibold'>
				Searching for Pokemon
			</Text>
		</View>
	)
}

export default Loading
