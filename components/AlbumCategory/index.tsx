import React from 'react';
import { View, Text } from 'react-native';
import {Album} from "../../types";
import styles from './styles';

export type AlbumCategoryProps = {
    title: string,
    albums: [Album],

}

const AlbumCategory = (props: AlbumCategoryProps) => (
    <View>
        <Text style={styles.title}>{props.title}</Text>
    </View>
)


export default AlbumCategory