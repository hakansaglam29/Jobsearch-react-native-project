import React from 'react';
import { View, SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { JobItem } from '../components';
import { FlatList } from 'react-native-gesture-handler';

const SavedJobs = (props) => {

    const [jobList, setJobList] = React.useState([])

    AsyncStorage.getItem('@SAVED_JOBS')
        .then(res => {
            const list = JSON.parse(res);
            setJobList(list);
        })

    return (
        <SafeAreaView>
            <View>
                <FlatList
                    data = {jobList}
                    renderItem = {({item})=> <JobItem job={item}/>}
                    keyExtractor={item => item.id}
                />
            </View>
        </SafeAreaView>
    );
};

export { SavedJobs};