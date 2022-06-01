import React, {useEffect, useState} from 'react';
import {Image,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableHighlight,
    TouchableOpacity,
    View
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import {getBooks} from "../../server/axios/fetchers/booksFetchers";
import Books from "../BooksComponent";
import {BooksObjectType} from "../../types";
import BooksAbout from "../BooksAbout";

const Home = () => {
    const [books, setBooks] = useState<Array<BooksObjectType>>([]);
    const [filteredBooks, setFilteredBooks] = useState<Array<BooksObjectType>>([]);
    const [booksElement, setBooksElement] = useState<BooksObjectType>({});
    const [booksBoolean, setBooksBoolean] = useState(false);
    const [searchBooks, setSearchBooks] = useState<string>('');
    useEffect(() => {
        (async () => {
            let booksArray = await getBooks()
            setBooks(booksArray.movies)
            setFilteredBooks(booksArray.movies)
        })()
    }, [])
    const bookElement = (index: number) => {
        books?.forEach((v, indexBook) => {
            if (index === indexBook) {
                setBooksElement(v)
                setBooksBoolean(true)
            }
        })
    }
    const searchBooksFunction = (e: string) => {
        let newBook = [...books]
        if (e && e !== '')
            newBook = newBook?.filter((v)=> v.title?.includes(e) )
        console.log(newBook, e)
        setSearchBooks(e)
        setFilteredBooks(newBook)
    }
    return (
        <LinearGradient colors={['#EEECFF', '#FFFFFF']}>
        <ScrollView>
                <View style={styles.settingsHeader}>
                    {booksBoolean &&
                        <TouchableHighlight onPress={()=>setBooksBoolean(false)}>
                            <Image source={require('../../styles/img/arrow.png')} />
                        </TouchableHighlight>
                    }
                    <View>
                        <Text style={booksBoolean? styles.textHeader : styles.textHeaderBooks}>Book</Text>
                        {!booksBoolean &&
                            <View style={styles.inputContainer}>
                                <TextInput onChangeText={(e)=>searchBooksFunction(e)} style={styles.input} value={searchBooks} placeholder="Search"/>
                                <Image style={styles.inputLogo} source={require('../../styles/img/search.png')} />
                            </View>
                        }
                    </View>
                </View >
                <View style={styles.booksContainerElement}>
                    {!booksBoolean ?
                        <View style={styles.booksContainer}>
                            {filteredBooks?.map((v, index)=>
                                <TouchableOpacity onPress={()=>bookElement(index)} key={v.id}>
                                    <Books booksValue={v}/>
                                </TouchableOpacity>
                            )}
                        </View>
                        :
                        <View>
                            <BooksAbout booksElement={booksElement}/>
                        </View>
                    }
                </View>
        </ScrollView>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    booksContainerElement: {
        marginBottom: 140
    },
    settingsHeader: {
        backgroundColor: '#D45E5E',
        padding: 20,
        paddingTop: 60,
        paddingBottom: 40,
        borderBottomRightRadius: 100,
        borderBottomLeftRadius: 100,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        zIndex: 1,
    },
    textHeader: {
        fontFamily: 'CircularStd-Bold',
        fontSize: 19,
        color: 'white',
        marginLeft: 120
    },
    textHeaderBooks: {
        fontFamily: 'CircularStd-Bold',
        fontSize: 19,
        color: 'white',
        marginLeft: 141
    },
    input: {
        width: 300,
        borderRadius: 10,
        height: 50,
        backgroundColor: 'white',
        paddingLeft: 40
    },
    inputContainer:{
        position: "absolute",
        marginTop: 40,
        marginLeft: 25,
    },
    inputLogo: {
        marginTop: -33,
        marginLeft: 15
    },
    booksContainer: {
        marginTop: 50
    }
});


export default Home;
