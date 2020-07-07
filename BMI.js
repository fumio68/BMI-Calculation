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
}
