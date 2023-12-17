import { Button, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

const Separator = () => <View style={styles.separator} />;
const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View >
                <ScrollView >
                    {/* <Button
                            title="Go to Jane's profile"
                            onPress={() => navigation.navigate('Profile', { name: 'Jane' })} /> */}
                    <Separator />
                    <View style={styles.fixToText}>
                        <Button
                            title="History"
                            onPress={() => navigation.navigate('History')} />
                    </View>
                    <Separator />
                    <View style={styles.fixToText}>
                        <Button
                            title="Launch"
                            onPress={() => navigation.navigate('Launch')} />
                    </View>
                    <Separator />
                    <View style={styles.fixToText}>
                        <Button style={styles.buttonContainer}
                            title="Rocket"
                            onPress={() => navigation.navigate('Rockets')} />
                    </View>
                    <Image
                        style={styles.image}
                        source={{
                            uri: 'https://camo.githubusercontent.com/f5493705ffa4fd5d816bc1280b14f61d12e53e4b4c77579854eb04b874e91c16/68747470733a2f2f6661726d352e737461746963666c69636b722e636f6d2f343731312f34303132363436313431315f623165643238336434355f6f2e6a7067',
                        }} />
                    <Text style={styles.text}>SpaceX will continue to test its Starship mega-rocket in 2024, after the first two flights in its fully-integrated configuration ended in them blowing up.
                        SpaceX has insisted that explosions during the early stages of rocket development are welcome and help inform design choices faster</Text>

                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
    },
    fixToText: {
        flexDirection: 'row',
        marginTop: 20,
    },
    text: {
        fontSize: 20,
    },
    image: {
        marginTop: 20,
        width: 470,
        height: 350,
    },
})