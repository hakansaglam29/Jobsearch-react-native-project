import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, FlatList } from 'react-native';
import Axios from 'axios';

import {JobItem} from '../components'

// company: "Protenus"
// company_logo: null
// company_url: "http://Protenus"
// created_at: "Tue Nov 10 22:05:21 UTC 2020"
// description: "/p>↵<p>Senior Software Enginee3</a></p>↵"
// id: "072283ab-d749-4b27-9080-a82451befec7"
// location: "Baltimore, MD or U.S. Remote"
// title: "Software Engineer (Full-Stack)"
// type: "Full Time"
// url: "https://jobs.github.com/positions/072283ab-d749-4b27-9080-a82451befec7"

const Jobs = (props) => {
    const [data, setData] = useState([]);
    const { selectedLanguage } = props.route.params;

    const fetchData = async () => {
        const response = await Axios.get(`https://jobs.github.com/positions.json?search=${selectedLanguage.toLowerCase()}`
        );
        setData(response.data);
    }

    useEffect(() => { fetchData() }, [])

    const renderJobs = ({item}) => <JobItem job={item}/>;


    return (
        <SafeAreaView>
            <View>
                <Text style={{color:'blue', fontSize:20, fontWeight: '700', textAlign:'center', margin:10}}>JOBS</Text>
                <FlatList
                    data={data}
                    renderItem={renderJobs}

                />
            </View>
        </SafeAreaView>
    );
};

export { Jobs };