import { useNavigation } from '@react-navigation/native';
import { Card } from '@rneui/themed';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const CrewScreen = () => {
    const navigation = useNavigation();
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const handleImagePress = (item) => {
        navigation.navigate('CrewDetailScreen', { id: item.id });
    };

    const CrewCard = ({ item, handleImagePress }) => {
        return (
            <><Card style={styles.card}>
                <TouchableOpacity onPress={() => handleImagePress(item)}>
                    <View>
                        <Text style={styles.text2}>{item.name}</Text>
                        <Image style={styles.image} source={{ uri: item.image }} />
                    </View>
                </TouchableOpacity>
            </Card></>
        );
    };

    useEffect(() => {
        setLoading(true)
        fetch('https://api.spacexdata.com/v4/crew')
            .then((response) => response.json())
            .then((data) => {
                setData(data);
                setLoading(false);
            })
            .catch((error) => console.error(error));

    }, []);
    return (
        <SafeAreaView>
            <TextInput
                clearButtonMode="always"
                style={styles.textinput}
                placeholder='search'
                autoCapitalize='none'
                autoCorrect={false}
            />
            <View style={styles.container}>
                {isLoading ? (
                    <ActivityIndicator />
                ) : (
                    <FlatList
                        data={data}
                        renderItem={({ item }) => <CrewCard item={item} handleImagePress={handleImagePress} />}
                        keyExtractor={(item) => item.id.toString()}
                    />
                )}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    image: {
        marginTop: 10,
        width: 330,
        height: 390,
    },
    text2: {
        fontSize: 28,
        color: '#2e8b57',
        textAlign: 'center'
    },
    container: {
        marginHorizontal: 2,
    },
    textinput: {
        marginHorizontal: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
    },
    card: {
        marginVertical: 10,
        marginHorizontal: 5,
        borderRadius: 10,
        elevation: 4,
    },
});

export default CrewScreen;
