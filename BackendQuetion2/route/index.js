const express = require("express");
const router = express.Router();

router.get("/:numberid", async (req, res) => {
  try {
    const ans = {
      windowPrevState: [],
      windowCurrentState: [],
      numbers: [],
      average: 0,
    };

    return res.status(200).json(ans);
  } catch (error) {
    return res.status(501).json({ msg: error.message });
  }
});

module.exports = router;
