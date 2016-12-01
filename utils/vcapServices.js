/**
 * http://usejsdoc.org/
 */


var vcapServices ;
var vcapServices = JSON.parse(process.env.VCAP_SERVICES);

module.exports = vcapServices;