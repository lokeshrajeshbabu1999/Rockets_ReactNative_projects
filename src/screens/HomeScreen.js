import { Button } from "@rneui/themed";
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

const HomeScreen = ({ navigation }) => {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.buttonContainer}>
                <Button
                    title="History"
                    type="clear"
                    onPress={() => navigation.navigate('History')} />
                <Button
                    title="Launch"
                    type="clear"
                    onPress={() => navigation.navigate('Launch')} />
                <Button
                    title="Rockets"
                    type="clear"
                    onPress={() => navigation.navigate('Rockets')} />
            </View>
            <ScrollView >
                <Image
                    style={styles.image}
                    source={{
                        uri: 'https://camo.githubusercontent.com/f5493705ffa4fd5d816bc1280b14f61d12e53e4b4c77579854eb04b874e91c16/68747470733a2f2f6661726d352e737461746963666c69636b722e636f6d2f343731312f34303132363436313431315f623165643238336434355f6f2e6a7067',
                    }} />
                <Text style={styles.text2}>
                    SpaceX is targeting no earlier than Thursday, December 28 for Falcon Heavy to launch USSF-52 to orbit from Launch Complex 39A (LC-39A) at NASA’s Kennedy Space Center in Florida. The four-hour launch window opens at 7:00 p.m. ET. If needed, a backup opportunity is available on Friday, December 29 during the same window.
                </Text>
                <Image
                    style={styles.image}
                    source={{
                        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN5Sw4m7CVtxOzJys5iPYeCEnmY3SnpxVpqA&usqp=CAU"
                    }} />
                <Text style={styles.text1}>
                    FIRST ORBITAL CLASS ROCKET CAPABLE OF REFLIGHT
                </Text>
                <Text style={styles.text2}>
                    SpaceX is targeting Thursday, December 28 for a Falcon 9 launch of 21 Starlink satellites to low-Earth orbit from Space Launch Complex 4 East (SLC-4E) at Vandenberg Space Force Base in California. Liftoff is targeted for 9:09 p.m. PT, with backup opportunities available until 12:32 a.m. PT on Friday, December 29. If needed, additional opportunities are also available on Friday, December 29 starting at 8:48 p.m. PT.
                </Text>
            </ScrollView >
        </SafeAreaView >
    );
};

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 2,
    },
    text1: {
        fontSize: 28,
        color: '#006400'
    },
    text2: {
        fontSize: 24,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    image: {
        marginTop: 20,
        width: 470,
        height: 350,
    },
})