(function () {

	var utils = {};

	utils.getBigThumbnailUrl = function (n) {

		var id = ('0000' + n).slice(-4).replace(/(057[54])/, '0$1');
		return 'https://onepiece-treasurecruise.com/wp-content/uploads/c' + id + '.png';

	}
	window.Utils = utils;
})();
