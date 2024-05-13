import {StyleSheet} from 'react-native';

const LAYOUT_STYLES = StyleSheet.create({
  flexOne: {flex: 1},
  flexDirectionRow: {flexDirection: 'row'},
  flexDirectionColumn: {flexDirection: 'column'},

  displayInline: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  centerItems: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerItemsColumn: {
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'center',
  },

  spaceBetweenColumns: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },

  spaceBetweenRows: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },

  spaceAround: {justifyContent: 'space-between'},
  spaceBetween: {justifyContent: 'space-between'},

  justifyEnd: {justifyContent: 'flex-end'},
  justifyStart: {justifyContent: 'flex-start'},

  alignSelfCenter: {alignSelf: 'center'},
  alignSelfLeft: {alignSelf: 'flex-start'},
  alignSelfRight: {alignSelf: 'flex-end'},
  alignItemsCenter: {alignItems: 'center'},
});

export {LAYOUT_STYLES};
