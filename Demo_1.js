import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Image,
    Button,
    TouchableOpacity,
    Alert,
    FlatList
} from 'react-native';
import { useEffect, useState } from "react";
import DAO from "./models/DAO"

const connectTable = async (operate) => {

    /** operate ******
    * 1. read
    * 2. insert
    * 3. update
    * 4. delete
    * ****************/

    if (operate == 1) {
        console.log("read処理");
        let readItems = await DAO.read("Task");
        let readItemsMapped = readItems.map(
            (item) => {
                return {
                    id: String(item.id),
                    taskName: item.taskName,
                    taskMemo: item.taskMemo,
                    doW: item.doW
                }
            }
        );

        return readItemsMapped
    }
    else if (operate == 2) {

        const data = {
            taskName: "ジム行く",
            taskMemo: "こじこじジム。朝10時。",
            doW: {
                Mon: 'cyan',
                The: 'cyan',
                Wed: 'cyan',
                Thu: 'cyan',
                Fri: 'cyan',
                Sat: 'cyan',
                Sun: 'cyan'
            }
        }

        console.log("create処理");
        await DAO.create("Task", data);
    } else if (operate == 3) {
        await DAO.update("Task", 0, "taskName", "kojiruri");
    } else if (operate == 4) {
        await DAO.delete("Task");
    }

}



function Demo_1() {


    console.log('Realm_schemaVersion : ')
    console.log(Realm.schemaVersion(Realm.defaultPath))

    const [task, setTask] = useState(null)
    const [tmp, setTmp] = useState([])
    const [data, setData] = useState(null)

    const tmp_ = (items) => {
        console.log(items)
        setTmp(items)
        console.log(tmp)
    }

    useEffect(() => {
        connectTable(1).then((tmp) => setTask(tmp))
    }, [])

    if (task === null) {
        return (
            <>
                <Text>Loading...</Text>
            </>
        )
    }
    else if (task !== null) {
        return (
            <>
                <Text>{task.length}</Text>

                <FlatList
                    data={task}
                    renderItem={({item}) =>
                      <Text>{item.name}</Text>
                  }
                    keyExtractor={item => item.id}
                />

                <TouchableOpacity
                    underlayColor="#fff"
                    onPress={() => connectTable(3)}
                    style={{
                        borderWidth: 1,
                        width: '100%',
                        height: '10%',
                        borderRadius: 5,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'lawngreen',
                    }}
                >

                    <Text>
                        create
                </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    underlayColor="#fff"
                    onPress={() => connectTable(4)}
                    style={{
                        borderWidth: 1,
                        width: '100%',
                        height: '10%',
                        borderRadius: 5,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'cyan',
                    }}
                >
                    <Text>
                        delete
                </Text>
                </TouchableOpacity>

                {console.log('task_2 :')}
                {console.log(task)}
            </>
        )
    }
}


export default Demo_1;
