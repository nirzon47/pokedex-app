import { Image } from 'expo-image'
import { View } from 'react-native'

const PokemonSplash = () => {
	return (
		<View className='absolute top-0 right-0 -z-10'>
			<Image
				source={require('@/assets/home-bg-splash.png')}
				style={{
					width: 320,
					height: 320,
					opacity: 0.2,
					top: -130,
					right: -130,
				}}
			/>
			<Image
				source={require('@/assets/line.png')}
				style={{
					width: 50,
					height: 25,
					top: -200,
					right: -100,
					opacity: 0.1,
				}}
			/>
			<Image
				source={require('@/assets/pokeball.png')}
				style={{
					width: 50,
					height: 50,
					opacity: 0.1,
					top: -110,
					right: 10,
				}}
			/>
		</View>
	)
}

export default PokemonSplash
