import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { jobItemstyle } from '../Styles'

const JobItem = (props) => {
    return (
        <TouchableOpacity
            style={jobItemstyle.container}
            onPress={props.onSelect}
            >
            <Text style={jobItemstyle.text}>{props.job.title}</Text>
            <Text style={jobItemstyle.text}>{props.job.type}/{props.job.location}</Text>
        </TouchableOpacity>
    );
};

export { JobItem };