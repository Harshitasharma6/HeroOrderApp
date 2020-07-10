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
                textStyle={{ color: Colors.button }}
                placeHolderTextStyle={{ color: "#d3d3d3" }}
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
        borderColor: Colors.border,
        borderRadius: 100,
        borderWidth: 1,
        color: Colors.inputText,
        fontFamily: ApplicationStyles.textMediumFont,
        paddingLeft: 5,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
});

export default InputDate
