declare global {
	interface Window {
		remark_config: {
			host: string,
			site_id: string,
			components: string[],
			show_rss_subscription: boolean,
			show_email_subscription: boolean,
			theme: string,
			no_footer: boolean,
		}

		REMARK42: any,
	}
}

export {}
