import { colorTypeMap } from '@/lib/color-type-map'
import { pokemonType } from '@/lib/types'
import clsx from 'clsx'
import { Image } from 'expo-image'
import { Link } from 'expo-router'
import { Pressable, Text, View } from 'react-native'

const PokemonCard = ({ pokemon }: { pokemon: pokemonType }) => {
	const idToDisplay = pokemon.id.toString().padStart(3, '0')
	const nameToDisplay =
		pokemon.name.length > 10 ? pokemon.name.slice(0, 7) + '...' : pokemon.name

	return (
		<View className='w-1/2 p-0.5 sm:w-1/3 sm:p-1 md:w-1/4 lg:w-1/5'>
			<Link
				push
				href={{
					pathname: '/[id]',
					params: { id: pokemon.id },
				}}
				asChild
			>
				<Pressable
					className={clsx(
						'flex flex-col rounded-xl py-2 px-4 relative overflow-hidden w-full',
						colorTypeMap(pokemon.types[0].type.name)
					)}
				>
					<Text className='font-bold text-right text-black/15'>
						#{idToDisplay}
					</Text>
					<Text className='capitalize text-white font-bold text-lg'>
						{nameToDisplay}
					</Text>
					<View className='flex flex-row items-center justify-between'>
						<View className='flex flex-col gap-1'>
							{pokemon.types.map((type) => {
								return (
									<Text
										key={type.slot}
										className='capitalize text-[10px] font-semibold bg-black/10 py-1 px-2 rounded-full text-white text-center'
									>
										{type.type.name}
									</Text>
								)
							})}
						</View>
						<Image
							source={{
								uri: pokemon.sprites.front_default,
							}}
							style={{
								width: 80,
								height: 80,
								zIndex: 1,
							}}
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
			</Link>
		</View>
	)
}

export default PokemonCard
