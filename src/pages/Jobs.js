import React, {useState, useEffect} from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import Axios from 'axios';


// company: "Aiva Health"
// company_logo: "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBa09PIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--68651aa…"
// company_url: "http://www.aivahealth.com"
// created_at: "Mon Nov 09 21:32:19 UTC 2020"
// description: "<p>Aiva, the Amazon- and Google-funded leader in voice-powered healthcare, is looking for a Go Engineer with an interest in learning ne…"
// how_to_apply: "<p>If this sounds like you, please send your resume or LinkedIn profile to <…"
// id: "7468028c-24dd-47e5-8e3f-b245455a1b47"
// location: "Los Angeles"
// title: "Go Engineer"
// type: "Full Time"
// url: "https://jobs.github.com/positions/7468028c-24dd-47e5-8e3f-b245455a1b47"

const Jobs = (props) => {
    const {selectedLanguage} = props.route.params;

    const fetchData = async () => {
        const response = await Axios.get(`https://jobs.github.com/positions.json?search=${selectedLanguage.toLowerCase()}`);
        console.log(response)
    }

    useEffect(()=> {fetchData()}, [])


    return (
        <SafeAreaView>
            <View>
                <Text>{selectedLanguage}</Text>
            </View>
        </SafeAreaView>
    );
};

export { Jobs };