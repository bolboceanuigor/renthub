import React from 'react';
import { View, Text, TouchableOpacity, ViewStyle, TextStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useThemeColors, spacing, radius, typography } from '../theme/theme';

export function Card(props: { children?: React.ReactNode; style?: ViewStyle }) {
	const colors = useThemeColors();
	return (
		<View style={{ backgroundColor: colors.surface, borderRadius: radius.lg, padding: spacing.lg, borderWidth: 1, borderColor: colors.separator, shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 10 }}>
			{props.children}
		</View>
	);
}

export function Row(props: { left?: React.ReactNode; right?: React.ReactNode; style?: ViewStyle }) {
	const colors = useThemeColors();
	return (
		<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: spacing.sm }}>
			<View style={{ flexShrink: 1 }}>{props.left}</View>
			<View>{props.right}</View>
		</View>
	);
}

export function Chip(props: { label: string; color?: string }) {
	const colors = useThemeColors();
	return (
		<View style={{ backgroundColor: (props.color ?? colors.background), borderColor: colors.separator, borderWidth: 1, borderRadius: 999, paddingHorizontal: spacing.md, paddingVertical: spacing.xs }}>
			<Text style={{ color: colors.textMuted, fontSize: typography.small }}>{props.label}</Text>
		</View>
	);
}

export function Button(props: { title: string; onPress?: () => void; icon?: keyof typeof Ionicons.glyphMap; type?: 'primary' | 'ghost'; style?: ViewStyle; textStyle?: TextStyle }) {
	const colors = useThemeColors();
	const isGhost = props.type === 'ghost';
	return (
		<TouchableOpacity onPress={props.onPress} activeOpacity={0.8} style={[{ flexDirection: 'row', gap: 8, alignItems: 'center', justifyContent: 'center', paddingVertical: spacing.md, paddingHorizontal: spacing.lg, borderRadius: radius.md, backgroundColor: isGhost ? 'transparent' : colors.primary, borderWidth: isGhost ? 1 : 0, borderColor: colors.separator }, props.style]}>
			{props.icon && <Ionicons name={props.icon} size={18} color={isGhost ? colors.text : '#fff'} />}
			<Text style={[{ color: isGhost ? colors.text : '#fff', fontSize: 16, fontWeight: '600' }, props.textStyle]}>{props.title}</Text>
		</TouchableOpacity>
	);
}

export function StatCard(props: { title: string; value: string; trend?: string; icon?: keyof typeof Ionicons.glyphMap; color?: string }) {
	const colors = useThemeColors();
	return (
		<Card>
			<Row left={<Text style={{ fontSize: typography.small, color: colors.textMuted }}>{props.title}</Text>} right={props.icon ? <Ionicons name={props.icon} size={20} color={props.color ?? colors.primary} /> : undefined} />
			<Text style={{ fontSize: 28, fontWeight: '700', color: colors.text }}>{props.value}</Text>
			{props.trend && <Text style={{ marginTop: 4, color: (props.trend.startsWith('+') ? colors.success : colors.error) }}>{props.trend}</Text>}
		</Card>
	);
}