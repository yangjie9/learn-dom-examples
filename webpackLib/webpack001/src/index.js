const foo = () => {
  console.log("foo is called!!!!");
};
foo();
document.body.setAttribute("style", "background-color: #000000; color:yellow");

const pDom = document.getElementsByTagName("p");

for (let i = 0; i < pDom.length; i++) {
  pDom[i].style.cssText = "background-color: red; color: white";
}
