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
  let targetValue = target.innerHTML;   //ボタンの値入手
  console.log(targetValue);
  if (targetValue == "+" || targetValue == "-" || targetValue == "*" || targetValue == "/" || targetValue == ".") {         //演算子を連続で押せないようにする条件分岐
    let sliceResult = calculator.result.slice(-1);
    if (sliceResult == "+" || sliceResult == "-" || sliceResult == "*" || sliceResult == "/" || sliceResult == ".") {
      calculator.result = calculator.result.slice(0, -1) + targetValue;
      updateNumber();
    } else {
      calculator.result += targetValue;
      updateNumber();
    }
  } else if (targetValue == "AC") {                   //AC押した時に発動
    calculator.ac()
    updateNumber();
  } else if (targetValue == "=") {                    //＝押した時に発動
    calculator.result = eval(calculator.result);
    updateNumber();
  } else {                                            //その他押した時に発動
      if (calculator.result === "0" ) {
        calculator.result = targetValue;
        updateNumber();
      } else {
         calculator.result += targetValue;
         updateNumber();
        }
    }
}

//計算結果を更新する関数
function updateNumber() {
  $result.text(calculator.result); 
}

//result要素をjqueryで取得
const $result = $("#result")
//計算機オブジェクトをインスタンス化
const calculator = new Calculator;
