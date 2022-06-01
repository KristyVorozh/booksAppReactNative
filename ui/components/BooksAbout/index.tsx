import React, {useState} from 'react';
import {Image, Pressable, ScrollView, StyleSheet, Text, View} from "react-native";
import {BooksObjectType} from "../../types";

interface IBooksAbout {
    booksElement: BooksObjectType
}
const BooksAbout: React.FC<IBooksAbout> = ({booksElement}) => {
    const [textLines, setTextLines] = useState<number>(4);
    const [takeBook, setTakeBook] = useState<boolean>(false);

    return (
        <ScrollView>
            <View style={styles.bookContainer}>
                <Image source={booksElement.img} style={styles.imageBook}/>
                <View style={styles.bookText}>
                    <Text style={styles.title}>{booksElement.author}</Text>
                    <Text style={styles.subTitle}>{booksElement.title}</Text>
                </View>
            </View>
            <View style={styles.bookAboutContainer}>
                <Text numberOfLines={textLines} style={styles.bookAbout}>{booksElement.about}</Text>
                <Text style={styles.bookShowText} onPress={()=>setTextLines(5)}>Full Synopsis</Text>
            </View>
            <Pressable style={takeBook ? styles.button : styles.buttonGreen} onPress={()=>setTakeBook(!takeBook)}>
                <Text style={styles.text}>{takeBook ? 'Take the book' : 'return the book'}</Text>
            </Pressable>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    button: {
        width: 315,
        height: 56,
        backgroundColor: '#6790FB',
        borderRadius: 8,
        marginHorizontal: 30,
        marginBottom: 150,
        marginTop: 40,
    },
    text: {
        textAlign: 'center',
        paddingTop: 18,
        fontSize: 14,
        letterSpacing: 2,
        textTransform: 'uppercase',
        color: 'white',
    },
    buttonGreen: {
        width: 315,
        height: 56,
        backgroundColor: '#2DCB59',
        borderRadius: 8,
        marginHorizontal: 30,
        marginBottom: 150,
        marginTop: 40,
    },
    bookAbout: {
        maxWidth: 300,
        fontSize: 14,
        lineHeight: 22,
        color: 'rgba(56, 79, 125, 0.8)'
    },
    bookAboutContainer: {
        margin: 30,
    },
    bookShowText: {
        color: '#384F7D',
        fontSize: 14,
        textDecorationLine: 'underline',
        textDecorationStyle: 'solid',
        textDecorationColor: '384F7D',
        marginTop: 12,
        fontFamily: 'CircularStd-Bold'
    },
    bookContainer: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 60
    },
    imageBook: {
        width: 120,
        height: 200,
        borderRadius: 15,
    },
    bookText: {
        width: 170,
        marginLeft: 30
    },
    title: {
        color: '#384F7D',
        fontSize: 20,
        marginBottom: 5,
        fontFamily: 'CircularStd-Bold'
    },
    subTitle: {
        fontSize: 16,
        color: 'rgba(56, 79, 125, 0.8)'
    }
})

export default BooksAbout;
