// @ts-check

import React, { Component } from 'react'; 
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {StyleSheet, Text, View} from 'react-native'
import { Button } from 'react-native-elements'

import {counterIncrement, counterDecrement}  from '../actions/counter';

const styles = StyleSheet.create({ 
    container: { 
        flex: 1, 
        padding: 30, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#000080',
    },

    counter: {
        padding: 30,
        alignSelf: 'center',
        fontSize: 26,
        fontWeight: 'bold',
    },
    text: {
        fontFamily: "Roboto-Light",
        fontSize: 40,
        textAlign: "center",
        margin: 10
    },
});

class Learning_Project extends Component { 
    render() {
        return( 
            <View style={{
                flex: 1,
                padding: 20,
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
            <Button
            large
            title='Increment +'
            color = "green"
            //icon={{name: 'envira', type: 'font-awesome'}}
            onPress={this.props.actions.counterIncrement}/>
            
            <Text>
                <Text style={styles.text}>
                {this.props.count}
                </Text>
            </Text>

             <Button
            large
            title='Decrement -'
            color = "red"
            
            onPress={this.props.actions.counterDecrement}
             />
            </View>
            );
            
                           
            //     title=" Increment + "
            //     color="#841584"
            //     onPress={this.props.actions.counterIncrement}/>
            //  <Text>
            //     {this.props.count}
            //  </Text>
            //  <Button
            //     title=" Decrement - "
            //     color="#841584"
            //     onPress={this.props.actions.counterDecrement}/>
            //  </View>
      
    }
}

  const mapStateToProps = (state) => ({
    count: state.CounterReducer.count,
  });
  
  const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({counterIncrement, counterDecrement}, dispatch)
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(Learning_Project);
