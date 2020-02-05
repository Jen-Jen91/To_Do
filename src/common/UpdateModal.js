import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Modal} from 'react-native';

class UpdateModal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Modal visible={this.props.visible} transparent>
        <View style={[styles.modal]}>
          <View style={[styles.container]}>
            <Text style={[styles.title]}>{this.props.title}</Text>
            <Text style={[styles.text]}>{this.props.text}</Text>

            {this.props.children && this.props.children}

            <View style={[styles.buttonContainer]}>
              <TouchableOpacity onPress={this.props.cancel}>
                <Text>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.props.submit}>
                <Text>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

export default UpdateModal;

const styles = StyleSheet.create({
  modal: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    // height: 100,
    // width: 300,
  },
  title: {},
  text: {},
  buttonContainer: {},
});
