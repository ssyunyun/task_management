import React from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Modal from "react-native-modal";

function Task_modal(props) {

    const [memoValue, setmemoValue] = React.useState('');

    const [doWbuttonColor, setDoWbuttonColor] = React.useState({
        Mon: 'cyan',
        Tue: 'cyan',
        Wed: 'cyan',
        Thu: 'cyan',
        Fri: 'cyan',
        Sat: 'cyan',
        Sun: 'cyan'
    })

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
        <Modal
            isVisible={props.modalVisible_}
            animationIn='fadeIn'
            animationInTiming={1}
            animationOut='fadeOut'
            animationOutTiming={1}
            avoidKeyboard={true}
            onBackButtonPress={() => props.setModalVisible_false_()}
        >
            <View style={styles.modal_View}>

                <View style={styles.taskTitle}>
                    <Text style={styles.taskTitle_text}>
                        {props.modalName_}
                    </Text>
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
                        defaultValue='' // DBから取得
                        onChangeText={(text) => setmemoValue(text)} // DBの更新(memoValue)
                    />
                </View>

                <View style={styles.button_View}>
                    <TouchableOpacity
                        style={styles.button}
                        underlayColor="#fff"
                        onPress={() => props.setModalVisible_false_()}>
                        <Text >
                            取消
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        underlayColor="#fff"
                        onPress={() => props.setModalVisible_false_()}>
                        <Text >
                            決定
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
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
        height: '10%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderRadius: 30,
    },
    taskTitle_text: {
        fontSize: hp('5%')
    },
    doW_View: {
        width: '100%',
        height: '30%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        // backgroundColor: 'red',
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

