import {TEXT_STYLES} from './text';
import {LAYOUT_STYLES} from './layout';
import {MARGIN_STYLES, PADDING_STYLES} from './spacing';

const COMMON_STYLES = {
  ...TEXT_STYLES,
  ...MARGIN_STYLES,
  ...PADDING_STYLES,
  ...LAYOUT_STYLES,
};

export {
  COMMON_STYLES,
  TEXT_STYLES,
  MARGIN_STYLES,
  PADDING_STYLES,
  LAYOUT_STYLES,
};
