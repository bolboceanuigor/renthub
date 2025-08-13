import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import dayjs from '@/lib/dayjs';
import { tasks } from '../data/mock';
import { useThemeColors, spacing, typography } from '../theme/theme';
import { Card, Button, Chip } from '../components/ui';

export default function TasksScreen() {
	const colors = useThemeColors();
	return (
		<ScrollView style={{ flex: 1, backgroundColor: colors.background }} contentContainerStyle={{ padding: spacing.lg, gap: spacing.md }}>
			<Text style={{ fontSize: 28, fontWeight: '800' }}>Taskuri</Text>
			{tasks.map(t => (
				<Card key={t.id}>
					<View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
						<Text style={{ fontSize: typography.subtitle, fontWeight: '700' }}>{t.title}</Text>
						<Chip label={t.status.replace('_', ' ')} />
					</View>
					<Text style={{ color: colors.textMuted, marginTop: 4 }}>Asignat: {t.assignee}</Text>
					<Text style={{ marginTop: 6, color: colors.textMuted, fontSize: 12 }}>Termen {dayjs(t.due).fromNow()}</Text>
					<View style={{ flexDirection: 'row', gap: spacing.md, marginTop: spacing.md }}>
						<Button title="Marchează done" type="ghost" icon="checkmark-done-outline" />
						<Button title="Reasignează" type="ghost" icon="swap-horizontal-outline" />
					</View>
				</Card>
			))}
		</ScrollView>
	);
}