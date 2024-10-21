// /**
// Author Name  :  WeblineIndia  |  https://www.weblineindia.com/

// For more such software development components and code libraries, visit us at
// https://www.weblineindia.com/software-development-resources.html

// Our Github URL : https://github.com/weblineindia
// **/

import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Image,
  Platform,
  View,
  type ImageStyle,
  type StyleProp,
  type ViewStyle,
} from 'react-native';
import RNFS from 'react-native-fs';
import styles from './Style';

interface ImageCacheComponentProps {
  sourceUrl: string;
  placeholderImage: any;
  activityIndicatorStyle?: StyleProp<ViewStyle>;
  activityIndicatorSize?: number | 'small' | 'large';
  activityIndicatorColor?: string;
  imageStyle?: StyleProp<ImageStyle>;
  resizeMode?: 'cover' | 'contain' | 'stretch' | 'repeat' | 'center';
}

const ImageCacheComponent: React.FC<ImageCacheComponentProps> = ({
  sourceUrl,
  placeholderImage,
  activityIndicatorStyle,
  activityIndicatorSize = 'large',
  activityIndicatorColor = '#000',
  imageStyle,
  resizeMode = 'contain',
}) => {
  const [cachedImagePath, setCachedImagePath] = useState<any>(null);
  const [isImageLoading, setIsImageLoading] = useState(true);

  useEffect(() => {
    processSource(sourceUrl);
  }, [sourceUrl]);

  const getImgXtension = (uri: any) => {
    var basename = uri.split(/[\\/]/).pop();
    return /[.]/.exec(basename) ? /[^.]+$/.exec(basename) : undefined;
  };

  const processSource = async (source: string) => {
    if (source) {
      let url = getImgXtension(source);
      if (!url || !url.length) {
        console.log(`Couldn't load Image!`);
        return;
      }
      let path_name = `${RNFS.CachesDirectoryPath}/${url[0]}.jpg`;

      try {
        const exists = await RNFS.exists(path_name);
        if (exists) {
          if (Platform.OS === 'android') {
            setCachedImagePath({uri: 'file://' + path_name});
          } else {
            setCachedImagePath({uri: path_name});
          }
          setIsImageLoading(false);
        } else {
          await RNFS.downloadFile({
            fromUrl: source,
            toFile: path_name,
            background: true,
            discretionary: true,
          }).promise;

          if (Platform.OS === 'android') {
            setCachedImagePath({uri: 'file://' + path_name});

            // setCachedImagePath(placeholderImage);
          } else {
            setCachedImagePath({uri: path_name});

            // setCachedImagePath(path_name);
          }
          setIsImageLoading(false);
        }
      } catch (err) {
        console.log('error in photo download', err);
        setCachedImagePath(placeholderImage);
        setIsImageLoading(false);
      }
    } else {
      setCachedImagePath(placeholderImage);
      setIsImageLoading(false);
    }
  };


  const renderLoader = () => (
    <ActivityIndicator
      style={activityIndicatorStyle || styles.defaultLoaderStyle}
      size={activityIndicatorSize}
      color={activityIndicatorColor}
    />
  );

  const renderImage = () => {
    console.log('cachedImagePath ==>> ', cachedImagePath);
    
    return (
      <Image
        source={cachedImagePath}
        style={imageStyle || styles.defaultImageStyle}
        resizeMode={resizeMode}
      />
    );
  };

  return (
    <View style={styles.mainContainer}>
      {isImageLoading ? renderLoader() : renderImage()}
    </View>
  );
};

export default ImageCacheComponent;