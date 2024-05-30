import { colorTypeMap } from '@/lib/color-type-map'
import { pokemonType } from '@/lib/types'
import clsx from 'clsx'
import { Image } from 'expo-image'
import { Text, View, Pressable } from 'react-native'

const PokemonCard = ({ pokemon }: { pokemon: pokemonType }) => {
	return (
		<Pressable
			onPress={() => console.log(pokemon)}
			className={clsx(
				'flex flex-col rounded-xl py-2 px-4 relative overflow-hidden',
				colorTypeMap(pokemon.types[0].type.name)
			)}
		>
			<Text className='capitalize text-white font-bold text-lg'>
				{pokemon.name}
			</Text>
			<View className='flex flex-row items-center justify-between'>
				<View className='flex flex-col gap-1'>
					{pokemon.types.map((type) => {
						return (
							<Text
								key={type.slot}
								className='capitalize text-xs font-semibold bg-black/10 py-1 px-2 rounded-full text-white text-center'
							>
								{type.type.name}
							</Text>
						)
					})}
				</View>
				<Image
					source={{ uri: pokemon.sprites.front_default }}
					style={{ width: 75, height: 75, zIndex: 1 }}
				/>
			</View>

			<View className='absolute top-0 right-0 pointer-events-none'>
				<Image
					source={require('@/assets/home-bg-splash.png')}
					style={{
						position: 'absolute',
						top: 30,
						right: -30,
						width: 100,
						height: 100,
						opacity: 0.1,
					}}
				/>
			</View>
		</Pressable>
	)
}

export default PokemonCard
