import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import dayjs from '@/lib/dayjs';
import { messages } from '../data/mock';
import { useThemeColors, spacing, typography } from '../theme/theme';
import { Card, Chip } from '../components/ui';

export default function InboxScreen() {
	const colors = useThemeColors();
	return (
		<ScrollView style={{ flex: 1, backgroundColor: colors.background }} contentContainerStyle={{ padding: spacing.lg, gap: spacing.md }}>
			<Text style={{ fontSize: 28, fontWeight: '800' }}>Inbox</Text>
			{messages.map(m => (
				<Card key={m.id}>
					<View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
						<Text style={{ fontSize: typography.subtitle, fontWeight: '700' }}>{m.subject}</Text>
						<Chip label={m.channel} />
					</View>
					<Text style={{ color: colors.textMuted, marginTop: 4 }}>{m.from}</Text>
					<Text style={{ marginTop: 6 }}>{m.preview}</Text>
					<Text style={{ marginTop: 6, color: colors.textMuted, fontSize: 12 }}>{dayjs(m.time).fromNow()}</Text>
				</Card>
			))}
		</ScrollView>
	);
}