import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Text, View } from 'react-native'
import Loading from '@/components/global/Loading'
import Error from '@/components/global/Error'
import clsx from 'clsx'
import { colorTypeMap } from '@/lib/color-type-map'
import { pokemonType } from '@/lib/types'
import { Image } from 'expo-image'
import PokemonSplash from './PokemonSplash'

const PokemonPage = ({ id }: { id: string }) => {
	const { isPending, isError, data } = useQuery({
		queryKey: ['pokemon'],
		queryFn: () =>
			axios
				.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
				.then((res) => res.data as pokemonType),
	})

	if (isPending) {
		return <Loading />
	}

	if (isError) {
		return <Error />
	}

	return (
		<View>
			<View
				className={clsx(
					'h-screen relative',
					colorTypeMap(data.types[0].type.name)
				)}
			>
				<View className='h-80 z-50 relative'>
					<PokemonSplash />

					<View className='mt-32 px-6 flex-col flex gap-2'>
						<Text className='text-2xl text-white capitalize font-bold'>
							{data.name}
						</Text>
						<View className='flex flex-row justify-between items-center gap-1'>
							<View className='flex flex-col gap-1'>
								{data.types.map((type) => {
									return (
										<Text
											key={type.slot}
											className='capitalize text-xs font-semibold bg-black/10 py-1 px-4 rounded-full text-white text-center'
										>
											{type.type.name}
										</Text>
									)
								})}
							</View>
							<Text className='text-lg font-bold text-white'>
								# {data.id.toString().padStart(3, '0')}
							</Text>
						</View>
					</View>
					<View className='flex flex-row items-center justify-center'>
						<Image
							source={data.sprites.other.dream_world.front_default}
							style={{
								width: 150,
								height: 150,
								position: 'absolute',
								top: -30,
								zIndex: 50,
							}}
							contentFit='contain'
						/>
					</View>
				</View>
				<View className='h-[calc(100vh-20rem)] bg-white rounded-t-3xl z-20'></View>
			</View>
		</View>
	)
}

export default PokemonPage
