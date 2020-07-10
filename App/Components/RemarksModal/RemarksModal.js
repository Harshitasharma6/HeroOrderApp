import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import TextArea from "App/Components/FormInput/TextArea";
import BlueButton from "App/Components/BlueButton";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Colors, Metrics, Helpers, Fonts, ApplicationStyles } from 'App/Theme'

const RemarksModal = ({ isVisible, handleSubmit, handleCancel, toggleModal, expenseForm, changeExpenseForm, loading }) => {
    let body = (
        <View style={{ margin: 8, justifyContent: 'center', alignItems: 'center', width: '100%' }}>
            <Text style={Style.modalHeading}>Remarks</Text>
            <TextArea
                placeholder={'Type Remarks'}
                numberOfLines={5}
                value={expenseForm}
                onChange={(value) => changeExpenseForm({ remark: value })}
                style={{borderColor: Colors.lightGrey}}
            />
            <View style={Style.actionContainer}>
                <BlueButton
                    onPress={handleSubmit}
                    title={'Submit'}
                    disabled={loading}
                    loading={loading}
                    style={Style.actionButton}
                    textStyle={Style.actionButtonTextStyle}
                />
                <BlueButton
                    onPress={handleCancel}
                    title={'Cancel'}
                    disabled={loading}
                    style={Style.actionButton}
                    textStyle={Style.actionButtonTextStyle}
                />
            </View>
        </View>
    );
    return (
        <Modal
            isVisible={isVisible}
            onBackdropPress={toggleModal}
            animationIn={"slideInUp"}
        >
            <View style={Style.container}>
                {body}
            </View>
        </Modal>
    );
}
export default RemarksModal;

const Style = StyleSheet.create({
    modalHeading: {
        color: Colors.primary,
        fontSize: wp('4.5%'),
        fontFamily: ApplicationStyles.textMsgFont,
        marginBottom: 10,
        textTransform: 'uppercase' 
    },
    actionButtonTextStyle: {
        fontSize: wp('4%')
    },
    actionButton: {
        width: wp('30%'),
        height: hp('6%'),
        borderRadius: 10
    },
    actionContainer: {
        flexDirection: 'row',
        marginTop: 10,
        width: '100%',
        justifyContent: 'space-between'
    },
    container: {
        margin: 0,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15
    }
});