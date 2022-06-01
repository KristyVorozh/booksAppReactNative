import React, {useState} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from "react-native";
import {BooksObjectType} from "../../types";
import { Rating } from 'react-native-ratings';

interface IBooks {
    booksValue: BooksObjectType
}

const Books: React.FC<IBooks> = ({booksValue}) => {
    const [rating, setRating] = useState(0);

    return (
        <ScrollView style={styles.books}>
            <View style={styles.booksContainer}>
                <Image style={{width: 70, height: 107}} source={booksValue.img} />
                <View style={styles.raiting}>
                    <Text style={styles.title}>{booksValue.title}</Text>
                    <Text style={styles.subtitle}>{booksValue.author}</Text>
                    <Rating
                        type='star'
                        ratingCount={5}
                        minValue={booksValue.star}
                        imageSize={20}
                        readonly={true}
                    />
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    books: {
        backgroundColor: 'white',
        padding: 20,
        marginHorizontal: 40,
        borderRadius: 15,
        marginVertical: 18
    },
    booksContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    raiting: {
        display: 'flex',
        alignItems: "flex-start",
        marginLeft: 20
    },
    title: {
        color: '#384F7D',
        fontSize: 18,
        width: 150,
        marginBottom: 5
    },
    subtitle: {
        fontSize: 14,
        color: 'rgba(56, 79, 125, 0.8)',
        marginBottom: 48
    }
})
export default Books;
