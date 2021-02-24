// server/roles.js
const AccessControl = require("accesscontrol");
const ac = new AccessControl();

exports.roles = (function() {

ac.grant("admin")
 .extend("admin")
 .readAny("profile")
 .updateAny("profile")
 .deleteAny("profile")

return ac;
})();