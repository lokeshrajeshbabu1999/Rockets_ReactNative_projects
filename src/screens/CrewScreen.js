import { useNavigation } from '@react-navigation/native';
import { Card } from '@rneui/themed';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const CrewScreen = () => {
    const navigation = useNavigation();
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const handleImagePress = (item) => {
        // Navigate to CrewDetailScreen and pass necessary data, e.g., item ID
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
                <Card>
                    {isLoading ? (
                        <ActivityIndicator />
                    ) : (
                        <View>
                            <FlatList
                                data={data}
                                renderItem={({ item }) => (
                                    <TouchableOpacity key={item.id} onPress={() => handleImagePress(item)}>
                                        <View>
                                            <Text style={styles.text2}>{item.name}</Text>
                                            <Image style={styles.image} source={{ uri: item.image }} />
                                        </View>
                                    </TouchableOpacity>
                                )}
                                keyExtractor={(item) => item.id.toString()}
                            />
                        </View>
                    )}
                </Card>
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
        color: '#2e8b57'

    },
    container: {
        marginHorizontal: 2,
        backgroundColor: '#e0ffff'

    },
});

export default CrewScreen;
