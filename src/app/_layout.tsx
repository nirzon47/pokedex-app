import { StatusBar } from 'expo-status-bar'
import '../global.css'
import { Slot } from 'expo-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ScrollView } from 'react-native'

const queryClient = new QueryClient()

export default function Layout() {
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<ScrollView>
					<Slot />
					<StatusBar style='dark' />
				</ScrollView>
			</QueryClientProvider>
		</>
	)
}
