import dayjs from '@/lib/dayjs';

export type Property = {
	id: string;
	name: string;
	address: string;
	beds: number;
	baths: number;
	image: string;
};

export type Booking = {
	id: string;
	guestName: string;
	propertyId: string;
	checkIn: string;
	checkOut: string;
	status: 'confirmed' | 'pending' | 'cancelled';
	total: number;
};

export type Message = {
	id: string;
	channel: 'Airbnb' | 'Booking' | 'Vrbo';
	from: string;
	subject: string;
	preview: string;
	time: string;
};

export type Task = {
	id: string;
	title: string;
	assignee: string;
	status: 'open' | 'in_progress' | 'done';
	due: string;
};

export const properties: Property[] = [
	{ id: 'p1', name: 'City Loft', address: 'Str. Libertății 10, București', beds: 2, baths: 1, image: 'https://picsum.photos/seed/loft/600/400' },
	{ id: 'p2', name: 'Seaside Villa', address: 'Bd. Mării 23, Constanța', beds: 4, baths: 3, image: 'https://picsum.photos/seed/villa/600/400' },
	{ id: 'p3', name: 'Mountain Cabin', address: 'Str. Pinilor 8, Brașov', beds: 3, baths: 2, image: 'https://picsum.photos/seed/cabin/600/400' },
];

export const bookings: Booking[] = [
	{ id: 'b1', guestName: 'Ana Pop', propertyId: 'p1', checkIn: dayjs().toISOString(), checkOut: dayjs().add(3, 'day').toISOString(), status: 'confirmed', total: 780 },
	{ id: 'b2', guestName: 'Mihai Ionescu', propertyId: 'p2', checkIn: dayjs().add(1, 'day').toISOString(), checkOut: dayjs().add(5, 'day').toISOString(), status: 'pending', total: 2300 },
	{ id: 'b3', guestName: 'Laura M', propertyId: 'p3', checkIn: dayjs().subtract(2, 'day').toISOString(), checkOut: dayjs().add(1, 'day').toISOString(), status: 'confirmed', total: 1200 },
];

export const messages: Message[] = [
	{ id: 'm1', channel: 'Airbnb', from: 'John (Airbnb)', subject: 'Check-in time?', preview: 'What time can we arrive tomorrow?', time: dayjs().subtract(2, 'hour').toISOString() },
	{ id: 'm2', channel: 'Booking', from: 'Booking.com', subject: 'New reservation', preview: 'You received a new reservation', time: dayjs().subtract(1, 'day').toISOString() },
	{ id: 'm3', channel: 'Vrbo', from: 'Vrbo', subject: 'Payout processed', preview: 'Your payout was processed', time: dayjs().subtract(3, 'day').toISOString() },
];

export const tasks: Task[] = [
	{ id: 't1', title: 'Curățenie City Loft', assignee: 'Andreea', status: 'in_progress', due: dayjs().add(4, 'hour').toISOString() },
	{ id: 't2', title: 'Verificare boiler Villa', assignee: 'Dan', status: 'open', due: dayjs().add(1, 'day').toISOString() },
	{ id: 't3', title: 'Inventar Cabin', assignee: 'Ioana', status: 'done', due: dayjs().subtract(1, 'day').toISOString() },
];