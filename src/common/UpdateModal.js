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

            {this.props.text ? (
              <Text style={[styles.text]}>{this.props.text}</Text>
            ) : null}

            {this.props.children && this.props.children}

            <View style={[styles.buttonContainer]}>
              <TouchableOpacity
                onPress={this.props.cancel}
                style={[styles.cancelButton]}>
                <Text style={[styles.buttonText]}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={this.props.submit}
                style={[styles.submitButton]}>
                <Text style={[styles.buttonText]}>OK</Text>
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
    height: '40%',
    width: '90%',
    borderRadius: 15,
    paddingLeft: 20,
    paddingRight: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: 'rgb(33, 42, 127)',
    marginBottom: 20,
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    color: 'rgb(33, 42, 127)',
    marginBottom: 40,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  cancelButton: {
    backgroundColor: 'rgb(195, 198, 221)',
    width: 80,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    elevation: 5,
  },
  submitButton: {
    backgroundColor: 'rgb(33, 42, 127)',
    width: 80,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    elevation: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '700',
    color: 'white',
  },
});
