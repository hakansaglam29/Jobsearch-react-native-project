import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import {Topicstyle} from '../Styles';


// {
//     id: 0,
//     name: 'Java',
//     color: '#fb5607'
// },


const Topicitem = props => {
    return (
        <TouchableOpacity style={[Topicstyle.container, {backgroundColor:props.item.color}]}>
            <Text style={Topicstyle.text}> {props.item.name} </Text>
        </TouchableOpacity>
    );
};

export { Topicitem };