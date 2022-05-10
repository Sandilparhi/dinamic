
function queryFunc(table, data, condition)
{
   var qry = `UPDATE ${table}`;
   var A= " SET ";
   var B= [];
   for (const key in data) {
       if (typeof data[key] == "string") {
           B.push(key + " = '" + data[key] + "'");
       } else {
           B.push(key + " = " + data[key] + "");
       }
   }
   A+= B.join();
   qry += A;

   var d = " WHERE ";
   var c = [];
   for (const key in condition) {
       if (typeof condition[key] == "string") {
           c.push(key + " = '" + condition[key] + "'");
       } else {
           c.push(key + " = " + condition[key]);
       }
   }
   c.join(" AND ");
   d += c.join(" AND ");
   qry += d;
   return qry;
}

const table = "employee_table"
const data = {
    "empName ": "sandil",
    "empAge": 25,
    "empDesignation": "software engineer",
    "empSalary": 400000,
}

var condition = {
    id : 2
}
let generateQuery = queryFunc(table, data, condition)
console.log("generateQuery==>", generateQuery);