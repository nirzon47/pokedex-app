import { useQuery } from '@tanstack/react-query'
import { View } from 'react-native'
import Loading from '@/components/global/Loading'
import axios from 'axios'
import Error from '@/components/global/Error'
import HomepagePokemon from './HomepagePokemon'
import { genType } from '@/lib/types'

const Homepage = ({ generation }: { generation: number }) => {
	const {
		isPending,
		isError,
		data: genData,
		error,
	} = useQuery({
		queryKey: ['generation'],
		queryFn: () =>
			axios
				.get(`https://pokeapi.co/api/v2/generation/${generation}`)
				.then((res) => res.data as genType),
	})

	if (isPending) {
		return <Loading />
	}

	if (isError) {
		return <Error />
	}

	return (
		<View>
			<HomepagePokemon genData={genData.pokemon_species} />
		</View>
	)
}

export default Homepage
