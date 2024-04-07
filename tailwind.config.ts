module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./src/**/*.{js,ts,jsx,tsx}',
		'./app/**/*.{js,ts,jsx,tsx}'
	],
	corePlugins: {
		preflight: false
	},
	important: true,
	plugins: [],
	theme: {
		extend: {
			backgroundImage: {
				'delegation-info-background': 'url("/assets/icons/delegation-info-background.svg")',
				'delegator-profile-background': 'url("/assets/icons/delegator-profile-background.svg")',
				'delegator-profile-background-curves': 'url("/assets/icons/delegator-profile-background-curves.svg")',
				'delegator-profile-background-curves2': 'url("/assets/icons/profile/delegator-profile-background-curves2.svg")'
			},
			colors: {
				app_background: 'var(--app_background)',
				app_dark_background: 'var(--app_dark_background)',
				bg_secondary: 'var(--bg_secondary)',
				blue_notification: 'var(--blue_notification)',
				blue_primary: 'var(--blue_primary)',
				blue_secondary: 'var(--blue_secondary)',
				blue_status: 'var(--blue_status)',
				dark_blue_primary: 'var(--dark_blue_primary)',
				dark_blue_secondary: 'var(--dark_blue_secondary)',
				dark_grey:'var(--dark_grey)',
				dark_grey_primary: 'var(--dark_grey_primary)',
				dark_grey_tertiary:'var(--dark_grey_tertiary)',
				green_notification: 'var(--green_notification)',
				green_primary: 'var(--green_primary)',
				green_secondary: 'var(--green_secondary)',
				green_status: 'var(--green_status)',
				grey_light: 'var(--grey_light)',
				grey_primary: 'var(--grey_primary)',
				grey_secondary: 'var(--grey_secondary)',
				grey_tertiary: 'var(--grey_tertiary)',
				light_blue_primary: 'var(--light_blue_primary)',
				light_blue_secondary: 'var(--light_blue_secondary)',
				light_grey_fourth: 'var(--light_grey_fourth)',
				light_grey_primary:'var(--light_grey_primary)',
				light_grey_secondary: 'var(--light_grey_secondary)',
				light_grey_tertiary: 'var(--light_grey_tertiary)',
				purple_primary: 'var(--purple_primary)',
				red_notification: 'var(--red_notification)',
				red_primary: 'var(--red_primary)',
				red_status: 'var(--red_status)',
				yellow_notification: 'var(--yellow_notification)',
				yellow_primary: 'var(--yellow_primary)',
				yellow_secondary: 'var(--yellow_secondary)',
				yellow_status: 'var(--yellow_status)'
			},
			fontFamily: {
				poppins: ['var(--font-montserrat)']
			}
		}
	}
};
