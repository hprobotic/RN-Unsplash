import React, { Component } from 'react';
import { Text, View, ListView, Image, Button, RefreshControl } from 'react-native';
import styles from '../styles';

const latestImageEnpoint = 'https://api.unsplash.com/photos/?client_id=c3ff8c7550851dedc2e73576d428a4d0547d7193c7e56429891ee30e8c04ebd1&page=';
let _postData = [];
class Welcome extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([]),
      isFirstPage: true,
      currentPage: 1,
      refreshing: false,
    };
  };
  static navigationOptions = {
    title: 'Unsplash Feed',
    tabBarIcon: () => (
      <Image
        style={styles.tabBarIcon}
        source={require('../images/home.png')}
      />
    ),
    headerRight: <Image
        style={styles.rightBarButton}
        source={require('../images/grid.png')}
      />,
    tabBarLabel: 'Home',
  };

  getLatestImages() {
    return fetch(latestImageEnpoint + this.state.currentPage)
    .then((response) => response.json()
    .then((responseJSON) => {
      console.log(responseJSON);
      _postData = _postData.concat(responseJSON);
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(_postData),
        isFirstPage: false,
        currentPage: this.state.currentPage + 1,
      });
    }).catch((error) => {
      console.error(error);
    }));
  }
  _renderRow(rowData) {
    console.log(rowData.urls.regular);
    return (
      <View style={styles.item}>
        <View style={styles.authorInfo}>
          <Image style={styles.authorAvatar} source={{uri: rowData.user.profile_image.large}}/>
          <Text style={styles.authorName}>{rowData.user.name}</Text>
        </View>
        <Image style={styles.itemImage}
          source={{uri: rowData.urls.regular}}
        />
        <View style={styles.feedBack}>
          <View style={styles.colMd6}>
            <View style={styles.likeButton}>
              <Image
                style={styles.likeIcon}
                source={require('../images/love.png')}
              />
              <Text style={styles.likeCount}>
                {rowData.likes}
              </Text>
            </View>
          </View>
          <View style={[ styles.colMd6, styles.floatL ]}>
            <View style={styles.buttonIconOnly}>
              <Image
                style={styles.buttonIcon}
                source={require('../images/add.png')}
              />
            </View>
            <View style={styles.buttonIconOnly}>
              <Image
                style={styles.buttonIcon}
                source={require('../images/save.png')}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }

  _renderFooter(metaData) {

  }

  _onEndReached(metaData) {
    this.getLatestImages();
  }

  _onRefresh(metaData) {
    this.setState({
      isFirstPage: true,
      refreshing: true,
    });
    this.getLatestImages().then(() => {
      this.setState({refreshing: false});
    });
  }
  componentWillMount() {
    this.getLatestImages();
  }
  render() {
    return (
      <View style={styles.containerView}>
        <ListView
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh.bind(this)}
            />
          }
          enableEmptySections
          contentContainerStyle={styles.listContainer}
          dataSource={this.state.dataSource}
          renderRow={this._renderRow.bind(this)}
          renderFooter={this._renderFooter.bind(this)}
          onEndReached={this._onEndReached.bind(this)}
        />
      </View>
    );
  }
};

export default Welcome;
