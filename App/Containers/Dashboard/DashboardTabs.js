import React, { Component } from 'react'
import { Text } from 'react-native'
import { connect } from 'react-redux'
import Style from './DashboardScreenStyle'
import DashboardActions from 'App/Stores/Dashboard/Actions'
import { Tab, Tabs, TabHeading } from 'native-base';



//<ScrollableTab tabsContainerStyle={Style.tabHeading} underlineStyle={Style.tabUnderLine} style={Style.mainTabs} />

class DashboardTabs extends React.Component {
  render() {
    const {
      isASM,
      searchFilters,
      changeSearchFilters
    } = this.props
    return (
      <Tabs onChangeTab={(tab) => changeSearchFilters({ edited_field: 'selectedTab', edited_value: tab.i })} tabBarUnderlineStyle={Style.tabUnderLine} style={Style.mainTabs} initialPage={searchFilters['selectedTab']} >
        {
          isASM ? (<Tab selected={true} underlineStyle={Style.tabUnderLine} heading={<TabHeading style={Style.tabHeading}><Text style={Style.tabText}>My Details</Text></TabHeading>}>
          </Tab>) : []
        }
        <Tab selected={false} underlineStyle={Style.tabUnderLine} heading={<TabHeading style={Style.tabHeading} ><Text style={Style.tabText}>Targets</Text></TabHeading>}>
        </Tab>
        <Tab selected={false} underlineStyle={Style.tabUnderLine} heading={<TabHeading style={Style.tabHeading}><Text style={Style.tabText}>Summary</Text></TabHeading>}>
        </Tab>
      </Tabs>
    )
  }
}

const mapStateToProps = (state) => ({
  token:          state.user.token,
  agentid:        state.user.id,
  isASM:          state.user.isASM,
  psmList:        state.user.psmList.concat([{ id: '', name: 'All' }]),
  searchFilters:  state.dashboard.searchFilters
});

const mapDispatchToProps = (dispatch) => ({
  changeSearchFilters: (params) => dispatch(DashboardActions.changeDashboardSearchFilters(params))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardTabs)
