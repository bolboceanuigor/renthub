import React from 'react';
import { ScrollView, View, Text, Switch } from 'react-native';
import { useThemeColors, spacing, typography } from '../theme/theme';
import { Card, Row, Button, Chip } from '../components/ui';

export default function SettingsScreen() {
	const colors = useThemeColors();
	const [autoMessages, setAutoMessages] = React.useState(true);
	return (
		<ScrollView style={{ flex: 1, backgroundColor: colors.background }} contentContainerStyle={{ padding: spacing.lg, gap: spacing.md }}>
			<Text style={{ fontSize: 28, fontWeight: '800' }}>Setări</Text>
			<Card>
				<Text style={{ fontSize: typography.subtitle, fontWeight: '700', marginBottom: spacing.md }}>Canale</Text>
				<View style={{ flexDirection: 'row', gap: spacing.md }}>
					<Chip label="Airbnb" />
					<Chip label="Booking" />
					<Chip label="Vrbo" />
				</View>
				<Button title="Conectează alt canal" type="ghost" icon="link-outline" style={{ marginTop: spacing.md }} />
			</Card>
			<Card>
				<Text style={{ fontSize: typography.subtitle, fontWeight: '700', marginBottom: spacing.md }}>Plăți</Text>
				<Row left={<Text>Stripe</Text>} right={<Button title="Configurează" type="ghost" icon="card-outline" />} />
			</Card>
			<Card>
				<Text style={{ fontSize: typography.subtitle, fontWeight: '700', marginBottom: spacing.md }}>Mesaje automate</Text>
				<Row left={<Text>Activează mesaje auto</Text>} right={<Switch value={autoMessages} onValueChange={setAutoMessages} />} />
				<Button title="Editează template-uri" type="ghost" icon="create-outline" style={{ marginTop: spacing.md }} />
			</Card>
		</ScrollView>
	);
}