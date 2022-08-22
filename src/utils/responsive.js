import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const scaleW = (size) => (width / guidelineBaseWidth) * size;
const scaleH = (size) => (height / guidelineBaseHeight) * size;
const fontScale = (size, factor = 0.5) => size + (scaleW(size) - size) * factor;

export { scaleW, scaleH, fontScale };
