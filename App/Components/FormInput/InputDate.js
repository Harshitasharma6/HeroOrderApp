import { ApplicationStyles, Colors } from 'App/Theme';
import { DatePicker, Label, Icon } from 'native-base';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Style from './InputStyles';
import moment from 'moment';
import { HelperService } from 'App/Services/Utils/HelperService';

const InputDate = ({ placeholder = '', onChange = () => { }, style = {}, value = '', error = false, label = '', editable = false , mindate=''}) => (
    <>
        {label ? <Label style={{ ...Style.label }}>{label}</Label> : []}
        <View style={error ? { ...Style.input, ...Style.inputError, ...Styles.container } : { ...Styles.input, ...Styles.container }}>
            <View style={{ width: '90%' }}>
                <DatePicker
                    locale={"en"}
                    animationType={"slide"}
                    androidMode={"default"}
                    placeHolderText={value ? value : placeholder}
                    textStyle={Style.textStyle}
                    placeHolderTextStyle={Style.placeHolderTextStyle}
                    onDateChange={onChange}
                    minimumDate={mindate ? mindate : (new Date())}
                    disabled={editable}
                />
            </View>
           
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
