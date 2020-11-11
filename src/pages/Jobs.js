import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, FlatList, Button} from 'react-native';
import Modal from 'react-native-modal'
import Axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { JobItem } from '../components'
import { jobsstyle } from '../Styles'


const Jobs = (props) => {
    const [data, setData] = useState([]);
    const [modalFlag, setmodalFlag] = useState(false);
    const [selectedJob, setSelectedJob] = useState('');
    const { selectedLanguage } = props.route.params;

    const fetchData = async () => {
        const response = await Axios.get(`https://jobs.github.com/positions.json?search=${selectedLanguage.toLowerCase()}`
        );
        setData(response.data);
    }

    useEffect(() => { fetchData() }, [])

    const renderJobs = ({ item }) => <JobItem job={item} onSelect={() => onJobSelect(item)} />;

    const onJobSelect = (job) => {
        setmodalFlag(true);
        setSelectedJob(job)

    }
    
    const onJobSave = async (job) => {
        const savedJobList = await AsyncStorage.getItem('@SAVED_JOBS', [])
      }

    return (
        <SafeAreaView>
            <View>
                <Text style={{ color: 'blue', fontSize: 20, fontWeight: '700', textAlign: 'center', margin: 10 }}>JOBS for {selectedLanguage}</Text>
                <FlatList
                    data={data}
                    renderItem={renderJobs}
                />
                <Modal isVisible={modalFlag} onBackdropPress={()=> setmodalFlag(false)}>
                    <View style={jobsstyle.container}>
                        <View style={{borderBottomWidth:2}}>
                            <Text style={jobsstyle.text}>{selectedJob.title}</Text>
                            <Text style={jobsstyle.text}>{selectedJob.location}</Text>
                        </View>
                        <Text numberOfLines={10} style={{margin:8}}>{selectedJob.description}</Text>
                        <Button title='KAYDET'/>
                    </View>
                </Modal>
            </View>
        </SafeAreaView>
    );
};

export { Jobs };