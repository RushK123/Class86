import React, { Component } from 'react';
import { Text, View, StyleSheet, SafeAreaView, Platform, StatusBar, Image, TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import * as Font from 'expo-font';
import { FlatList } from 'react-native-gesture-handler';
import AppLoading from 'expo-app-loading';
import StoryCard from './StoryCard';
import { ScrollView } from 'react-native-gesture-handler'
import DropDownPicker from 'react-native-dropdown-picker'

let customFonts = {
    "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
};


export default class CreateStory extends Component {
    constructor() {
        super()
        this.state = {
            fontsLoaded: false,
            previewImage: 'image_1',
            dropDownHeight: 40
        }
    }
    async loadFontsAsync() {
        await Font.loadAsync(customFonts);
        this.setState({ fontsLoaded: true });
    }
    componentDidMount() {
        this.loadFontsAsync();
    }
    render() {
        if (!this.state.fontsLoaded) {
            return (<AppLoading />)

        } else {
            let previewImages = {
                image_1: require('../assets/story_image_1.png'),
                image_2: require('../assets/story_image_2.png'),
                image_3: require('../assets/story_image_3.png'),
                image_4: require('../assets/story_image_4.png'),
                image_5: require('../assets/story_image_5.png'),
            }

            return (
                <View style={styles.container}>
                    <SafeAreaView style={styles.droidSafeArea}/>
                        <View style={styles.appTitle}>
                            <View style={styles.appIcon}>
                                <Image
                                    source={require("../assets/logo.png")}
                                    style={styles.iconImage}
                                ></Image>
                            </View>
                            <View style={styles.appTitleTextContainer}>
                                <Text style={styles.appTitleText}>New Story</Text>
                            </View>
                        </View>
                        <View style={styles.fieldsContainer}>
                            <ScrollView>
                                <Image source={previewImages[this.state.previewImage]} style={styles.previewImage}>

                                </Image>
                                <View style={{ height: RFValue(this.state.dropDownHeight) }}>
                                    <DropDownPicker items={[
                                        { label: "Image1", value: "image_1" },
                                        { label: "Image2", value: "image_2" },
                                        { label: "Image3", value: "image_3" },
                                        { label: "Image4", value: "image_4" },
                                        { label: "Image5", value: "image_5" },
                                    ]}
                                        defaultValue={this.state.previewImage}
                                        containerStyle={{ height: 40, borderRadius: 20, marginBottom: 10 }}
                                        style={{ backgroundColor: "transparent" }}
                                        itemStyle={{ justifyContent: 'flex-start' }}
                                        dropDownStyle={{ backgroundColor: 'grey' }}
                                        labelStyle={{ color: "white", fontFamily: "Bubblegum-Sans" }}
                                        arrowStyle={{ color: "white", fontFamily: "Bubblegum-Sans" }}
                                        onOpen={() => {
                                            this.setState({
                                                dropDownHeight: 170
                                            })
                                        }}
                                        onClose={() => {
                                            this.setState({
                                                dropDownHeight: 40
                                            })
                                        }}
                                        onChangeItem={item => {
                                            this.setState({
                                                previewImage: item.value
                                            })
                                        }}


                                    />


                                </View>
                                <TextInput style={styles.inputFont}
                                    onChangeText={title => this.setState({ title })}
                                    placeholder="Title"
                                    placeholderTextColor="white"
                                />
                                <TextInput style={[styles.inputFont, styles.inputFontExtra, styles.inputTextBig]}
                                    onChangeText={description => this.setState({ description })}
                                    placeholder="description"
                                    placeholderTextColor="white"
                                    multiline={true}
                                    numberOfLines={4}
                                />
                                <TextInput style={[styles.inputFont, styles.inputFontExtra, styles.inputTextBig]}
                                    onChangeText={story => this.setState({ story })}
                                    placeholder="story"
                                    placeholderTextColor="white"
                                    multiline={true}
                                    numberOfLines={20}
                                />
                                <TextInput style={[styles.inputFont, styles.inputFontExtra, styles.inputTextBig]}
                                    onChangeText={moral => this.setState({ moral })}
                                    placeholder="moral"
                                    placeholderTextColor="white"
                                    multiline={true}
                                    numberOfLines={4}
                                />
                            </ScrollView>
                        </View>


                </View>

            )

        }


    }
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#15193c" },
    droidSafeArea: { marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35) },
    appTitle: { flex: 0.07, flexDirection: "row" },
    appIcon: { flex: 0.3, justifyContent: "center", alignItems: "center" },
    iconImage: { width: "100%", height: "100%", resizeMode: "contain" },
    appTitleTextContainer: { flex: 0.7, justifyContent: "center" },
    appTitleText: { color: "white", fontSize: RFValue(28), fontFamily: "Bubblegum-Sans" },
    fieldsContainer: { flex: 0.85 },
    previewImage: {
        width: "93%", height: RFValue(250), alignSelf: "center",
        borderRadius: RFValue(10),
        marginVertical: RFValue(10), resizeMode: "contain"
    },
    inputFont: {
        height: RFValue(40), borderColor: "white", borderWidth: RFValue(1), borderRadius: RFValue(10), paddingLeft: RFValue(10),
        color: "white", fontFamily: "Bubblegum-Sans"
    },
    inputFontExtra: { marginTop: RFValue(15) },
    inputTextBig: { textAlignVertical: "top", padding: RFValue(5) }
});