import { ApplicationStyles, Colors } from 'App/Theme';
import { DatePicker, Label } from 'native-base';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Style from './InputStyles';
import moment from 'moment';

const InputDate = ({ placeholder = '', onChange = () => { }, style = {}, value = '', error = false, label = '', editable = false }) => (
    <>
        {label ? <Label style={{ ...Style.label }}>{label}</Label> : []}
        <View style={error ? { ...Style.input, ...Style.inputError, ...Styles.container } : { ...Styles.input, ...Styles.container }}>
            <DatePicker
                locale={"en"}
                animationType={"slide"}
                androidMode={"default"}
                placeHolderText={placeholder}
                textStyle={{ color: Colors.grey, fontFamily: ApplicationStyles.textMsgFont }}
                placeHolderTextStyle={{ color: Colors.grey, fontFamily: ApplicationStyles.textMsgFont }}
                onDateChange={onChange}
                minimumDate={moment.now()}
                disabled={editable}
            />
        </View>
    </>
)

const Styles = StyleSheet.create({
    container: {
        marginTop: 8,
        marginBottom: 15
    },
    input: {
        borderColor: Colors.grey,
        borderRadius: 10,
        borderWidth: 1,
        color: Colors.grey,
        fontFamily: ApplicationStyles.textMsgFont,
        paddingLeft: 5,
        justifyContent: 'center',
    },
});

export default InputDate
