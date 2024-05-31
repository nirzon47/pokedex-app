import PokemonPage from '@/components/PokemonPage/PokemonPage'
import { Link, useLocalSearchParams } from 'expo-router'
import { ChevronLeft, Heart } from 'lucide-react-native'
import { View } from 'react-native'

const PokemonDetails = () => {
	const { id } = useLocalSearchParams()

	return (
		<View className='relative'>
			{/* Header */}
			<View className='absolute top-4 flex flex-row h-8 items-center justify-between z-50 w-screen px-6 pt-20'>
				<Link replace href='/' asChild>
					<ChevronLeft className='text-white h-8 w-8 flex items-center justify-center' />
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
