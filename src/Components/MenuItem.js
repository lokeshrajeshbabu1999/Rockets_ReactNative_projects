import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Divider, IconButton, Menu, PaperProvider } from 'react-native-paper';

const MenuItem = () => {
    const [visible, setVisible] = React.useState(false);
    const closeMenu = () => setVisible(false);
    const openMenu = () => setVisible(true);
    return (
        <View style={styles.container}>
            <PaperProvider>
                <Menu
                    visible={visible}
                    onDismiss={closeMenu}
                    anchor={
                        <IconButton
                            icon="dots-vertical"
                            onPress={openMenu}
                        ></IconButton>
                    }
                >
                    <Menu.Item onPress={() => { }} title="Düzenle" />
                    <Divider style={{ height: 1, color: "black", width: "100%" }} />
                    <Menu.Item onPress={() => { }} title="Sil" />
                </Menu>
            </PaperProvider>
        </View>
    );
};
export default MenuItem;

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
    }
})