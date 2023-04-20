import react, { useEffect, useState } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    FlatList,
    TextInput,
    TouchableOpacity,
    Alert,
} from 'react-native';

import Item from '../../shared/components/Item/Item';

import styles from './homeStyles';

type PatientType = {
    id: string,
    name: string,
    lastName: string
}
type PatientsState = { 
  patients: PatientType[];
  patientName: string;
  patientLastName: string
}

type PatientProps = {
    setName: React.Dispatch<React.SetStateAction<string>>,
    setLastName: React.Dispatch<React.SetStateAction<string>>,
    saveAction: any,
}

const HeaderItem = (props: PatientProps) => (
    <View style={styles.headerContainer}>
       <TextInput 
            style={styles.input}
            placeholder="name"
            onChangeText={(name) => props.setName(name)}
        />
        <TextInput
            style={styles.input}
            placeholder="last name"
            onChangeText={(last) => props.setLastName(last)}
        />
        <TouchableOpacity style={styles.button} onPress={() => props.saveAction()}>
            <Text style={styles.buttonText}>Add patient</Text>
        </TouchableOpacity>
    </View>
)

const AddPatients = (state: PatientsState) => {
    let { patients, patientName, patientLastName } = state;
    const [given, setName] = useState(patientName);
    const [last, setLastName] = useState(patientLastName);
    const [patientsArray, setPatients] = useState(patients);
    useEffect(() => {
        setPatients([
            {"id": "1", "name": "Josue", "lastName": "Del Rio"},
            {"id": "2", "name": "John", "lastName": "Doe"},
            {"id": "3", "name": "Mary", "lastName": "Doe"},
            {"id": "4", "name": "Alex", "lastName": "Cazarez"},
        ]);
        setName("")
        setLastName("")
      }, []);
    const save = () => {
        let newPatientToAdd = {
            "id": (4 + Math.floor(Math.random()*2)).toString(),
            "name": given,
            "lastName": last
        };
        if(given !="" && last !="") {
            setPatients(oldPatients => [...oldPatients, newPatientToAdd]);
            Alert.alert("Added patient successfully!")
        } else {
            Alert.alert("Make sure you fill in name and last name before saving.")
        }
    };
    
    return(
        <SafeAreaView style={styles.container}>
            <FlatList
                data={patientsArray}
                renderItem={({item}) =>  <Item patient={item} />}
                keyExtractor={item => item.id}
                ListHeaderComponent={<HeaderItem setName={setName} setLastName={setLastName} saveAction={save} />}
                stickyHeaderIndices={[0]}
            />
        </SafeAreaView>
    );
};

export default AddPatients;