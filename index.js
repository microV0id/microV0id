/* 1 */
// var franc = require("franc");
// const langs = require("langs");
// const colors = require("colors");

// const input = process.argv[2];
// const langCode = franc(input);

// if (langCode === "und") {
//   console.log("알아볼 수 없는 단어입니다. 다른 샘플을 입력하세요".red);
// } else {
//   const lang = langs.where("3", langCode);
//   console.log(`Our best guess is: ${lang.name}`.green);
// }
// ===> 위 코드를 실행했을 때 오류가 발생한다.

/* 예전 코드랑 현재 코드가 맞지 않아 새롭게 코드를 작성해야 함 
    chatGPT에 알아본 결과 아래와 같은 문제와 해결책을 제시해줌. */
// ========================================
// 해당 오류는 ES Module과 CommonJS module의 호환성 문제로 발생합니다.

// franc 모듈이 ES Module로 작성되어 있기 때문에 CommonJS module인
// index.js에서 require()를 사용할 수 없는 문제가 발생한 것입니다.

// 해결 방법으로는 dynamic import를 사용하는 것입니다.
// dynamic import를 사용하면 ES Module에서 export한 함수를
// CommonJS module에서도 사용할 수 있습니다.

// 다음은 오류를 수정한 코드입니다.

/* 2 */
// const langs = require("langs");
// const colors = require("colors");

// (async () => {
//   const franc = await import("franc");
//   const input = process.argv[2];
//   const langCode = franc.default(input);

//   if (langCode === "und") {
//     console.log("알아볼 수 없는 단어입니다. 다른 샘플을 입력하세요".red);
//   } else {
//     const lang = langs.where("3", langCode);
//     console.log(`Our best guess is: ${lang.name}`.green);
//   }
// })();

// 위 코드에서는 dynamic import를 사용하여 franc 모듈을 가져옵니다.
// franc 모듈을 가져올 때는 import("franc") 형태로 가져올 수 있습니다.
// franc 모듈은 default export를 사용하므로
// franc.default()를 사용하여 함수를 호출합니다.

// 또한, 코드 전체를 async function으로 감싸고
// 즉시 실행 함수로 만들어야 합니다.
// 이유는 dynamic import가 Promise를 반환하기 때문입니다.

// 위 코드를 실행하면 정상적으로 실행됩니다.

// 위 코드에서 코드 전체를 감싸는 이유는
// JavaScript의 즉시 실행 함수(IIFE, Immediately Invoked Function Expression)
// 형식으로 작성되어 있기 때문.

// 즉시 실행 함수란 함수를 선언하자마자 바로 실행되는 함수로,
// 함수를 선언하고 실행하는 코드를 괄호로 감싸고,
// 그 뒤에 추가로 괄호를 적어줌으로써 함수를 즉시 실행시키는 방식입니다.

// 위 코드에서도 마지막 줄에 괄호로 감싸진 함수가 존재하는데,
// 이는 해당 함수를 선언하자마자 즉시 실행시키는 것을 의미합니다.

// 괄호를 사용하여 즉시 실행 함수를 작성하는 이유는 전역 스코프를
// 오염시키지 않고 함수 내부에서 변수를 선언하여
// 사용할 수 있기 때문입니다.
// 또한, 코드가 더욱 간결해지고 읽기 쉬워지는 장점도 있습니다

// 즉, 함수를 작성한 다음, 함수 외부에서 함수명을 다시 선언해서
// 실행할 필요 없이 선언하자마자 실행가능하다.
// ================
// 그런데!!! 2번 코드도 실행이 안된다 다시 물어보니까 아래와 같이 주더라

import franc from "franc";
import langs from "langs";
import colors from "colors";

const input = process.argv[2];
const langCode = franc(input);

if (langCode === "und") {
  console.log("Error! reEnter Please".red);
} else {
  const language = langs.where("3", langCode);
  console.log(`Our best guess is: ${language.name}`.green);
}
// 계속 안되네...
// 이 오류는 import 구문이 CommonJS 형식의 모듈에서 사용되어서 발생합니다.
// 즉, require() 구문 대신 import 구문을 사용하고 있지만,
// 현재 스크립트는 CommonJS 모듈 형식을 사용하고 있습니다.
// 이 문제를 해결하려면 스크립트 파일의 확장자를 .mjs로 바꾸거나,
// package.json 파일에서 "type": "module"을 추가하여 ECMAScript 모듈 형식을 사용하도록 설정해야 합니다.

// 따라서, .js 파일 확장자로 실행할 경우 CommonJS 모듈 형식을 사용해야 하며,
// require() 구문으로 모듈을 불러와야 합니다. franc 모듈의 경우,
// require("franc") 구문을 사용하여 모듈을 불러올 수 있습니다.
