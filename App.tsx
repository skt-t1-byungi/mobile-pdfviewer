import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import WebView from 'react-native-webview'

export default function App() {
    return (
        <SafeAreaView style={{ flex: 1, width: '100%' }}>
            <StatusBar style="auto" />
            <View style={{ flex: 1, width: '100%' }}>
                <WebView
                    source={{
                        uri: 'https://docs.google.com/gview?embedded=true&url=https://www.africau.edu/images/default/sample.pdf',
                    }}
                    scalesPageToFit={true}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
