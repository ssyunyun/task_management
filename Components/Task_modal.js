import React from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Alert,
    RefreshControlBase,
} from 'react-native';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Modal from "react-native-modal";
import DAO from "../models/DAO"

import { useEffect, useState, useMemo, useCallback } from "react";

function Task_modal(props) {

    const [taskNameValue, setTaskNameValue] = useState(props.modalDiscription_.taskName);
    const [taskMemoValue, setTaskMemoValue] = useState(props.modalDiscription_.taskMemo);

    const [doWbuttonColor, setDoWbuttonColor] = useState(
        {
            Mon: props.modalDiscriptionDoW_.Mon,
            Tue: props.modalDiscriptionDoW_.Tue,
            Wed: props.modalDiscriptionDoW_.Wed,
            Thu: props.modalDiscriptionDoW_.Thu,
            Fri: props.modalDiscriptionDoW_.Fri,
            Sat: props.modalDiscriptionDoW_.Sat,
            Sun: props.modalDiscriptionDoW_.Sun,
        }
    )

    const [tmpValue, setTmpValue] = useState('');

    const changebuttonColor = (doW) => {

        switch (doW) {

            case 'Mon':
                if (doWbuttonColor.Mon == 'cyan') {
                    setDoWbuttonColor({ ...doWbuttonColor, Mon: 'yellow' })
                } else {
                    setDoWbuttonColor({ ...doWbuttonColor, Mon: 'cyan' })
                }
                break

            case 'Tue':
                if (doWbuttonColor.Tue == 'cyan') {
                    setDoWbuttonColor({ ...doWbuttonColor, Tue: 'yellow' })
                } else {
                    setDoWbuttonColor({ ...doWbuttonColor, Tue: 'cyan' })
                }
                break

            case 'Wed':
                if (doWbuttonColor.Wed == 'cyan') {
                    setDoWbuttonColor({ ...doWbuttonColor, Wed: 'yellow' })
                } else {
                    setDoWbuttonColor({ ...doWbuttonColor, Wed: 'cyan' })
                }
                break

            case 'Thu':
                if (doWbuttonColor.Thu == 'cyan') {
                    setDoWbuttonColor({ ...doWbuttonColor, Thu: 'yellow' })
                } else {
                    setDoWbuttonColor({ ...doWbuttonColor, Thu: 'cyan' })
                }
                break

            case 'Fri':
                if (doWbuttonColor.Fri == 'cyan') {
                    setDoWbuttonColor({ ...doWbuttonColor, Fri: 'yellow' })
                } else {
                    setDoWbuttonColor({ ...doWbuttonColor, Fri: 'cyan' })
                }
                break

            case 'Sat':
                if (doWbuttonColor.Sat == 'cyan') {
                    setDoWbuttonColor({ ...doWbuttonColor, Sat: 'yellow' })
                } else {
                    setDoWbuttonColor({ ...doWbuttonColor, Sat: 'cyan' })
                }
                break

            case 'Sun':
                if (doWbuttonColor.Sun == 'cyan') {
                    setDoWbuttonColor({ ...doWbuttonColor, Sun: 'yellow' })
                } else {
                    setDoWbuttonColor({ ...doWbuttonColor, Sun: 'cyan' })
                }
                break
        }

    }

    return (
        <>
            {console.log("Modals!!!!!!!!")}

            <Modal
                isVisible={props.modalVisible_}
                animationIn='slideInDown'
                animationInTiming={5}
                animationOut='fadeOut'
                animationOutTiming={1}
                avoidKe
                yboard={true}
                onBackButtonPress={() => props.setModalVisible_false_(true)}
            >
                <View style={styles.modal_View}>

                    <View style={styles.taskTitle}>
                        <TextInput style={styles.taskTitle_text}
                            multiline={true}
                            placeholder="タイトル"
                            defaultValue={props.modalDiscription_.taskName}
                            onChangeText={(text) => setTaskNameValue(text)}
                        />
                    </View>

                    <View style={styles.doW_View}>
                        <TouchableOpacity
                            style={styles.doW_button_Mon(doWbuttonColor)}
                            onPress={() => changebuttonColor('Mon')}>
                            <Text style={styles.doW_text}>
                                月
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.doW_button_Tue(doWbuttonColor)}
                            onPress={() => changebuttonColor('Tue')}>
                            <Text style={styles.doW_text}>
                                火
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.doW_button_Wed(doWbuttonColor)}
                            onPress={() => changebuttonColor('Wed')}>
                            <Text style={styles.doW_text}>
                                水
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.doW_button_Thu(doWbuttonColor)}
                            onPress={() => changebuttonColor('Thu')}>
                            <Text style={styles.doW_text}>
                                木
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.doW_button_Fri(doWbuttonColor)}
                            onPress={() => changebuttonColor('Fri')}>
                            <Text style={styles.doW_text}>
                                金
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.doW_button_Sat(doWbuttonColor)}
                            onPress={() => changebuttonColor('Sat')}>
                            <Text style={styles.doW_text}>
                                土
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.doW_button_Sun(doWbuttonColor)}
                            onPress={() => changebuttonColor('Sun')}>
                            <Text style={styles.doW_text}>
                                日
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.textInput_View}>
                        <TextInput style={styles.TextInput}
                            multiline={true}
                            placeholder="メモ"
                            defaultValue={props.modalDiscription_.taskMemo}
                            onChangeText={(text) => setTaskMemoValue(text)}
                        />
                    </View>

                    <View style={styles.button_View}>

                        {props.modalType_ === 'update' ?
                            <TouchableOpacity
                                style={styles.button}
                                underlayColor="#fff"
                                onPress={async () => {
                                    let kojikoji = await connectTable('delete', props.modalDiscription_.id, taskNameValue, doWbuttonColor, taskMemoValue)
                                    props.changeTable_()
                                    props.setModalVisible_false_(kojikoji)
                                }}>
                                <Text >
                                    削除
                                    </Text>
                            </TouchableOpacity>
                            : <TouchableOpacity
                                style={styles.button}
                                underlayColor="#fff"
                                onPress={() => props.setModalVisible_false_(true)}>
                                <Text >
                                    取消
                                </Text>
                            </TouchableOpacity>
                        }

                        <TouchableOpacity
                            style={styles.button}
                            underlayColor="#fff"
                            onPress={async () => {

                                let kojikoji
                                if (props.modalType_ === 'update') {
                                    kojikoji = await connectTable('update', props.modalDiscription_.id, taskNameValue, doWbuttonColor, taskMemoValue)
                                } else if (props.modalType_ === 'create') {
                                    kojikoji = await connectTable('create', null, taskNameValue, doWbuttonColor, taskMemoValue, props.taskLength_)
                                }
                                props.changeTable_()
                                props.setModalVisible_false_(kojikoji)
                            }
                            }>
                            <Text >
                                決定
                        </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </>
    );

}

const connectTable = async (operation, id, taskNameValue, doWbuttonColor, taskMemoValue, sortableNumValue = null) => {

    if (operation === 'read') {

        readItems = await DAO.read("Task");
        readItemsMapped = readItems.map(
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

    else if (operation === 'create') {

        if (taskNameValue === '') {
            Alert.alert('タイトルを入力してください')

            return false

        } else {
            const data = {
                taskName: taskNameValue,
                taskMemo: taskMemoValue,
                doW: doWbuttonColor,
                sortableNum: sortableNumValue
            }

            await DAO.create("Task", data);

            return true
        }

    } else if (operation === 'update') {
        await DAO.update("Task", Number(id), "taskName", taskNameValue);
        await DAO.update("Task", Number(id), "doW", doWbuttonColor);
        await DAO.update("Task", Number(id), "taskMemo", taskMemoValue);

        return true

    } else if (operation === 'delete') {

        // await DAO.delete("Task", Number(id), "id");
        await DAO.delete("Task", "id", Number(id));

        return true
    }

}

const styles = StyleSheet.create({
    modal_View: {
        alignItems: 'center',
        backgroundColor: "white",
        height: hp('50%'),
        borderRadius: 30,
    },
    taskTitle: {
        width: '100%',
        height: '20%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        // backgroundColor: 'red'
    },
    taskTitle_text: {
        fontSize: hp('3%')
    },
    doW_View: {
        width: '100%',
        height: '25%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'row',
        // backgroundColor: 'purple',
    },
    doW_button_Mon: (doWbuttonColor) => ({
        borderWidth: 1,
        width: '13%',
        height: '50%',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: doWbuttonColor.Mon,
    }),
    doW_button_Tue: (doWbuttonColor) => ({
        borderWidth: 1,
        width: '13%',
        height: '50%',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: doWbuttonColor.Tue,
    }),
    doW_button_Wed: (doWbuttonColor) => ({
        borderWidth: 1,
        width: '13%',
        height: '50%',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: doWbuttonColor.Wed,
    }),
    doW_button_Thu: (doWbuttonColor) => ({
        borderWidth: 1,
        width: '13%',
        height: '50%',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: doWbuttonColor.Thu,
    }),
    doW_button_Fri: (doWbuttonColor) => ({
        borderWidth: 1,
        width: '13%',
        height: '50%',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: doWbuttonColor.Fri,
    }),
    doW_button_Sat: (doWbuttonColor) => ({
        borderWidth: 1,
        width: '13%',
        height: '50%',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: doWbuttonColor.Sat,
    }),
    doW_button_Sun: (doWbuttonColor) => ({
        borderWidth: 1,
        width: '13%',
        height: '50%',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: doWbuttonColor.Sun,
    }),
    doW_text: {
        fontSize: hp('3%')
    },
    textInput_View: {
        width: '90%',
        height: '25%',
        backgroundColor: 'cyan',
        justifyContent: 'flex-start',
    },
    button_View: {
        width: '100%',
        height: '30%',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        // backgroundColor: 'white',
    },
    button: {
        borderWidth: 1,
        width: '30%',
        height: '50%',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lawngreen',
    }
});

export default Task_modal;

