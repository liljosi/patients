import react from 'react';
import {
    View,
    Text,
    TouchableOpacity, 
    Image,
} from 'react-native';

import Kid from '../../images/Frame.png';

import styles from './itemStyles';

type Patient = {
    name: string,
    lastName: string,
}

type AppProps = {
    patient: Patient;
};

const Item = ({patient}: AppProps) => (
    <View style={styles.item}>
      <Text>Name:</Text>
      <Text>{patient.name}</Text>
      <Text >{patient.lastName}</Text>
      <View style={styles.itemContentContainer}>
        <Image source={Kid} />
      </View>
    </View>
);

export default Item;