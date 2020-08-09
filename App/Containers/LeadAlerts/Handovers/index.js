import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs, TabHeading, Text } from 'native-base';
import TodayHandover from './TodayHandover'
import UpcomingHandover from './UpcomingHandover'
import {ApplicationStyles, Colors} from 'App/Theme'

export default class HandoverTabs extends Component {
  render() {
    return (
        <Tabs tabBarUnderlineStyle={ApplicationStyles.tabUnderLine} style={ApplicationStyles.mainTabs}>
          <Tab 
            underlineStyle={ApplicationStyles.tabUnderLine} 
            heading={<TabHeading style={ApplicationStyles.tabHeading}><Text style={ApplicationStyles.tabText}>Today's Handover</Text></TabHeading>}>
              <TodayHandover />
          </Tab>

          <Tab 
            underlineStyle={ApplicationStyles.tabUnderLine} 
            heading={<TabHeading style={ApplicationStyles.tabHeading}><Text style={ApplicationStyles.tabText}>Upcoming Handover</Text></TabHeading>}>
              <UpcomingHandover />
          </Tab>
        </Tabs>
    );
  }
}


  