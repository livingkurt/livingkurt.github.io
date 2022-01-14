export const responsive_font = (
	screen_width: number,
	screen_width_min: number,
	screen_width_max: number,
	viewport_unit: string,
	min_size: string,
	max_size: string
) => {
	if (screen_width >= screen_width_max) {
		return max_size;
	} else if (screen_width <= screen_width_min) {
		return min_size;
	} else if (screen_width <= screen_width_max && screen_width >= screen_width_min) {
		return viewport_unit;
	}
};
