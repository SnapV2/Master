const sql = require("./db.js");

const findAll = (result) => {
  sql.query(
      `SELECT *  FROM us_project us 
          WHERE project_latitude IS NOT NULL 
          AND project_longitude IS NOT NULL `
, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("us_project: ", res);
    result(null, res);
  });
};

module.exports = findAll;
