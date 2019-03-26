import React from 'react';
import Tab from './Tab';
import propTypes from 'prop-types';

const Tabs = props => {
  console.log(props)
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {props.tabs.map(tab => <Tab key = {tab} tab = {tab} selectTabHandler = {props.selectTabHandler} selectedTab = {props.selectedTab} />)
          /* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!
Tabs.propTypes = {
  tabs: propTypes.shape({
    selectTabHandler: propTypes.func,
    selectedTab: propTypes.string,
    tabs: propTypes.array
  })
}

export default Tabs;