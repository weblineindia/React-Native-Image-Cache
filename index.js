/**
Author Name  :  WeblineIndia  |  https://www.weblineindia.com/

For more such software development components and code libraries, visit us at
https://www.weblineindia.com/software-development-resources.html 

Our Github URL : https://github.com/weblineindia
**/
import React, { Component } from 'react';
import { View, Image, ActivityIndicator } from 'react-native';
import RNFS from 'react-native-fs';
import styles from './Style';

var md5 = require('md5');

export default class ImageCacheComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cachedImagePath: null,
            isImageLoading: true
        };
        this.processSource = this.processSource.bind(this);
    }

    componentDidMount() {
        this.processSource(this.props.sourceUrl);
    }

    processSource(source) {
        if (source) {
            const url = md5(source)
            let path_name = RNFS.CachesDirectoryPath + '/' + url + '.jpg';
            RNFS.exists(path_name).then(exists => {
                if (exists) {
                    this.setState({ cachedImagePath: { uri: 'file://' + path_name }, isImageLoading: false })
                } else {
                    RNFS.downloadFile({
                        fromUrl: source,
                        toFile: path_name,
                        background: true,
                        discretionary: true,
                    })
                        .promise.then(res => {
                            this.setState({ cachedImagePath: { uri: 'file://' + path_name }, isImageLoading: false })
                        })
                        .catch(err => {
                            this.setState({ cachedImagePath: this.props.placeholderImage, isImageLoading: false })
                            console.log("error in photo download", err);
                        });
                }
            });
        } else {
            this.setState({ cachedImagePath: this.props.placeholderImage, isImageLoading: false })
        }
    }

    renderloader() {
        return (
            <ActivityIndicator
                style={this.props.activityIndicatorStyle || styles.defaultLoaderStyle}
                size={this.props.activityIndicatorSize}
                color={this.props.activityIndicatorColor}
            />
        )
    }

    renderImage() {
        return (
            <Image
                {...this.props}
                source={this.state.cachedImagePath}
                style={this.props.imageStyle || styles.defaultImageStyle}
                resizeMode={this.props.resizeMode || 'contain'}
            />
        )
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center' }} >
                {this.state.isImageLoading ?
                    this.renderloader()
                    :
                    this.renderImage()
                }
            </View>
        )
    }
}

