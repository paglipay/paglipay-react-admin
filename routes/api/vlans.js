const router = require("express").Router();
const vlansController = require("../../controllers/vlansController");

var authCheck = require("../../config/middleware/authCheck");
// Matches with "/api/vlans"
router.route("/")
  .get(authCheck, vlansController.findAll)
  .post(vlansController.create);

// Matches with "/api/vlans/:id"
router
  .route("/:id")
  .get(vlansController.findById)
  .put(vlansController.update)
  .delete(vlansController.remove);

module.exports = router;
