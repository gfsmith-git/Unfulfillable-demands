export default {
	Load_Page: async () => {
		await remove_fulfillable_lines.run();
		await get_unfulfillable_demands.run();
	}
}