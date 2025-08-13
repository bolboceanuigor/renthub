import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import dayjs from '@/lib/dayjs';
import { useThemeColors, spacing, typography, radius } from '../theme/theme';
import { properties, bookings } from '../data/mock';

export default function CalendarScreen() {
	const colors = useThemeColors();
	const days = Array.from({ length: 7 }).map((_, i) => dayjs().add(i, 'day'));

	return (
		<ScrollView style={{ flex: 1, backgroundColor: colors.background }} contentContainerStyle={{ padding: spacing.lg }}>
			<Text style={{ fontSize: 28, fontWeight: '800', marginBottom: spacing.lg }}>Calendar</Text>
			<View style={{ flexDirection: 'row', marginBottom: spacing.md }}>
				<View style={{ width: 120 }} />
				{days.map(d => (
					<View key={d.toString()} style={{ flex: 1, alignItems: 'center' }}>
						<Text style={{ color: colors.textMuted }}>{d.format('ddd')}</Text>
						<Text style={{ fontWeight: '700' }}>{d.format('DD')}</Text>
					</View>
				))}
			</View>
			{properties.map(p => (
				<View key={p.id} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: spacing.md }}>
					<View style={{ width: 120 }}>
						<Text style={{ fontWeight: '600' }}>{p.name}</Text>
						<Text style={{ color: colors.textMuted, fontSize: 12 }}>{p.beds} bd / {p.baths} ba</Text>
					</View>
					<View style={{ flex: 1, flexDirection: 'row', gap: 8 }}>
						{days.map(d => {
							const booking = bookings.find(b => b.propertyId === p.id && d.isAfter(dayjs(b.checkIn).subtract(1, 'day')) && d.isBefore(dayjs(b.checkOut)));
							return (
								<View key={d.toString()} style={{ flex: 1, height: 36, borderRadius: radius.sm, backgroundColor: booking ? '#DBEAFE' : 'transparent', borderWidth: 1, borderColor: colors.separator, justifyContent: 'center', alignItems: 'center' }}>
									{booking && <Text style={{ fontSize: 12 }}>{booking.guestName}</Text>}
								</View>
							);
						})}
					</View>
				</View>
			))}
		</ScrollView>
	);
}