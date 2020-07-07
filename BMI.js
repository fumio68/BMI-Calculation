// BMI計算オブジェクト
class BMI {
  // コンストラクタ。引数は身長と体重。
  constructor(height = 0, weight = 0) {
    this.height = height;
    this.weight = weight;
  }

  // BMIを計算するメソッド。
  getBMI() {
    // BMIを計算
    let bmi = this.weight / Math.pow(this.height/100, 2);

    // 小数点第2位を四捨五入して小数点以下一桁表示に。
    bmi = bmi * 10;
    bmi = Math.round(bmi);
    bmi = bmi/10;
    // BMIをリターン。
    return bmi;
  }

  // アドバイスを生成するメソッド。
  getAdvice() {
    // BMIを計算
    let bmi = this.weight / Math.pow(this.height/100, 2);
    bmi = Math.round(bmi);
    // 理想体重を計算
    let idealWeight = 22 * Math.pow(this.height/100, 2);

    // 理想体重の整数値を作成
    idealWeight = Math.round(idealWeight);

    // アドバイス用の変数を用意
    let adviceMessage = "理想体重です。現状を維持しましょう！";

    // 条件分岐
    if(bmi > 22) {
      adviceMessage = "太っています。" + idealWeight + "kgを目指しましょう。";
    } else if(bmi < 22) {
      adviceMessage = "痩せています。" + idealWeight + "kgを目指しましょう。";
    }

    // アドバイス文字列をリターン。
    return adviceMessage;

  }
}
