
const CharacterSchema = {
    name: "Character",
    primaryKey: "id",
    properties: {
        id: "int",
        name: "string",
        sex: "int"
    }
};

const TaskSchema = {
    name: "Task",
    primaryKey: "id",
    properties: {
        id: "int",
        taskName: "string",
        taskMemo: "string",
        doW: "DoW",
        sortableNum: "int"
    }
};

const DoWSchema = {
    name: "DoW",
    properties: {
        Mon: {type: "string", default: 'cyan'},
        Tue: {type: "string", default: 'cyan'},
        Wed: {type: "string", default: 'cyan'},
        Thu: {type: "string", default: 'cyan'},
        Fri: {type: "string", default: 'cyan'},
        Sat: {type: "string", default: 'cyan'},
        Sun: {type: "string", default: 'cyan'},
    }
};


// console.log("CharacterSchema出力");
// console.log(CharacterSchema);



export default SchemaList = [CharacterSchema, TaskSchema, DoWSchema, ];