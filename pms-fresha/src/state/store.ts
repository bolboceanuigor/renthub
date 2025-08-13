import { create } from 'zustand';
import dayjs from '@/lib/dayjs';
import { bookings as seedBookings, properties as seedProperties, messages as seedMessages, tasks as seedTasks, Booking, Property, Message, Task } from '../data/mock';

export type AppState = {
	bookings: Booking[];
	properties: Property[];
	messages: Message[];
	tasks: Task[];
	addBooking: (booking: Booking) => void;
	updateTaskStatus: (taskId: string, status: Task['status']) => void;
	getTodaysArrivals: () => Booking[];
	getTodaysDepartures: () => Booking[];
	getOccupancy: () => number;
	getRevenueThisMonth: () => number;
};

export const useAppStore = create<AppState>((set, get) => ({
	bookings: seedBookings,
	properties: seedProperties,
	messages: seedMessages,
	tasks: seedTasks,
	addBooking: (booking) => set((s) => ({ bookings: [booking, ...s.bookings] })),
	updateTaskStatus: (taskId, status) => set((s) => ({ tasks: s.tasks.map(t => t.id === taskId ? { ...t, status } : t) })),
	getTodaysArrivals: () => get().bookings.filter(b => dayjs(b.checkIn).isSame(dayjs(), 'day')),
	getTodaysDepartures: () => get().bookings.filter(b => dayjs(b.checkOut).isSame(dayjs(), 'day')),
	getOccupancy: () => {
		const totalUnits = get().properties.length;
		if (totalUnits === 0) return 0;
		const occupiedToday = get().bookings.filter(b => dayjs().isAfter(dayjs(b.checkIn)) && dayjs().isBefore(dayjs(b.checkOut))).length;
		return Math.round((occupiedToday / totalUnits) * 100);
	},
	getRevenueThisMonth: () => {
		const start = dayjs().startOf('month');
		const end = dayjs().endOf('month');
		return get().bookings.filter(b => dayjs(b.checkIn).isBetween(start, end, null, '[]')).reduce((sum, b) => sum + b.total, 0);
	}
}));