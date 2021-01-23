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
    const [buttonCalor, setmemobuttonCalor] = React.useState('blue');

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
            <View style={styles.Modal_View}>

                <View style={styles.TaskTitle}>
                    <Text style={styles.TaskTitle_text}>
                        {props.modalName_}
                    </Text>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    Modal_View: {
        alignItems: 'center',
        backgroundColor: "lightblue",
        height: hp('50%'),
        borderRadius: 30,
    },
    TaskTitle: {
        width: '100%',
        height: '10%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
    },
    TaskTitle_text: {
        fontSize: hp('5%')
    },
    DoW_View: {
        width: '100%',
        height: '30%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'red',
    },
    DoW_button: {
        borderWidth: 1,
        width: '13%',
        height: '50%',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'purple',
    },
    DoW_text: {
        fontSize: hp('3%')
    },
    TextInput_View: {
        width: '90%',
        height: '25%',
        backgroundColor: 'blue',
        justifyContent: 'flex-start',
    },
    Button_View: {
        width: '100%',
        height: '30%',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'white',
    },
    Button: {
        borderWidth: 1,
        width: '30%',
        height: '50%',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'purple',
    }
});

export default Task_modal;

