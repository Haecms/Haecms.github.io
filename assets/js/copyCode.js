const codeBlocks = document.querySelectorAll(
  ".code-header  + .highlighter-rouge"
);
const copyCodeButtons = document.querySelectorAll(".copy-code-btn");

copyCodeButtons.forEach((copyCodeButton, index) => {
  const code = codeBlocks[index].innerText;
  let id;

  copyCodeButton.addEventListener("click", () => {
    window.navigator.clipboard.writeText(code);


    const span = copyCodeButton;
    // .querySelector("div").querySelector(".copy-code-btn");
    span.innerText = "복사됨";

    if (id) {
      clearTimeout(id);
    }

    id = setTimeout(() => {
      span.innerText = "복사하기";
    }, 2000);
  });
});
