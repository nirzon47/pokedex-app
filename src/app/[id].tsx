import PokemonPage from '@/components/PokemonPage/PokemonPage'
import { Link, useLocalSearchParams } from 'expo-router'
import { ChevronLeft, Heart } from 'lucide-react-native'
import { View } from 'react-native'

const PokemonDetails = () => {
	const { id } = useLocalSearchParams()

	return (
		<View className='relative'>
			{/* Header */}
			<View className='absolute top-0 flex flex-row h-8 items-center justify-between z-50 w-screen px-6 py-12'>
				<Link href='/'>
					<ChevronLeft className='text-white' />
				</Link>
				<Heart className='text-white' />
			</View>

			{/* Content */}
			<View>
				<PokemonPage id={id as string} />
			</View>
		</View>
	)
}

export default PokemonDetails
