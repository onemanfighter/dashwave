var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "srv1257.hstgr.io",
  user: "u392139545_amit_dashboard",
  password: "AMITrai@8756",
  database: "u392139545_amit_expenses",
});

export const sql = () => {
  connection.connect();

  connection.query(
    "SELECT 1 + 1 AS solution",
    function (error: any, results: { solution: any }[], fields: any) {
      if (error) throw error;
      console.log("The solution is: ", results[0].solution);
    }
  );

  connection.end();
};
