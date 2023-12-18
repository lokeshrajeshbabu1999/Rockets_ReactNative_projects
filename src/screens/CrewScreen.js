import { useNavigation } from '@react-navigation/native';
import { Card } from '@rneui/themed';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const CrewCard = ({ item, handleImagePress }) => {
    return (
        <Card style={styles.card}>
            <TouchableOpacity onPress={() => handleImagePress(item)}>
                <View>
                    <Text style={styles.text2}>{item.name}</Text>
                    <Image style={styles.image} source={{ uri: item.image }} />
                </View>
            </TouchableOpacity>
        </Card>
    );
};

const CrewScreen = () => {
    const navigation = useNavigation();
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const handleImagePress = (item) => {
        navigation.navigate('CrewDetailScreen', { id: item.id });
    };

    useEffect(() => {
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
    card: {
        marginVertical: 10,
        marginHorizontal: 5,
        borderRadius: 10,
        elevation: 4,
    },
});

export default CrewScreen;
