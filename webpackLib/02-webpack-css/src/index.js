import bar from "./bar.js";
import styles from "./index.less";

const foo = () => {
  console.log("foo is called!!!!");
};
foo();

const cDiv = document.createElement("div");
cDiv.innerHTML = "hello world";
cDiv.classList.add(styles.cDiv);
document.body.appendChild(cDiv);

bar();
