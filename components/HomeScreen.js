import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';
// libaries for Collapse
import * as Animatable from 'react-native-animatable';
import Accordion from 'react-native-collapsible/Accordion';

//display on each click 
const  Click1 =  ' Click 1 ...check!'                          
const Click2=' Click 2 ...check!'
const Click3= 'Click 3 ...check!'

//Selector
const CONTENT = [
  {
    title: 'Test 1',
    content: Click1,
  },
  {
    title: 'Test 2',
    content: Click2,
  },
  {
    title: 'Test 3',
    content: Click3,
  },
  
];


export default class HomeScreen extends Component {
  //Defining the states and prereq
  state = {
    activeSections: [],
    collapsed: true,
    multipleSelect: false,
  };
// to collapse and expand
  toggleExpanded = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };
// to select one click at a time
  setSections = sections => {
    this.setState({
      activeSections: sections.includes(undefined) ? [] : sections,
    });
  };

  // expand/collapse header
  renderHeader = (section, _, isActive) => {
    return (
      <Animatable.View
        duration={400}
        style={[styles.header, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor"
      >
        <Text style={styles.headerText}>{section.title}</Text>
      </Animatable.View>
    );
  };
//expand/collapse display content 
  renderContent(section, _, isActive) {
    return (
      <Animatable.View
        duration={400}
        style={[styles.content, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor"
      >
        <Animatable.Text animation={isActive ? 'bounceIn' : undefined}>
          {section.content}
        </Animatable.Text>
      </Animatable.View>
    );
  }
// main function
  render() {
    const { multipleSelect, activeSections } = this.state;

    return (
      <View style={styles.container}>
          <Accordion
            activeSections={activeSections}
            sections={CONTENT}
            touchableComponent={TouchableOpacity}
            expandMultiple={multipleSelect}
            renderHeader={this.renderHeader}
            renderContent={this.renderContent}
            duration={400}
            onChange={this.setSections}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Constants.statusBarHeight,
  },
  
  header: {
    backgroundColor: 'white',
    padding: 10,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 26,
    fontWeight: '500',
    color:"black",
  },
  content: {
    padding: 20,
    backgroundColor: "orange",
  },
 
});