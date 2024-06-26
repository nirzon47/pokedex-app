import { useQueries } from '@tanstack/react-query'
import { View } from 'react-native'
import { genDataType } from '@/lib/types'
import axios from 'axios'
import Error from '@/components/global/Error'
import Loading from '@/components/global/Loading'
import PokemonCard from './PokemonCard'

const HomepagePokemon = ({ genData }: { genData: genDataType[] }) => {
	const pokemonQueries = useQueries({
		queries: genData.map((pokemon) => {
			return {
				queryKey: ['pokemon', pokemon.name],
				queryFn: () =>
					axios
						.get(
							`https://pokeapi.co/api/v2/pokemon/${
								pokemon.url.split('/')[6]
							}`
						)
						.then((res) => res.data),
				enabled: !!pokemon.url,
			}
		}),
	})

	if (pokemonQueries.some((query) => query.isError)) {
		return <Error />
	}

	if (pokemonQueries.some((query) => query.isLoading)) {
		return <Loading />
	}

	return (
		<View className='flex flex-row flex-wrap justify-between my-8'>
			{pokemonQueries
				.sort((o1, o2) => o1.data.id - o2.data.id)
				.map((query) => {
					return <PokemonCard key={query.data.id} pokemon={query.data} />
				})}
		</View>
	)
}

export default HomepagePokemon
