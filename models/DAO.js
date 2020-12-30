import { open } from "realm";

const Realm = require("realm");


const CharacterSchema = {
    name: "Character",
    primaryKey: "id",
    properties: {
        id: "int",
        name: "string",
        sex: "int"
    }
};

const SchemaList = [CharacterSchema]

export default class DAO 
{
    static async clear() {
        let config = Realm.Configuration

    }

    static async getClient(){
        const realm = await Realm.open({
            path: "Character.realm",
            schema: SchemaList,
            schemaVersion: 2
        });
        return realm;
    }


    static async create(schema, data) {
        const realm = await this.getClient();
        const allItem = await this.read(schema);
        if (allItem.length === 0) {
            const id = 0;
            data.id = id;
        } else {
            const id = allItem.reduce((a,b) => a.id > b.id ? a : b).id;
            data.id = id + 1;
        }
        
        try {
            realm.write(() => {
                realm.create(schema, data);
            });
            return data;
        } catch(err) {
            throw new Error( "Bad insert data" );
        }
    }

    static async update(schema, id, key, value) {
        const realm = await this.getClient();
        let target = await this.read(schema, "id", id);
        if (target.length === 1) {
            try {
                realm.write(() => {
                    let target = realm.objectForPrimaryKey(schema, id);
                    target[key] = value;
                });
                return target;
            } catch(err) {
                throw new Error( "Bad update request" );
            }
        } else {
            return {result: false, data: target}
        }
        
    }


    static async read(schema, key=null, value=null) {
        const realm = await this.getClient();
        let items = realm.objects(schema);
        if (key != null){
            items = items.filter(item => item[key] === value);
        }
        return items;
    }

    static async delete(schema, key=null, value=null) {
        const realm = await this.getClient();
        let target = await this.read(schema, key, value);

        try {
            realm.write(() => {
                realm.delete(target);
            });
        } catch(err) {
            throw new Error( "Bad delete request" );       
        }
        
        return await this.read(schema, key, value);
    }
}