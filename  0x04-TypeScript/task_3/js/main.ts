/// <reference path="./crud.d.ts" />
import * as CRUD from "./crud.js"
import { RowElement,RowID } from "./interface.js"
let row:RowElement={
    
    firstName: "Guillaume",
    lastName: "Salva"


}
const nowRowID:RowID=CRUD.insertRow(row)
const updateRow:RowElement={ firstName: "Guillaume", lastName: "Salva", age: 23 };
CRUD.updateRow(nowRowID,row)
CRUD.deleteRow(nowRowID)