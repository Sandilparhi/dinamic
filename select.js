function selectquery(data, table, value) {
    let tablekeys = "", values = "";
    tablekey = data.join(' ');

    for (key in value) {
      if (typeof value[key] == 'number') {
        values += `${key} = ${value[key]} `;
      }
      else if (typeof value[key] == 'string') {

        values += `${key} = '${value[key]}' `;
      }
    
    }
    values = values.substring();

    var A = `select ${tablekeys} from  ${table} where ${values};`
    console.log(A);
  }
  selectquery(['id', 'name'],
    "DB", { id: 01, empname: " Sandil parhi " })
  