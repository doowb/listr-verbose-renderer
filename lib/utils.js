'use strict';
const colors = require('ansi-colors');
const format = require('date-fns/format');

exports.log = (options, output) => {
	if (options.dateFormat === false) {
		console.log(output);
		return;
	}

	const timestamp = format(new Date(), options.dateFormat);

	console.log(colors.dim(`[${timestamp}]`) + ` ${output}`);
};
