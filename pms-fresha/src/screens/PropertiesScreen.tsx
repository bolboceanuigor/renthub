import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import { properties } from '../data/mock';
import { useThemeColors, spacing, typography, radius } from '../theme/theme';
import { Card, Row, Chip } from '../components/ui';

export default function PropertiesScreen() {
	const colors = useThemeColors();
	return (
		<ScrollView style={{ flex: 1, backgroundColor: colors.background }} contentContainerStyle={{ padding: spacing.lg, gap: spacing.md }}>
			<Text style={{ fontSize: 28, fontWeight: '800' }}>Proprietăți</Text>
			{properties.map(p => (
				<Card key={p.id}>
					<Image source={{ uri: p.image }} style={{ height: 140, borderRadius: radius.md, marginBottom: spacing.md }} />
					<Row left={<Text style={{ fontSize: typography.subtitle, fontWeight: '700' }}>{p.name}</Text>} right={<Chip label={`${p.beds} bd • ${p.baths} ba`} />} />
					<Text style={{ color: colors.textMuted }}>{p.address}</Text>
				</Card>
			))}
		</ScrollView>
	);
}