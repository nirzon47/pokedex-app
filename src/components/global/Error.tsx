import { Image } from 'expo-image'
import { Text, View } from 'react-native'

const Error = () => {
	return (
		<View className='flex items-center justify-center h-[75vh]'>
			<Image
				source={require('@/assets/error.png')}
				style={{ width: 100, height: 100 }}
			/>
			<Text className='text-xl my-4 font-semibold text-red-800'>
				Something went wrong
			</Text>
		</View>
	)
}

export default Error
