import { useQuery } from '@tanstack/react-query'
import { Text, View } from 'react-native'
import Loading from '@/components/global/Loading'
import axios from 'axios'
import Error from '@/components/global/Error'

const Homepage = ({
	generation,
	setGeneration,
}: {
	generation: number
	setGeneration: React.Dispatch<React.SetStateAction<number>>
}) => {
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
				.then((res) => res.data),
	})

	if (isPending) {
		return <Loading />
	}

	if (isError) {
		return <Error />
	}

	return (
		<View>
			{genData.pokemon_species.map((pokemon: any) => (
				<Text key={pokemon.name}>{pokemon.name}</Text>
			))}
		</View>
	)
}

export default Homepage
