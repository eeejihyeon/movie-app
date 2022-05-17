import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({ text }) {
  return <button className={styles.btn}>{text}</button>;
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};
export default Button;

// Component render

//// Prop types install ////
// 터미널 npm i prop-types
// 사용하고자 하는 .js에 import PropTypes from "prop-types"
// Component.propTypes = { text: PropTypes.string ... }

//// CSS ////
// 1. Global CSS style
// style.css 생성 - index.js에 import "./style.css"
//  - 모두 같은 css를 받게 된다.
//  - className 따로 줘서 따로 css 줘야하는 불편함이 있다.
// 2. CSS module
// Component.module.css 생성 - Component.js에 import styles from "./Component.module.css"
//  - tag에 className={styles.name}
//  - 랜덤 className을 부여해준다.
//  - 같은 className을 사용해도 해당 Component.js에 import된 .css의 랜덤하게 붙은 className 가져오기 때문에 따로 원하는 스타일 적용 가능하다.
