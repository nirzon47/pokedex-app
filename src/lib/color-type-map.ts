export const colorTypeMap = (type) => {
	switch (type) {
		case 'grass':
			return 'bg-teal-400'

		case 'fire':
			return 'bg-red-400'

		case 'water':
			return 'bg-blue-400'

		case 'bug':
			return 'bg-lime-500'

		case 'normal':
			return 'bg-gray-400'

		case 'poison':
			return 'bg-fuchsia-400'

		case 'electric':
			return 'bg-yellow-300'

		case 'ground':
			return 'bg-amber-500'

		case 'fairy':
			return 'bg-pink-400'

		case 'fighting':
			return 'bg-orange-400'

		case 'psychic':
			return 'bg-purple-400'

		case 'rock':
			return 'bg-amber-600'

		case 'ghost':
			return 'bg-violet-400'

		case 'ice':
			return 'bg-sky-400'

		case 'dragon':
			return 'bg-indigo-400'

		case 'dark':
			return 'bg-slate-400'

		case 'steel':
			return 'bg-zinc-500'

		case 'flying':
			return 'bg-sky-300'

		default:
			return 'bg-gray-400'
	}
}
