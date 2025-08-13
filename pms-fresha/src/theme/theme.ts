export type AppColors = {
	primary: string;
	background: string;
	surface: string;
	text: string;
	textMuted: string;
	separator: string;
	success: string;
	warning: string;
	error: string;
};

export const lightColors: AppColors = {
	primary: '#2A6EF0',
	background: '#F7F8FA',
	surface: '#FFFFFF',
	text: '#0B1220',
	textMuted: '#6B7280',
	separator: '#E5E7EB',
	success: '#16A34A',
	warning: '#D97706',
	error: '#DC2626',
};

export function useThemeColors() {
	return lightColors;
}

export const spacing = {
	xs: 6,
	sm: 10,
	md: 16,
	lg: 20,
	xl: 28,
	xxl: 36,
};

export const radius = {
	sm: 8,
	md: 12,
	lg: 16,
	xl: 20,
};

export const typography = {
	title: 24,
	subtitle: 18,
	body: 16,
	small: 13,
};