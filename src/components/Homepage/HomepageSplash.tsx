import { Image } from 'expo-image'
import { View } from 'react-native'

const HomepageSplash = () => {
	return (
		<View className='absolute top-[-130px] right-[-130px] -z-50 opacity-20'>
			<Image
				source={require('@/assets/home-bg-splash.png')}
				style={{
					width: 320,
					height: 320,
					zIndex: -50,
				}}
			/>
		</View>
	)
}

export default HomepageSplash
