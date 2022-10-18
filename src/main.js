import "./css/index.css";

const ccBgColor01 = document.querySelector("div.cc-bg > svg > g > g:nth-child(1) > path");
const ccBgColor02 = document.querySelector("div.cc-bg > svg > g > g:nth-child(2) > path");
const ccBgColor03 = document.querySelector("div.cc-bg > svg > g > g:nth-child(3) > path");
const ccBgLogo01 = document.querySelector(".cc-logo > span:nth-child(2) > img");

function setCardType(type) {
  const colors = {
    visa: ["#436d99", "#2d57f2"],
    mastercard: ["#df6f29", "#c69347"],
    american: ["#0077A6", "#FFFFFF"],
    default: ["black", "gray"],
  };

  ccBgColor01.setAttribute("fill", colors[type][0]);
  ccBgColor02.setAttribute("fill", colors[type][1]);
  ccBgLogo01.setAttribute("src", `cc-${type}.svg`);
}

// setCardType("american");
globalThis.setCardType = setCardType;
