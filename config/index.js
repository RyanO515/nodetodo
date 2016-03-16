var configValues = require("./config");

module.exports = {

	getDbConnectionString: function () {
		return 'mongodb://' + configValues.uname + ":" + configValues.pwd + "@ds015909.mlab.com:15909/nodetodoapp";
	}
}

