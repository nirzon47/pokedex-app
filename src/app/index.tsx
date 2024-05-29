import Homepage from '@/components/Homepage/Homepage'
import HomepageSplash from '@/components/Homepage/HomepageSplash'
import { generationTypes } from '@/lib/types'
import { MenuIcon } from 'lucide-react-native'
import React, { useState } from 'react'
import { View, Text } from 'react-native'

const Index = () => {
	const [generation, setGeneration] = useState<generationTypes>(1)

	return (
		<View className='flex-1 p-4 md:p-8 relative'>
			{/* Header */}
			<View>
				<View className='my-4 flex flex-row items-center justify-end md:justify-between'>
					<Text className='hidden md:inline-block md:text-3xl font-bold'>
						Pokedex
					</Text>
					<MenuIcon />
				</View>
				<View className='mt-6 md:hidden'>
					<Text className='text-2xl md:text-3xl font-bold'>Pokedex</Text>
				</View>
			</View>

			{/* Content */}
			<View>
				<Homepage generation={generation} />
			</View>
			<HomepageSplash />
		</View>
	)
}

export default Index
