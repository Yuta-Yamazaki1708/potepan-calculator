//クラス宣言
class Calculator {
  constructor() {
    this.result = "0";
  }
  ac() {
    this.result = "0";
  }
} 

//クリックボタンイベント時の関数
function clickBtn(target) {
  let targetValue = target.innerHTML
//AC押した時発動  
  if (targetValue == "AC") {
    calculator.ac();
    pointOn();
//＝押した時発動
  } else if (targetValue == "=") {
    calculator.result = eval(calculator.result).toString();
    if (calculator.result.indexOf(".")  >-1){
      pointOff();
    } else {
      pointOn();
      }
//+-*/押した時発動
  } else if (targetValue == "+" || targetValue == "-" || targetValue == "*" || targetValue == "/") {
    symbol(calculator.result, targetValue);
//小数点押した時に発動
  } else if (targetValue ==".") {
    symbol(calculator.result, targetValue)
    pointOff();
//数字押した時発動
  } else {
    if (calculator.result.slice(-1) == "+" || calculator.result.slice(-1) == "-" || calculator.result.slice(-1) == "*" || calculator.result.slice(-1)== "/") {
      pointOn();
    } else {
      ;
    }
    if (calculator.result == "0") {
      calculator.result = targetValue;
    } else {
      calculator.result += targetValue;
    }
  }
  updateNumber();
}

//計算結果を更新する関数
function updateNumber() {
  $result.text(calculator.result); 
}
//+-*/を連続で押した時に発動
function symbol(a, b) {
  let lastLetter = a.slice(-1);
  if (lastLetter == "+" || lastLetter == "-" || lastLetter == "*" || lastLetter == "/" || lastLetter == ".") {
    a = a.slice(0, -1) + b;
  } else {
    a += b;
  }
  return calculator.result = a;
}
//小数点ボタンの制御
function pointOff() {
  $point.attr("disabled", "true");
}

function pointOn() {
  $point.removeAttr("disabled");
}

//要素をjqueryで取得
const $result = $("#result");
const $point = $("#point");
//計算機オブジェクトをインスタンス化
const calculator = new Calculator;
