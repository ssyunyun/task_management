
const CharacterSchema = {
    name: "Character",
    primaryKey: "id",
    properties: {
        id: "int",
        name: "string",
        sex: "int"
    }
};

console.log("CharacterSchema出力");
console.log(CharacterSchema);



export default SchemaList = [CharacterSchema];