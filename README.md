# React Native - Image Cache Component

A React Native based component for Image Cache in your application. 

## Getting started

- [Demo](#demo)
- [Installation](#installation)
- [Supported versions](#supported-versions)
- [Usage](#usage)
- [Props](#props)
- [Want to Contribute?](#want-to-contribute?)
- [Collection of Components](#collection-of-components)
- [Changelog](#changelog)
- [License](#license)
- [Keywords](#keywords)

## Demo

[![](ImageCache.png)](https://github.com/weblineindia/React-Native-Image-Cache/blob/master/ImageCache.png)

## Installation

`$ npm install rn-weblineindia-image-cache --save`

`$ npm install react-native-fs --save`

`$ npm install md5`

We have used react-native-fs to handle file system access in this package and it requires an extra step during the installation.

Use npm install md5 to handle file name store and access.

## Supported versions

We have tested this component in ReactNative 0.60 - 0.66.4. You can still use it in other versions.

## Usage

```javascript
import ImageCacheComponent from 'rn-weblineindia-image-cache';

 <ImageCacheComponent
  sourceUrl={'imageURL'}
  resizeMode={'contain'}
  imageStyle={{ flex: 1 }}
  placeholderImage={require('thumbImage')}
  activityIndicatorSize={'small'}
  activityIndicatorColor={'red'}
  activityIndicatorStyle={{ justifyContent: 'center', alignItems: 'center' }}
  />
```

Here is a sample screen in which you can implement the image-cache Component

```javascript
 <ImageCacheComponent
  sourceUrl={'imageURL'}
  resizeMode={'contain'}
  imageStyle={{ flex: 1 }}
  placeholderImage={require('../Image/test.png')}
  activityIndicatorSize={'small'}
  activityIndicatorColor={'red'}
  activityIndicatorStyle={{ justifyContent: 'center', alignItems: 'center' }}
  />
```

## Props

| **Props**                 | **Type** | **Required** | **Description**                                                               |
|---------------------------|----------|--------------|-------------------------------------------------------------------------------|
| sourceUrl                 | `string` | yes          | URL for fetch photo                                                           |
| resizeMode                | `string` | no           | cover,contain,stretch,repeat,center. Default contain                          |
| imageStyle                | `object` | no           | Apply style for image, Default is flex:1                                      |
| placeholderImage          | `string` | no           | To show default image when image has issue.Required local image path.         |
| activityIndicatorSize     | `string` | no           | small,large, Default is small                                                 |
| activityIndicatorColor    | `string` | no           | foreground color for indicator                                                |
| activityIndicatorStyle    | `string` | no           | Apply style for indicator, Default is center of element                       |


-----

## Want to Contribute?

- Created something awesome, made this code better, added some functionality, or whatever (this is the hardest part).
- [Fork it](http://help.github.com/forking/).
- Create new branch to contribute your changes.
- Commit all your changes to your branch.
- Submit a [pull request](http://help.github.com/pull-requests/).

-----

## Collection of Components

We have built many other components and free resources for software development in various programming languages. Kindly click here to view our [Free Resources for Software Development](https://www.weblineindia.com/software-development-resources.html).

------

## Changelog

Detailed changes for each release are documented in [CHANGELOG.md](./CHANGELOG.md).

------

## License

[MIT](LICENSE)

[mit]: https://github.com/weblineindia/React-Native-Image-Cache/blob/master/LICENSE

------

### Keywords

 rn-weblineindia-image-cache, react-native-image-cache, image-cache, react-native, image-caching, react-image-caching
