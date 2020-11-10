import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

const Jobs = (props) => {
    const {selectedLanguage} = props.route.params;
    return (
        <SafeAreaView>
            <View>
                <Text>{selectedLanguage}</Text>
            </View>
        </SafeAreaView>
    );
};

export { Jobs };