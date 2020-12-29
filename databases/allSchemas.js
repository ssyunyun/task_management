import Realm from 'realm';
export const DATA_SCHEMA = "DataList";
export const USER_SCHEMA = "UserData";

export const DataSchema = {
    name: DATA_SCHEMA,
    primaryKey: 'id',
    properties: {
        id: 'string',
        genre: 'string',
        word: { type: 'string', indexed: true},
        detail: 'string',
        title: 'string',
        author: 'string',
        memo: 'string',
        isLike: 'bool'
    }
};

export const UserSchema = {
    name: USER_SCHEMA,
    primaryKey: 'id',
    properties: {
        id: 'string',
        name: 'string',
    }
};

const databaseOptions = {
  path: 'testApp.realm',
  schema: [DataSchema,UserSchema],
  schemaVersion: 1,
}


// DataListスキーマにインサート
export const insertNewDataList = newDataList => new Promise((resolve, reject) => {
  Realm.open(databaseOptions).then(realm => {
      realm.write(() => {
        realm.create(DATA_SCHEMA, newDataList);
        resolve(newDataList);
      });
  }).catch((error) => reject(error));
});

// DataListスキーマにアップデート
export const updateDataList = dataList => new Promise((resolve, reject) => {
  Realm.open(databaseOptions).then(realm => {
      realm.write(() => {
          let updatingDataList = realm.objectForPrimaryKey(DATA_SCHEMA,dataList.id);
          updatingDataList.name = dataList.name
          resolve();
      });
  }).catch((error) => reject(error));
});

// DataListスキーマにデリート
export const deleteDataList = dataListId => new Promise((resolve, reject) => {
  Realm.open(databaseOptions).then(realm => {
      realm.write(() => {
          let deletingDataList = realm.objectForPrimaryKey(DATA_SCHEMA,dataListId);
          realm.delete(deletingDataList)
          resolve();
      });
  }).catch((error) => reject(error));
});

// DataListスキーマを全デリート
export const deleteAllDataList = () => new Promise((resolve, reject) => {
  Realm.open(databaseOptions).then(realm => {
      realm.write(() => {
          let allTodoLists = realm.objects(DATA_SCHEMA);
          realm.delete(allTodoLists)
          resolve();
      });
  }).catch((error) => reject(error));
});

// DataListスキーマからセレクト
export const queryAllDataList = () => new Promise((resolve, reject) => {
  Realm.open(databaseOptions).then(realm => {
      let allTodoLists = realm.objects(DATA_SCHEMA);
      resolve(allTodoLists);
  }).catch((error) => reject(error));
});
export default new Realm(databaseOptions);
