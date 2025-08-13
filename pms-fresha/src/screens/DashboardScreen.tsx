import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { useAppStore } from '../state/store';
import { useThemeColors, spacing, typography } from '../theme/theme';
import { StatCard, Card, Button, Row, Chip } from '../components/ui';

export default function DashboardScreen() {
	const colors = useThemeColors();
	const getOccupancy = useAppStore(s => s.getOccupancy);
	const getRevenueThisMonth = useAppStore(s => s.getRevenueThisMonth);
	const arrivals = useAppStore(s => s.getTodaysArrivals());
	const departures = useAppStore(s => s.getTodaysDepartures());

	return (
		<ScrollView style={{ flex: 1, backgroundColor: colors.background }} contentContainerStyle={{ padding: spacing.lg, gap: spacing.lg }}>
			<Text style={{ fontSize: 32, fontWeight: '800', color: colors.text }}>Bun venit 👋</Text>
			<View style={{ flexDirection: 'row', gap: spacing.lg }}>
				<View style={{ flex: 1 }}>
					<StatCard title="Ocupare" value={`${getOccupancy()}%`} icon="bed-outline" />
				</View>
				<View style={{ flex: 1 }}>
					<StatCard title="Venit luna" value={`${getRevenueThisMonth()} RON`} icon="cash-outline" />
				</View>
			</View>

			<Card>
				<Row left={<Text style={{ fontSize: typography.subtitle, fontWeight: '700' }}>Operațional azi</Text>} right={<Button title="Vezi calendar" type="ghost" icon="calendar-outline" />} />
				<View style={{ flexDirection: 'row', gap: spacing.md }}>
					<Chip label={`Sosiri: ${arrivals.length}`} />
					<Chip label={`Plecări: ${departures.length}`} />
				</View>
			</Card>

			<Card>
				<Row left={<Text style={{ fontSize: typography.subtitle, fontWeight: '700' }}>Acțiuni rapide</Text>} />
				<View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: spacing.md }}>
					<Button title="Nouă rezervare" icon="add-circle-outline" />
					<Button title="Adaugă proprietate" type="ghost" icon="home-outline" />
					<Button title="Trimite mesaj" type="ghost" icon="chatbubble-ellipses-outline" />
				</View>
			</Card>
		</ScrollView>
	);
}