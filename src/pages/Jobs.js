import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, FlatList, Button, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal'  //STAY IN THE SAME PAGE AND SHOW A POP UP PAGE
import Axios from 'axios';  // GET DATA FROM API
import AsyncStorage from '@react-native-async-storage/async-storage';  // STORE INFOS IN SMARTPHONE

import { JobItem } from '../components'
import { jobsstyle } from '../Styles'


const Jobs = (props) => {
    const [data, setData] = useState([]);
    const [modalFlag, setmodalFlag] = useState(false);
    const [selectedJob, setSelectedJob] = useState('');
    const { selectedLanguage } = props.route.params;

    // GET API WITH AXIOS
    const fetchData = async () => {
        const response = await Axios.get(`https://jobs.github.com/positions.json?search=${selectedLanguage.toLowerCase()}`
        );
        setData(response.data);
    }

    useEffect(() => { fetchData() }, [])

    // FLAT LIST
    const renderJobs = ({ item }) => <JobItem job={item} onSelect={() => onJobSelect(item)} />;

    //MODAL STRUCTUR
    const onJobSelect = (job) => {
        setmodalFlag(true);
        setSelectedJob(job)

    }
    // ASYNC STORAGE
    const onJobSave = async () => {
        let savedJobList = await AsyncStorage.getItem('@SAVED_JOBS');
        savedJobList = savedJobList == null ? [] : JSON.parse(savedJobList)
        console.log(savedJobList)
        const updatedJobList = [...savedJobList, selectedJob]
        await AsyncStorage.setItem('@SAVED_JOBS', JSON.stringify(updatedJobList));
      }

    return (
        <SafeAreaView style= {{flex:1}}>
            <View style= {{flex:1}}>
                <Text style={{ color: 'blue', fontSize: 20, fontWeight: '700', textAlign: 'center', margin: 10 }}>JOBS for {selectedLanguage}</Text>
                <FlatList
                    data={data}
                    renderItem={renderJobs}
                />
                <TouchableOpacity
                    style = {jobsstyle.show}
                    onPress= {() => props.navigation.navigate("SavedJobs")}>
                    <Text  style = {jobsstyle.showtext}>Show Saved Jobs</Text>
                </TouchableOpacity>
                <Modal isVisible={modalFlag} onBackdropPress={()=> setmodalFlag(false)}>
                    <View style={jobsstyle.container}>
                        <View style={{borderBottomWidth:2}}>
                            <Text style={jobsstyle.text}>{selectedJob.title}</Text>
                            <Text style={jobsstyle.text}>{selectedJob.location}</Text>
                        </View>
                        <Text numberOfLines={10} style={{margin:8}}>{selectedJob.description}</Text>
                        <Button title='KAYDET' onPress={onJobSave}/>
                    </View>
                </Modal>
            </View>
        </SafeAreaView>
    );
};

export { Jobs };