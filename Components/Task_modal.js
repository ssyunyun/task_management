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
  ScrollView,
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';


import Modal from "react-native-modal";
import { heightPercentageToDP } from 'react-native-responsive-screen';

function Task_modal(props) {

    const [modalVisible_, setmodalVisible] = React.useState(true);

    return (
        <Modal visible={props.modalstate}>
            <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: "red", height: hp('60%') }}>
                <Text>〇〇する</Text>
                <Button
                    title="閉じる"
                    onPress={() => props.cahngemodal()}
                />
            </View>
        </Modal>
    );
}

export default Task_modal;