// 計算ボタンがクリックされた時の処理関数。
function onCalcBMIButtonClick() {

  // 入力された要素の取得。
  let heightInput = document.querySelector("#heightInput");
  let height = heightInput.value;
  let weightInput = document.querySelector("#weightInput");
  let weight = weightInput.value;

  // BMIオブジェクトを生成
  let bmiObj = new BMI(height, weight);
  // BMIを取得
  let bmi = bmiObj.getBMI();

  // BMIを表示するspan要素を取得
  let bmiResult = document.querySelector("#bmiResult");

  // BMIを表示
  bmiResult.textContent = bmi;

  // アドバイスを取得
  let advice = bmiObj.getAdvice();
  // アドバイスを表示
  let adviceMessage = document.querySelector("#adviceMessage");
  adviceMessage.textContent = advice;

  // 結果を表示するp要素を取得してクラスを削除
  let resultMessage = document.querySelector("#resultMessage");
  resultMessage.classList.remove("displayNone");
}

window.addEventListener("DOMContentLoaded", function() {

  // 身長のinput要素を取得。
  let heightInput = document.querySelector("#heightInput");
  // 身長入力欄が変更された時の処理を登録。
  heightInput.addEventListener("input", checkInput);
  // 身長変更欄からフォーカスが外れた時の処理を登録
  heightInput.addEventListener("blur", checkInput);

  // 体重版
  let weightInput = document.querySelector("#weightInput");
  weightInput.addEventListener("input", checkInput);
  weightInput.addEventListener("blur", checkInput);

  // バリデーション用関数
  function checkInput() {
    // 計算ボタンを有効にするかのフラグ
    let buttonEnabled = true;

    // 身長の値を取得して数値に変換
    let heightStr = heightInput.value;
    let height =Number(heightStr);

    // メッセージを表示するspanを取得
    let heightInputMsg = document.querySelector("#heightInputMsg");

    // 条件分岐
    if(heightStr.length === 0) {
      buttonEnabled = false;
      heightInputMsg.textContent = "身長を入力してください。";
    } else if(!isFinite(height)) {
      buttonEnabled = false;
      heightInputMsg.textContent = "身長には数値を入力してください。";
    } else if(height <= 0) {
      buttonEnabled = false;
      heightInputMsg.textContent = "身長には正数を入力してください。";
    } else {
      heightInputMsg.textContent = "";
    }

    // 体重版
    let weightStr = weightInput.value;
    let weight =Number(weightStr);

    // メッセージを表示するspanを取得
    let weightInputMsg = document.querySelector("#weightInputMsg");

    // 条件分岐
    if(weightStr.length === 0) {
      buttonEnabled = false;
      weightInputMsg.textContent = "体重を入力してください。";
    } else if(!isFinite(weight)) {
      buttonEnabled = false;
      weightInputMsg.textContent = "体重には数値を入力してください。";
    } else if(weight <= 0) {
      buttonEnabled = false;
      weightInputMsg.textContent = "体重には正数を入力してください。";
    } else {
      weightInputMsg.textContent = "";
    }

    // 計算ボタン要素を取得
    let calcBMIButton = document.querySelector("#calcBMIButton");
    if(buttonEnabled) {
      calcBMIButton.removeAttribute("disabled");
    }else {
      calcBMIButton.setAttribute("disabled", "disabled");
    }
  }

});
