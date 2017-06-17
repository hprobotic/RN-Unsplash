import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
const window = Dimensions.get('window');
const ralph = {
  primaryColor: '#ed3e44',
  secondaryColor: '#29292c',
  backgroundColor: 'white',
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#fff',
  },
  containerView: {
    backgroundColor: '#fff',
  },
  text: {
    color: ralph.secondaryColor,
  },
  floatL: {
    justifyContent: 'flex-end',
    marginRight: 12,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: ralph.backgroundColor,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    marginBottom: 5,
  },
  buttons: {
    flexDirection: 'row',
  },
  button: {
    margin: 5,
  },
  listContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  item: {
    marginBottom: 20,
  },
  itemImage: {
    height: 300,
    width: window.width,
  },
  authorInfo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    margin: 12,
  },
  authorAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  authorName: {
    alignSelf: 'center',
    marginLeft: 10,
  },
  feedBack: {
    padding: 12,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  colMd6: {
    flex: 1,
    flexDirection: 'row',
  },
  likeButton: {
    flexDirection: 'row',
    width: 68,
    height: 32,
    borderColor: '#ddd',
    borderRadius: 6,
    borderWidth: 1,
    padding: 11,
  },
  likeIcon: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  likeCount: {
    alignSelf: 'center',
    marginLeft: 12,
    fontWeight: 'bold',
    color: '#999',
    fontSize: 11,
  },
  buttonIconOnly: {
    width: 39,
    height: 32,
    borderColor: '#ddd',
    borderRadius: 6,
    borderWidth: 1,
    marginRight: 10,
  },
  buttonIcon: {
    flex: 1,
    width: 15,
    height: 15,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  tabBarIcon: {
    width: 26,
    height: 26,
  },
  rightBarButton: {
    width: 17,
    height: 17,
    marginRight: 12,
  },
});

export { ralph };
export default styles;
