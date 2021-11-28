import React from 'react'
import { Image } from 'react-native'


const ImagemCapa = (props) => {

    const tamanho = props.tamanho ? props.tamanho : 300

    return props.foto ?
        <Image
            style={{ height: tamanho, margin: 5 }}
            source={{ uri: 'https://image.tmdb.org/t/p/w500/' + props.foto }}
        /> :
        <Image
            style={{ height: tamanho, width: '100%', margin: 5 }}
            source={require('../../assets/img/404.jpg')}
        />
}

export default ImagemCapa