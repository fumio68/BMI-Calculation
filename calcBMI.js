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
