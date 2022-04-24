import { writable } from 'svelte/store';

export const STATES = {
	rating: 'rating',
	thankyou: 'thankyou'
};

export const state = writable(STATES.rating);

export const rating = writable(0);
