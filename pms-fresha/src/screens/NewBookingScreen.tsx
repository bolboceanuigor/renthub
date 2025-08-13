import React from 'react';
import { ScrollView, View, Text, TextInput, Alert } from 'react-native';
import dayjs from '@/lib/dayjs';
import { useNavigation } from '@react-navigation/native';
import { useAppStore } from '../state/store';
import { useThemeColors, spacing, typography, radius } from '../theme/theme';
import { Card, Button, Chip, Row } from '../components/ui';

export default function NewBookingScreen() {
	const colors = useThemeColors();
	const navigation = useNavigation();
	const addBooking = useAppStore(s => s.addBooking);
	const properties = useAppStore(s => s.properties);

	const [guestName, setGuestName] = React.useState('');
	const [propertyId, setPropertyId] = React.useState(properties[0]?.id ?? '');
	const [checkIn, setCheckIn] = React.useState(dayjs().format('YYYY-MM-DD'));
	const [checkOut, setCheckOut] = React.useState(dayjs().add(2, 'day').format('YYYY-MM-DD'));
	const [status, setStatus] = React.useState<'confirmed'|'pending'|'cancelled'>('pending');
	const [total, setTotal] = React.useState('500');

	function save() {
		if (!guestName || !propertyId || !checkIn || !checkOut) {
			Alert.alert('Completați câmpurile obligatorii');
			return;
		}
		const booking = {
			id: String(Date.now()),
			guestName,
			propertyId,
			checkIn: dayjs(checkIn).toISOString(),
			checkOut: dayjs(checkOut).toISOString(),
			status,
			total: Number(total) || 0,
		};
		addBooking(booking as any);
		// @ts-ignore
		navigation.goBack();
	}

	return (
		<ScrollView style={{ flex: 1, backgroundColor: colors.background }} contentContainerStyle={{ padding: spacing.lg, gap: spacing.lg }}>
			<Text style={{ fontSize: 28, fontWeight: '800' }}>Rezervare nouă</Text>
			<Card>
				<Text style={{ fontSize: typography.subtitle, fontWeight: '700', marginBottom: spacing.md }}>Detalii oaspete</Text>
				<Text style={{ color: colors.textMuted, marginBottom: 6 }}>Nume</Text>
				<TextInput value={guestName} onChangeText={setGuestName} placeholder="Ex: Ana Pop" style={{ borderWidth: 1, borderColor: colors.separator, borderRadius: radius.md, padding: spacing.md }} />
			</Card>

			<Card>
				<Text style={{ fontSize: typography.subtitle, fontWeight: '700', marginBottom: spacing.md }}>Proprietate</Text>
				<View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm }}>
					{properties.map(p => (
						<Chip key={p.id} label={p.name} />
					))}
				</View>
				<View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm, marginTop: spacing.sm }}>
					{properties.map(p => (
						<Button key={p.id} title={propertyId === p.id ? 'Selectat' : 'Selectează'} type={propertyId === p.id ? 'primary' : 'ghost'} onPress={() => setPropertyId(p.id)} />
					))}
				</View>
			</Card>

			<Card>
				<Text style={{ fontSize: typography.subtitle, fontWeight: '700', marginBottom: spacing.md }}>Perioadă</Text>
				<Row left={<Text style={{ color: colors.textMuted }}>Check-in</Text>} />
				<TextInput value={checkIn} onChangeText={setCheckIn} placeholder="YYYY-MM-DD" style={{ borderWidth: 1, borderColor: colors.separator, borderRadius: radius.md, padding: spacing.md, marginBottom: spacing.md }} />
				<Row left={<Text style={{ color: colors.textMuted }}>Check-out</Text>} />
				<TextInput value={checkOut} onChangeText={setCheckOut} placeholder="YYYY-MM-DD" style={{ borderWidth: 1, borderColor: colors.separator, borderRadius: radius.md, padding: spacing.md }} />
			</Card>

			<Card>
				<Text style={{ fontSize: typography.subtitle, fontWeight: '700', marginBottom: spacing.md }}>Stare și preț</Text>
				<View style={{ flexDirection: 'row', gap: spacing.sm, marginBottom: spacing.md }}>
					<Button title="Confirmată" type={status === 'confirmed' ? 'primary' : 'ghost'} onPress={() => setStatus('confirmed')} />
					<Button title="În așteptare" type={status === 'pending' ? 'primary' : 'ghost'} onPress={() => setStatus('pending')} />
					<Button title="Anulată" type={status === 'cancelled' ? 'primary' : 'ghost'} onPress={() => setStatus('cancelled')} />
				</View>
				<Text style={{ color: colors.textMuted, marginBottom: 6 }}>Total (RON)</Text>
				<TextInput value={total} onChangeText={setTotal} keyboardType="numeric" placeholder="0" style={{ borderWidth: 1, borderColor: colors.separator, borderRadius: radius.md, padding: spacing.md }} />
			</Card>

			<Button title="Salvează" icon="save-outline" onPress={save} />
		</ScrollView>
	);
}