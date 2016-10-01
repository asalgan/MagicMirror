/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 */

var config = {
	port: 8080,
	language: 'en',
	timeFormat: 24,
	units: 'imperial',

	modules: [
		{
			module: 'alert'
		},
		{
			module: 'clock',
			position: 'top_left'
		},
		{
			module: 'calendar',
			header: 'US Holidays',
			position: 'top_left',
			config: {
				calendars: [
					{
						symbol: 'calendar-check-o',
						url: 'webcal://www.calendarlabs.com/templates/ical/US-Holidays.ics'
					}
				]
			}
		},
		{
			module: 'compliments',
			position: 'lower_third'
		},
		{
			module: 'currentweather',
			position: 'top_right',
			config: {
				location: 'Chicago',
				// locationID: 4887398,  //ID from http://www.openweathermap.org
				appid: '8ec9aa9080c4456a1ab5da3e11342343'
			}
		},
		{
			module: 'weatherforecast',
			position: 'top_right',
			header: 'Weather Forecast',
			config: {
	      location: 'Chicago',
				// locationID: '4887398',  //ID from http://www.openweathermap.org
	      appid: '8ec9aa9080c4456a1ab5da3e11342343'
			}
		},
		{
			module: 'newsfeed',
			position: 'bottom_bar',
			config: {
				feeds: [
					{
						title: 'New York Times',
						url: 'http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml'
					}
				],
				showSourceTitle: true,
				showPublishDate: true
			}
		}
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== 'undefined') {module.exports = config;}
