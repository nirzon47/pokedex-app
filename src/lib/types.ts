export type generationTypes = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

export interface genType {
	pokemon_species: genDataType[]
}

export interface genDataType {
	name: string
	url: string
}

export interface pokemonType {
	name: string
	types: [
		{
			slot: number
			type: {
				name: string
				url: string
			}
		}
	]
	abilities: [
		{
			ability: {
				name: string
				url: string
			}
		}
	]
	height: number
	weight: number
	id: number
	stats: [
		{
			base_stat: number
			effort: number
			stat: {
				name: string
				url: string
			}
		}
	]
	sprites: {
		front_default: string
		other: {
			dream_world: {
				front_default: string
			}
		}
	}
}
