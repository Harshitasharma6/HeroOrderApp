import React, {Component} from 'react';
import { View, StyleSheet, Dimensions, ScrollView, Text } from 'react-native'
import { Picker } from 'native-base'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Helpers, Metrics, Fonts, Colors, ApplicationStyles } from 'App/Theme'
import {LineChart} from 'react-native-chart-kit';
import Loading from 'App/Components/Loading'


export default class LineChartGraph extends React.Component {
    render(){
        const {
            data,
            labels,
            legend,
            loading,
            yAxisInterval
        } = this.props;
      return (
            <View style={{flex: 1, minHeight: 300, minWidth: Dimensions.get('window').width}}>
            {
                loading ?  <Loading />: 
              <ScrollView horizontal={true}>
                <LineChart
                  data={{
                    labels: labels,
                    datasets: [
                      {
                        data: data,
                      },
                    ],
                    legend: [legend]
                  }}
                  width={Dimensions.get('window').width * 1.1} // from react-native
                  height={300}
                  fromZero={true}
                  yAxisInterval={yAxisInterval}
                  //renderDotContent={(value) => <Text>{value}</Text>}
                  //onDataPointClick={(value, dataset, getColor) => <Text>{value}</Text>}
                  //hidePointsAtIndex={[0,1,2,3,4,5,8,9,10,11]}
                  formatXLabel={(x) => `${x}`}
                  yLabelsOffset={wp('1.4%')}
                 
                  chartConfig={{
                    backgroundColor: '#e26a00',
                    backgroundGradientFrom: '#D9D9D9',
                    backgroundGradientTo: '#FFF',
                    decimalPlaces: 0, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    style: {
                      borderRadius: 10,
                    },
                    propsForDots: {
                      r: '5',
                      strokeWidth: '2',
                      stroke: Colors.primary,
                    },
                  }}
                  bezier
                  style={{
                    marginVertical: 5,
                    padding: 10,
                    borderRadius: 10,
                  }}
                />
              </ScrollView>
          }
            </View>
      );
    }
};
