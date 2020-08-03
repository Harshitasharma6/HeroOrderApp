import React, {Component} from 'react';
import { View, StyleSheet, Dimensions } from 'react-native'
import { Picker } from 'native-base'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Helpers, Metrics, Fonts, Colors, ApplicationStyles } from 'App/Theme'
import { LineChart, Grid } from 'react-native-svg-charts'
 
export default class LineChartExample extends React.PureComponent {
    render() {
        const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]
 
        return (
            <LineChart
                style={{ height: 200 }}
                data={data}
                svg={{ stroke: 'rgb(134, 65, 244)' }}
                contentInset={{ top: 20, bottom: 20 }}
            >
                <Grid />
            </LineChart>
        )
    }
}

// export default class BasicLineChart extends Component {
//     render() {
// 		<LineChart
// 		  data={{
// 		    labels: [
// 		      'January',
// 		      'February',
// 		      'March',
// 		      'April',
// 		      'May',
// 		      'June',
// 		    ],
// 		    datasets: [
// 		      {
// 		        data: [20, 45, 28, 80, 99, 43],
// 		        strokeWidth: 2,
// 		      },
// 		    ],
// 		  }}
// 		  width={Dimensions.get('window').width - 16}
// 		  height={220}
// 		  chartConfig={{
// 		    backgroundColor: '#1cc910',
// 		    backgroundGradientFrom: '#eff3ff',
// 		    backgroundGradientTo: '#efefef',
// 		    decimalPlaces: 2,
// 		    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
// 		    style: {
// 		      borderRadius: 16,
// 		    },
// 		  }}
// 		  style={{
// 		    marginVertical: 8,
// 		    borderRadius: 16,
// 		  }}
// 		/>
// 	}
// }