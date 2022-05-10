function queryFunc(table, data) {
    let A = []
    for (let x of Object.keys(data)) {
         A.push(x)
    }
    let B = A.join(', ')
    console.log(B);
    let tab0 = `insert into ${table}(${B}) `
    let tab1 = `values(`
    let tab2 = ``;
    let tab3 = ')';
    for (let i of Object.values(data)) {
        if (!isNaN(i)) {
            tab2 += `${i},`
        } else if (i === true || i === false) {
            tab2 += `${i},`
        }
        else {
            tab2 += `"${i}",`
        }
    }
    tab2 = tab2.slice(0, -1);
    const tab = `${tab0}${tab1}${tab2}${tab3}`;
    console.log(tab, 'successful');
}
const table = "employee_table"
const data = {
   
    "employeeName": "sandilparhi",
    "designation": "backend developer",
    "empAge": 25,
    "salary": 200000,
    "type": true
}
let generateQuery = queryFunc(table, data)
console.log("generateQuery==>", generateQuery);