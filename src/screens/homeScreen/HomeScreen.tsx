import {Alert, Text, TouchableOpacity, View} from 'react-native';
import { homeStyle } from './HomeStyle';

export const HomeScreenFunc = () => {
  const handlePress = (label: string) => {
    Alert.alert(`Navigating to ${label}`);
  };

  return (
    <View style={homeStyle.container}>
      <TouchableOpacity
        style={homeStyle.circleButton}
        onPress={() => handlePress('Medications')}>
        <Text style={homeStyle.buttonText}>Medications</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={homeStyle.circleButton}
        onPress={() => handlePress('Forum')}>
        <Text style={homeStyle.buttonText}>Forum</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={homeStyle.circleButton}
        onPress={() => handlePress('Emotional Log')}>
        <Text style={homeStyle.buttonText}>Emotional Log</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={homeStyle.circleButton}
        onPress={() => handlePress('Documents')}>
        <Text style={homeStyle.buttonText}>Documents</Text>
      </TouchableOpacity>
    </View>
  );
};
