import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import dayjs from '@/lib/dayjs';
import { useNavigation } from '@react-navigation/native';
import { bookings, properties } from '../data/mock';
import { useThemeColors, spacing, typography, radius } from '../theme/theme';
import { Card, Chip, Button, Row } from '../components/ui';

export default function BookingsScreen() {
	const colors = useThemeColors();
	const navigation = useNavigation();
	const propertyById = new Map(properties.map(p => [p.id, p]));

	return (
		<ScrollView style={{ flex: 1, backgroundColor: colors.background }} contentContainerStyle={{ padding: spacing.lg, gap: spacing.md }}>
			<Row left={<Text style={{ fontSize: 28, fontWeight: '800' }}>Rezervări</Text>} right={<Button title="Nouă" icon="add-outline" type="ghost" onPress={() => navigation.navigate('NewBooking' as never)} />} />
			{bookings.map(b => (
				<Card key={b.id}>
					<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
						<Text style={{ fontSize: typography.subtitle, fontWeight: '700' }}>{b.guestName}</Text>
						<Chip label={b.status === 'confirmed' ? 'Confirmată' : b.status === 'pending' ? 'În așteptare' : 'Anulată'} />
					</View>
					<Text style={{ color: colors.textMuted, marginTop: 4 }}>{propertyById.get(b.propertyId)?.name}</Text>
					<Text style={{ marginTop: 6 }}>{dayjs(b.checkIn).format('DD MMM')} – {dayjs(b.checkOut).format('DD MMM')}</Text>
					<Text style={{ marginTop: 6, fontWeight: '700' }}>{b.total} RON</Text>
				</Card>
			))}
		</ScrollView>
	);
}