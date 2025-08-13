import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { useAppStore } from '../state/store';
import { useThemeColors, spacing } from '../theme/theme';
import { StatCard } from '../components/ui';

export default function AnalyticsScreen() {
	const colors = useThemeColors();
	const revenue = useAppStore(s => s.getRevenueThisMonth());
	const occupancy = useAppStore(s => s.getOccupancy());
	return (
		<ScrollView style={{ flex: 1, backgroundColor: colors.background }} contentContainerStyle={{ padding: spacing.lg }}>
			<Text style={{ fontSize: 28, fontWeight: '800', marginBottom: spacing.lg }}>Analytics</Text>
			<View style={{ flexDirection: 'row', gap: spacing.lg }}>
				<View style={{ flex: 1 }}>
					<StatCard title="Venit curent" value={`${revenue} RON`} icon="cash-outline" />
				</View>
				<View style={{ flex: 1 }}>
					<StatCard title="Ocupare" value={`${occupancy}%`} icon="bed-outline" />
				</View>
			</View>
		</ScrollView>
	);
}