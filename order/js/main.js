function changebox(){
	//まずBaseの選択内容を取得
	var baseState = document.form1.goods1.options[document.form1.goods1.selectedIndex].value;

	//Type, Customize, Optionのドロップボックスを取得
	//SizeとSNSは変更の予定なし
	var typeBox = document.getElementById('Type');
	var sizeBox = document.getElementById('Size');
	var customizeBox = document.getElementById('Customize');
	var optionBox = document.getElementById('Option');
	//SNS非表示
	var SNSBox = document.getElementById('SNS');
	//mail非表示
	var doui = document.getElementById('doui');
//copy非表示
	var button2 = document.getElementById('button2');

	// var BaseElement        = document.getElementById('Type'),
  //   resetButtonElement = document.getElementById('resetButton');

	//Baseの選択内容によって処理を分岐
	if (baseState=="none"){
		//Typeはボックス自体を非表示
		//Customizeもボックス自体を非表示
		//Optionもボックス自体を非表示

		//typeBox.style.display = "none";

		//ドロップボックスを非表示にする
		typeBox.disabled = true;
		sizeBox.disabled = true;
		customizeBox.disabled = true;
		optionBox.disabled = true;
		SNSBox.disabled = true;
		doui.disabled = true;
		button2.disabled = true;
	// 	resetButtonElement.onclick = function() {
	// 		BaseElement.reset();
	// };
	}
	if (baseState=="animal"){
		//Typeはシンプルと複雑
		//Customizeは選択肢すべて(3つ)
		//Optionは選択肢すべて(3つ)

		//ドロップボックスを復活させる
		typeBox.disabled = false;
		sizeBox.disabled = false;
		customizeBox.disabled = false;
		optionBox.disabled = false;
		SNSBox.disabled = false;
		doui.disabled = false;
		button2.disabled = false;
		//Typeボックスの選択肢の編集
		Num_typeBoxOptions = typeBox.options.length;//Type選択肢の数を取得
		if (Num_typeBoxOptions != 2){	//選択肢の数が2以外の時、変更
			for (let i=Num_typeBoxOptions; i>=0; i--) {
				typeBox.remove(i);
			}
			let typeOptSimple = document.createElement("option");
			typeOptSimple.value = "simple"
			typeOptSimple.text = "シンプル 基本料金"
			typeBox.add(typeOptSimple, null)

			let typeOptFukuzatsu = document.createElement("option");
			typeOptFukuzatsu.value = "fukuzatu"
			typeOptFukuzatsu.text = "複雑 +10,000yen"
			typeBox.add(typeOptFukuzatsu, null)
		}

		//Customizeボックスの選択肢の編集
		Num_customizeBoxOptions = customizeBox.options.length;//Type選択肢の数を取得
		if (Num_customizeBoxOptions != 3){	//選択肢の数が3以外の時、変更
			for (let i=Num_customizeBoxOptions; i>=0; i--) {
				customizeBox.remove(i);
			}
			let customizeOptHontai = document.createElement("option");
			customizeOptHontai.value = "hontai"
			customizeOptHontai.text = "本体のみ +0yen"
			customizeBox.add(customizeOptHontai, null)

			let customizeOptIttai = document.createElement("option");
			customizeOptIttai.value = "ittai"
			customizeOptIttai.text = "本体と衣装一体 +5,000yen"
			customizeBox.add(customizeOptIttai, null)

			let customizeOptBetu = document.createElement("option");
			customizeOptBetu.value = "betu"
			customizeOptBetu.text = "本体と衣装別(脱着可能) +10,000yen"
			customizeBox.add(customizeOptBetu, null)
		}

		//Optionボックスの選択肢の編集
		Num_optionBoxOptions = optionBox.options.length;//Type選択肢の数を取得
		if (Num_optionBoxOptions != 3){	//選択肢の数が3以外の時、変更
			for (let i=Num_optionBoxOptions; i>=0; i--) {
				optionBox.remove(i);
			}
			let optionOptNashi = document.createElement("option");
			optionOptNashi.value = "nashi"
			optionOptNashi.text = "なし"
			optionBox.add(optionOptNashi, null)

			let optionOptNuituke = document.createElement("option");
			optionOptNuituke.value = "nuituke"
			optionOptNuituke.text = "小物縫い付け 要相談"
			optionBox.add(optionOptNuituke, null)

			let optionOptDacyaku = document.createElement("option");
			optionOptDacyaku.value = "dacyaku"
			optionOptDacyaku.text = "小物脱着可 要相談"
			optionBox.add(optionOptDacyaku, null)
		}
	}
	if (baseState=="human2"){
		//Typeはボックス自体を非表示
		//Customizeは選択肢すべて(3つ)
		//Optionは選択肢すべて(3つ)
		
		//ドロップボックスを非表示にする
		typeBox.disabled = true;

		//ドロップボックスを復活させる
		sizeBox.disabled = false;
		customizeBox.disabled = false;
		optionBox.disabled = false;
		SNSBox.disabled = false;
		doui.disabled = false;
		button2.disabled = false;

		//Customizeボックスの選択肢の編集
		Num_customizeBoxOptions = customizeBox.options.length;//Type選択肢の数を取得
		if (Num_customizeBoxOptions != 3){	//選択肢の数が3以外の時、変更
			for (let i=Num_customizeBoxOptions; i>=0; i--) {
				customizeBox.remove(i);
			}
			let customizeOptHontai = document.createElement("option");
			customizeOptHontai.value = "hontai"
			customizeOptHontai.text = "本体のみ +0yen"
			customizeBox.add(customizeOptHontai, null)

			let customizeOptIttai = document.createElement("option");
			customizeOptIttai.value = "ittai"
			customizeOptIttai.text = "本体と衣装一体 +5,000yen"
			customizeBox.add(customizeOptIttai, null)

			let customizeOptBetu = document.createElement("option");
			customizeOptBetu.value = "betu"
			customizeOptBetu.text = "本体と衣装別(脱着可能) +10,000yen"
			customizeBox.add(customizeOptBetu, null)
		}

		//Optionボックスの選択肢の編集
		Num_optionBoxOptions = optionBox.options.length;//Type選択肢の数を取得
		if (Num_optionBoxOptions != 3){	//選択肢の数が3以外の時、変更
			for (let i=Num_optionBoxOptions; i>=0; i--) {
				optionBox.remove(i);
			}
			let optionOptNashi = document.createElement("option");
			optionOptNashi.value = "nashi"
			optionOptNashi.text = "なし"
			optionBox.add(optionOptNashi, null)

			let optionOptNuituke = document.createElement("option");
			optionOptNuituke.value = "nuituke"
			optionOptNuituke.text = "小物縫い付け 要相談"
			optionBox.add(optionOptNuituke, null)

			let optionOptDacyaku = document.createElement("option");
			optionOptDacyaku.value = "dacyaku"
			optionOptDacyaku.text = "小物脱着可 要相談"
			optionBox.add(optionOptDacyaku, null)
		}
	}
	if (baseState=="human2.5"){
		//Typeはボックス自体を非表示
		//Customizeは「本体のみ」と「本体と衣装別」
		//Optionは選択肢すべて(3つ)
		
		//ドロップボックスを非表示にする
		typeBox.disabled = true;

		//ドロップボックスを復活させる
		sizeBox.disabled = false;
		customizeBox.disabled = false;
		optionBox.disabled = false;
		SNSBox.disabled = false;
		doui.disabled = false;
		button2.disabled = false;

		//Customizeボックスの選択肢の編集
		Num_customizeBoxOptions = customizeBox.options.length;//customize選択肢の数を取得
		if (Num_customizeBoxOptions != 2){	//選択肢の数が2以外の時、変更
			for (let i=Num_customizeBoxOptions; i>=0; i--) {
				customizeBox.remove(i);
			}
			let customizeOptHontai = document.createElement("option");
			customizeOptHontai.value = "hontai"
			customizeOptHontai.text = "本体のみ +0yen"
			customizeBox.add(customizeOptHontai, null)

			let customizeOptBetu = document.createElement("option");
			customizeOptBetu.value = "betu"
			customizeOptBetu.text = "本体と衣装別(脱着可能) +10,000yen"
			customizeBox.add(customizeOptBetu, null)
		}

		//Optionボックスの選択肢の編集
		Num_optionBoxOptions = optionBox.options.length;//option選択肢の数を取得
		if (Num_optionBoxOptions != 3){	//選択肢の数が3以外の時、変更
			for (let i=Num_optionBoxOptions; i>=0; i--) {
				optionBox.remove(i);
			}
			let optionOptNashi = document.createElement("option");
			optionOptNashi.value = "nashi"
			optionOptNashi.text = "なし"
			optionBox.add(optionOptNashi, null)

			let optionOptNuituke = document.createElement("option");
			optionOptNuituke.value = "nuituke"
			optionOptNuituke.text = "小物縫い付け 要相談"
			optionBox.add(optionOptNuituke, null)

			let optionOptDacyaku = document.createElement("option");
			optionOptDacyaku.value = "dacyaku"
			optionOptDacyaku.text = "小物脱着可 要相談"
			optionBox.add(optionOptDacyaku, null)
		}
	}
	if (baseState=="simple"){
		//Typeはボックス自体を非表示
		//Customizeはボックス自体を非表示
		//Optionは選択肢すべて(3つ)

		//ドロップボックスを非表示にする
		typeBox.disabled = true;
		customizeBox.disabled = true;

		//ドロップボックスを復活させる
		sizeBox.disabled = false;
		optionBox.disabled = false;
		SNSBox.disabled = false;
		doui.disabled = false;
		button2.disabled = false;

		//Optionボックスの選択肢の編集
		Num_optionBoxOptions = optionBox.options.length;//option選択肢の数を取得
		if (Num_optionBoxOptions != 3){	//選択肢の数が3以外の時、変更
			for (let i=Num_optionBoxOptions; i>=0; i--) {
				optionBox.remove(i);
			}
			let optionOptNashi = document.createElement("option");
			optionOptNashi.value = "nashi"
			optionOptNashi.text = "なし"
			optionBox.add(optionOptNashi, null)

			let optionOptNuituke = document.createElement("option");
			optionOptNuituke.value = "nuituke"
			optionOptNuituke.text = "小物縫い付け 要相談"
			optionBox.add(optionOptNuituke, null)

			let optionOptDacyaku = document.createElement("option");
			optionOptDacyaku.value = "dacyaku"
			optionOptDacyaku.text = "小物脱着可 要相談"
			optionBox.add(optionOptDacyaku, null)
		}
	}
}

window.onload = function() {
	//var ccc = document.getElementById("doui");
	//ccc.disabled = true; // DOM 構築後に実行したい関数の呼び出し

	//最初に選択肢を変更
	changebox();
};

// 	$(function() {
//   $('#js-copybtn').on('click', function(){
//     //　テキストエリアを選択
//     $('#js-copytext').select();
//     // コピー
//     document.execCommand('copy');
//     // アラート文の表示
//     $('#js-copyalert').show().delay(2000).fadeOut(400);
//   });
// });

//copyボタン
document.getElementById('button2').onclick = () => {
	// base
	var price1 = document.form1.goods1.options[document.form1.goods1.selectedIndex].value;

	// type
	var price2 = document.form1.goods2.options[document.form1.goods2.selectedIndex].value;

	// size
	var price3 = document.form1.goods3.options[document.form1.goods3.selectedIndex].value;

	// pieces
	var price4 = document.form1.goods4.options[document.form1.goods4.selectedIndex].value;

	// costume
	var price5 = document.form1.goods5.options[document.form1.goods5.selectedIndex].value;

	// option
	var price6 = document.form1.goods6.options[document.form1.goods6.selectedIndex].value;


	if (price1=="none"){
		price11=0;
	}
	if (price1=="animal"){
		price11=30000;
	}
	if (price1=="human2"){
		price11=40000;
	}
	if (price1=="human2.5"){
		price11=45000;
	}
	if (price1=="simple"){
		price11=10000;
	}
	if (price2=="simple"){
		price12=0;
	}
	if (price2=="fukuzatu"){
	price12=10000;
	}
	if (price3=="kihon"){
	price13=0;
	}
	if (price3=="syou"){
	price13=5000;
	}
	if (price3=="cyuu"){
	price13=10000;
	}
	if (price3=="dai"){
	price13=0;
	}
	if (price4=="hontai"){
	price14=0;
	}
	if (price4=="ittai"){
	price14=5000;
	}
	if (price4=="betu"){
	price14=10000;
	}
	if (price5=="nashi"){
	price15=0;
	}
	if (price5=="nuituke"){
	price15=0;
	}
	if (price5=="dacyaku"){
	price15=0;
	}
	if (price6=="ok"){
	price16=0;
	}
	if (price6=="ng"){
	price16=0;
	}


	// メール本文
	var honbun = "";
	//1行目
	if (price1=="none"){
	honbun += "Base：注文できません選択してください"
	}
	if (price1=="animal"){
	 honbun += "Base：動物 30,000yen"
	}
	if (price1=="human2"){
	honbun += "Base：人A 40,000yen"
	}
	if (price1=="human2.5"){
	honbun += "Base：人B 45,000yen"
	}
	if (price1=="simple"){
		honbun += "Base：シンプル 10,000yen"
	}
	honbun += "\n"

	//2行目
	if (price2=="simple"){
		honbun += "Type：シンプル 0yen"
	}
	if (price2=="fukuzatu"){
		honbun += "Type：複雑 10,000yen"
	}
	honbun += "\n"

	//3行目
	if (price3=="kihon"){
		honbun += "Size：3~25cm 基本料金"
	}
	if (price3=="syou"){
		honbun += "Size：26~40cm +5,000yen"
	}
	if (price3=="cyuu"){
		honbun += "Size：41~60cm +10,000yen"
	}
	if (price3=="dai"){
		honbun += "Size：61~要相談"
	}
	honbun += "\n"

	//4行目
	if (price4=="hontai"){
		honbun += "Costume：本体のみ +0yen"
	}
	if (price4=="ittai"){
		honbun += "Costume：本体と衣装一体 +5,000yen"
	}
	if (price4=="betu"){
		honbun += "Costume：本体と衣装別(脱着可能) +10,000yen"
	}
	honbun += "\n"

	//5行目
	if (price5=="nashi"){
		honbun += "Option：なし + 0yen"
	}
	if (price5=="nuituke"){
		honbun += "Option：小物縫い付け 要相談"
	}
	if (price5=="dacyaku"){
		honbun += "Option：小物脱着可 要相談"
	}
	honbun += "\n"

	//6行目
	if (price6=="ok"){
		honbun += "SNS：記載OK"
	}
	if (price6=="ng"){
		honbun += "SNS：記載NG"
	}
	honbun += "\n"

	var total = price11 + price12 + price13 + price14 + price15 + price16;
honbun += "Total " + total + "yen" 

	navigator.clipboard.writeText(honbun).then(e => {
    alert('コピーできました');
  });	
}



//function zoopi(){
//	var ccc = document.getElementById("doui");
//	ccc.disabled = false;
//}

function bbb(){

// base
var price1 = document.form1.goods1.options[document.form1.goods1.selectedIndex].value;

// type
var price2 = document.form1.goods2.options[document.form1.goods2.selectedIndex].value;

// size
var price3 = document.form1.goods3.options[document.form1.goods3.selectedIndex].value;

// pieces
var price4 = document.form1.goods4.options[document.form1.goods4.selectedIndex].value;

// costume
var price5 = document.form1.goods5.options[document.form1.goods5.selectedIndex].value;

// option
var price6 = document.form1.goods6.options[document.form1.goods6.selectedIndex].value;

// メール本文
var honbun = "";
if (price1=="none"){
	honbun += " Base：注文できません選択してください"
	}
	if (price1=="animal"){
	 honbun += "Base：動物 30,000yen"
	}
	if (price1=="human2"){
	honbun += "Base：人A 40,000yen"
	}
	if (price1=="human2.5"){
	honbun += "Base：人B 45,000yen"
	}
	if (price1=="simple"){
		honbun += "Base：シンプル 10,000yen"
	}
	if (price2=="simple"){
		honbun += "%0D%0AType：シンプル 0yen"
	}
	if (price2=="fukuzatu"){
		honbun += "%0D%0AType：複雑 10,000yen"
	}
	if (price3=="kihon"){
		honbun += "%0D%0ASize：3~25cm 基本料金"
	}
	if (price3=="syou"){
		honbun += "%0D%0ASize：26~40cm +5,000yen"
	}
	if (price3=="cyuu"){
		honbun += "%0D%0ASize：41~60cm +10,000yen"
	}
	if (price3=="dai"){
		honbun += "%0D%0ASize：61~要相談"
	}
	if (price4=="hontai"){
		honbun += "%0D%0ACostume：本体のみ +0yen"
	}
	if (price4=="ittai"){
		honbun += "%0D%0ACostume：本体と衣装一体 +5,000yen"
	}
	if (price4=="betu"){
		honbun += "%0D%0ACostume：本体と衣装別(脱着可能) +10,000yen"
	}
	if (price5=="nashi"){
		honbun += "%0D%0AOption：なし + 0yen"
	}
	if (price5=="nuituke"){
		honbun += "%0D%0AOption：小物縫い付け 要相談"
	}
	if (price5=="dacyaku"){
		honbun += "%0D%0AOption：小物脱着可 要相談"
	}
	if (price6=="ok"){
		honbun += "%0D%0ASNS：記載OK"
	}
	if (price6=="ng"){
		honbun += "%0D%0ASNS：記載NG"
	}





// <tr>
// <td>Option</td>
// <td><select name="goods5" onChange="keisan()">
// <option value="nashi">なし</option>
// <option value="nuituke">小物縫い付け 要相談</option>
// <option value="dacyaku">小物脱着可 要相談</option>
// <!-- <option value="34000">4個  +34,000yen</option>
// <option value="32000">5個  +32,000yen</option> -->
// </select></td>
// </tr>

// <tr>
// <td>SNS</td>
// <td><select name="goods6" onChange="keisan()">
// <option value="ok">記載OK</option>
// <option value="ng">記載NG</option>
// </select></td>


	if (price1=="none"){
	price11=0;
}
if (price1=="animal"){
	price11=30000;
}
if (price1=="human2"){
	price11=40000;
}
if (price1=="human2.5"){
	price11=45000;
}
if (price1=="simple"){
	price11=10000;
}
if (price2=="simple"){
	price12=0;
}
if (price2=="fukuzatu"){
price12=10000;
}
if (price3=="kihon"){
price13=0;
}
if (price3=="syou"){
price13=5000;
}
if (price3=="cyuu"){
price13=10000;
}
if (price3=="dai"){
price13=0;
}
if (price4=="hontai"){
price14=0;
}
if (price4=="ittai"){
price14=5000;
}
if (price4=="betu"){
price14=10000;
}
if (price5=="nashi"){
price15=0;
}
if (price5=="nuituke"){
price15=0;
}
if (price5=="dacyaku"){
price15=0;
}
if (price6=="ok"){
price16=0;
}
if (price6=="ng"){
price16=0;
}



	// 合計を計算
	var total = price11 + price12 + price13 + price14 + price15 + price16;
	honbun += "%0D%0A" + "Total " + total + "yen" 


	document.location = "mailto:k.zoopi2012@gmail.com?subject=zoopiオーダーぬいぐるみ かんたんお見積り&body=" +   honbun + " %0D%0A%0D%0Aデータ添付をしてください"
}

function keisan(){

	// 設定開始

	// base
	var price1 = document.form1.goods1.options[document.form1.goods1.selectedIndex].value;

	// type
	var price2 = document.form1.goods2.options[document.form1.goods2.selectedIndex].value;

	// size
	var price3 = document.form1.goods3.options[document.form1.goods3.selectedIndex].value;

  // pieces
	var price4 = document.form1.goods4.options[document.form1.goods4.selectedIndex].value;

  // costume
	var price5 = document.form1.goods5.options[document.form1.goods5.selectedIndex].value;

  // option
	var price6 = document.form1.goods6.options[document.form1.goods6.selectedIndex].value;

	// 同じ値段の時同じ画像にならないように
	if (price1=="none"){
		price11=0;
	}
	if (price1=="animal"){
		price11=30000;
	}
	if (price1=="human2"){
		price11=40000;
	}
	if (price1=="human2.5"){
		price11=45000;
	}
	if (price1=="simple"){
		price11=10000;
	}
	if (price2=="simple"){
		price12=0;
	}
	if (price2=="fukuzatu"){
	price12=10000;
	}
	if (price3=="kihon"){
	price13=0;
	}
	if (price3=="syou"){
	price13=5000;
	}
	if (price3=="cyuu"){
	price13=10000;
	}
	if (price3=="dai"){
	price13=0;
	}
	if (price4=="hontai"){
	price14=0;
	}
	if (price4=="ittai"){
	price14=5000;
	}
	if (price4=="betu"){
	price14=10000;
	}
	if (price5=="nashi"){
	price15=0;
	}
	if (price5=="nuituke"){
	price15=0;
	}
	if (price5=="dacyaku"){
	price15=0;
	}
	if (price6=="ok"){
	price16=0;
	}
	if (price6=="ng"){
	price16=0;
	}



	

	// 合計を計算
	var total = price11 + price12 + price13 + price14 + price15 + price16;

	// 設定終了
	document.form1.field_total.value = "Total   " + total + "  yen  "; // 合計を表示

}

function imgChange(){
	// ===ドロップダウンボックスの中身を調べる===
	// base
	var price1 = document.form1.goods1.options[document.form1.goods1.selectedIndex].value;

	// type
	var price2 = document.form1.goods2.options[document.form1.goods2.selectedIndex].value;

	// size
	var price3 = document.form1.goods3.options[document.form1.goods3.selectedIndex].value;

  // pieces
	var price4 = document.form1.goods4.options[document.form1.goods4.selectedIndex].value;

  // costume
	var price5 = document.form1.goods5.options[document.form1.goods5.selectedIndex].value;

  // option
	var price6 = document.form1.goods6.options[document.form1.goods6.selectedIndex].value;
	// ===中身調べ終わり===

	// 選択肢に応じて画像を選択
	var divelement = document.getElementById("sampleimage");
	//Baseの画像を選択



	// 選択に応じて画像を切り替え
	if (price1=="none"){
		divelement.innerHTML = '<IMG src="img/sentaku.png" style="display: block; margin: auto;" name="imgsmp">';
	}

	if (price1=="animal"){
			if(price2=="simple"){
				divelement.innerHTML = '<IMG src="img/doubutu.png" style="display: block; margin: auto;" name="imgsmp">';


			if(price4=="hontai"){
				divelement.innerHTML = '<IMG src="img/doubutu.png" style="display: block; margin: auto;" name="imgsmp">';
				if(price5=="nuituke"){
          divelement.innerHTML = '<IMG src="img/SDHN.png" style="display: block; margin: auto;" name="imgsmp">';
				}
         if(price5=="dacyaku"){
           divelement.innerHTML = '<IMG src="img/SDHD.png" style="display: block; margin: auto;" name="imgsmp">';
			}
		}


			if(price4=="ittai"){
				divelement.innerHTML = '<IMG src="img/SDI.png" style="display: block; margin: auto;" name="imgsmp">';
        if(price5=="nuituke"){
          divelement.innerHTML = '<IMG src="img/SDIN.png" style="display: block; margin: auto;" name="imgsmp">';
         }
         if(price5=="dacyaku"){
           divelement.innerHTML = '<IMG src="img/SDID.png" style="display: block; margin: auto;" name="imgsmp">';
          }
			}
			if(price4=="betu"){
				divelement.innerHTML = '<IMG src="img/SDB.png" style="display: block; margin: auto;" name="imgsmp">';
        if(price5=="nuituke"){
          divelement.innerHTML = '<IMG src="img/SDBI.png" style="display: block; margin: auto;" name="imgsmp">';
				}
         if(price5=="dacyaku"){
           divelement.innerHTML = '<IMG src="img/SDBD.png" style="display: block; margin: auto;" name="imgsmp">';
			}
		}
    }
		





			if(price2=="fukuzatu"){
				divelement.innerHTML = '<IMG src="img/FD.png" style="display: block; margin: auto;" name="imgsmp">';
			
      if(price4=="hontai"){
				divelement.innerHTML = '<IMG src="img/FD.png" style="display: block; margin: auto;" name="imgsmp">';
				if(price5=="nuituke"){
          divelement.innerHTML = '<IMG src="img/FDHN.png" style="display: block; margin: auto;" name="imgsmp">';
				}
         if(price5=="dacyaku"){
           divelement.innerHTML = '<IMG src="img/FDHD.png" style="display: block; margin: auto;" name="imgsmp">';
			}
			}
        
			if(price4=="ittai"){
				divelement.innerHTML = '<IMG src="img/FDI.png" style="display: block; margin: auto;" name="imgsmp">';
        if(price5=="nuituke"){
          divelement.innerHTML = '<IMG src="img/FDIN.png" style="display: block; margin: auto;" name="imgsmp">';
         }
         if(price5=="dacyaku"){
           divelement.innerHTML = '<IMG src="img/FDID.png" style="display: block; margin: auto;" name="imgsmp">';
          }
			}

			if(price4=="betu"){
				divelement.innerHTML = '<IMG src="img/FDB.png" style="display: block; margin: auto;" name="imgsmp">';
        if(price5=="nuituke"){
          divelement.innerHTML = '<IMG src="img/FDBN.png" style="display: block; margin: auto;" name="imgsmp">';
				}
         if(price5=="dacyaku"){
           divelement.innerHTML = '<IMG src="img/FDBD.png" style="display: block; margin: auto;" name="imgsmp">';
          


					//  if(price5=="nuituke"){
					// 	divelement.innerHTML = '<IMG src="img/FDI.png" width="" height="" name="imgsmp">';
					//  }
					//  if(price5=="dacyaku"){
					// 	 divelement.innerHTML = '<IMG src="img/FDB.png" width="" height="" name="imgsmp">';
					// 	}
				

				}
			}
    }
  
			// if(price5=="nuituke"){
			// 	divelement.innerHTML = '<IMG src="img/hito3.png" width="" height="" name="imgsmp">';
			// }
			// if(price5=="dacyaku"){
			// 	divelement.innerHTML = '<IMG src="img/hito2.png" width="" height="" name="imgsmp">';
			// }
			

			
			// if(price2=="fukuzatu"){
			// 	divelement.innerHTML = '<IMG src="img/typedoubutufukuzatu.png" width="" height="" name="imgsmp">';
			// }

		
			// if(price5=="0"){
			// 	divelement.innerHTML = '<IMG src="img/doubutu.png" width="" height="" name="imgsmp">';
			// }
			// if(price5=="35000"){
			// 	divelement.innerHTML = '<IMG src="img/doubutu.png" width="" height="" name="imgsmp">';
			// }
	}

	

	// if(price2=="hontai"){
	// 			divelement.innerHTML = '<IMG src="img/Cdoubutufukuzatuhontaitoisyouittai.png" width="" height="" name="imgsmp">';
	// 		}

	if (price1=="human2"){
		if(price2=="simple"){
			divelement.innerHTML = '<IMG src="img/HA.png" style="display: block; margin: auto;" name="imgsmp">';


		if(price4=="hontai"){
			divelement.innerHTML = '<IMG src="img/HA.png" style="display: block; margin: auto;" name="imgsmp">';
			if(price5=="nuituke"){
				divelement.innerHTML = '<IMG src="img/HAN.png" style="display: block; margin: auto;" name="imgsmp">';
			}
			 if(price5=="dacyaku"){
				 divelement.innerHTML = '<IMG src="img/HAD.png" style="display: block; margin: auto;" name="imgsmp">';
		}
	}


		if(price4=="ittai"){
			divelement.innerHTML = '<IMG src="img/HAI.png" style="display: block; margin: auto;" name="imgsmp">';
			if(price5=="nuituke"){
				divelement.innerHTML = '<IMG src="img/HAIN.png" style="display: block; margin: auto;" name="imgsmp">';
			 }
			 if(price5=="dacyaku"){
				 divelement.innerHTML = '<IMG src="img/HAID.png" style="display: block; margin: auto;" name="imgsmp">';
				}
		}
		if(price4=="betu"){
			divelement.innerHTML = '<IMG src="img/HAB.png" style="display: block; margin: auto;" name="imgsmp">';
			if(price5=="nuituke"){
				divelement.innerHTML = '<IMG src="img/HABN.png" style="display: block; margin: auto;" name="imgsmp">';
			}
			 if(price5=="dacyaku"){
				 divelement.innerHTML = '<IMG src="img/HABD.png" style="display: block; margin: auto;" name="imgsmp">';
		}
	}
	}

	if(price2=="fukuzatu"){
		divelement.innerHTML = '<IMG src="img/HA.png" style="display: block; margin: auto;" name="imgsmp">';


	if(price4=="hontai"){
		divelement.innerHTML = '<IMG src="img/HA.png" style="display: block; margin: auto;" name="imgsmp">';
		if(price5=="nuituke"){
			divelement.innerHTML = '<IMG src="img/HAN.png" style="display: block; margin: auto;" name="imgsmp">';
		}
		 if(price5=="dacyaku"){
			 divelement.innerHTML = '<IMG src="img/HAD.png" style="display: block; margin: auto;" name="imgsmp">';
	}
}


	if(price4=="ittai"){
		divelement.innerHTML = '<IMG src="img/HAI.png" style="display: block; margin: auto;" name="imgsmp">';
		if(price5=="nuituke"){
			divelement.innerHTML = '<IMG src="img/HAIN.png" style="display: block; margin: auto;" name="imgsmp">';
		 }
		 if(price5=="dacyaku"){
			 divelement.innerHTML = '<IMG src="img/HAID.png" style="display: block; margin: auto;" name="imgsmp">';
			}
	}
	if(price4=="betu"){
		divelement.innerHTML = '<IMG src="img/HAB.png" style="display: block; margin: auto;" name="imgsmp">';
		if(price5=="nuituke"){
			divelement.innerHTML = '<IMG src="img/HABN.png" style="display: block; margin: auto;" name="imgsmp">';
		}
		 if(price5=="dacyaku"){
			 divelement.innerHTML = '<IMG src="img/HABD.png" style="display: block; margin: auto;" name="imgsmp">';
	}
}
}
	}


	if (price1=="human2.5"){
		if(price2=="simple"){
			divelement.innerHTML = '<IMG src="img/HB.png" style="display: block; margin: auto;" name="imgsmp">';


		if(price4=="hontai"){
			divelement.innerHTML = '<IMG src="img/HB.png" style="display: block; margin: auto;" name="imgsmp">';
			if(price5=="nuituke"){
				divelement.innerHTML = '<IMG src="img/HBHN.png" style="display: block; margin: auto;" name="imgsmp">';
			}
			 if(price5=="dacyaku"){
				 divelement.innerHTML = '<IMG src="img/HBHD.png" style="display: block; margin: auto;" name="imgsmp">';
		}
	}


		if(price4=="ittai"){
			divelement.innerHTML = '<IMG src="img/HBI.png" style="display: block; margin: auto;" name="imgsmp">';
			if(price5=="nuituke"){
				divelement.innerHTML = '<IMG src="img/HBIN.png" style="display: block; margin: auto;" name="imgsmp">';
			 }
			 if(price5=="dacyaku"){
				 divelement.innerHTML = '<IMG src="img/HBID.png" style="display: block; margin: auto;" name="imgsmp">';
				}
		}
		if(price4=="betu"){
			divelement.innerHTML = '<IMG src="img/HBB.png" style="display: block; margin: auto;" name="imgsmp">';
			if(price5=="nuituke"){
				divelement.innerHTML = '<IMG src="img/HBN.png" style="display: block; margin: auto;" name="imgsmp">';
			}
			 if(price5=="dacyaku"){
				 divelement.innerHTML = '<IMG src="img/HBD.png" style="display: block; margin: auto;" name="imgsmp">';
		}
	}
	}

	if(price2=="fukuzatu"){
		divelement.innerHTML = '<IMG src="img/HB.png" style="display: block; margin: auto;" name="imgsmp">';


	if(price4=="hontai"){
		divelement.innerHTML = '<IMG src="img/HB.png" style="display: block; margin: auto;" name="imgsmp">';
		if(price5=="nuituke"){
			divelement.innerHTML = '<IMG src="img/HBHN.png" style="display: block; margin: auto;" name="imgsmp">';
		}
		 if(price5=="dacyaku"){
			 divelement.innerHTML = '<IMG src="img/HBHD.png" style="display: block; margin: auto;" name="imgsmp">';
	}
}


	if(price4=="ittai"){
		divelement.innerHTML = '<IMG src="img/HBI.png" style="display: block; margin: auto;" name="imgsmp">';
		if(price5=="nuituke"){
			divelement.innerHTML = '<IMG src="img/HBIN.png" style="display: block; margin: auto;" name="imgsmp">';
		 }
		 if(price5=="dacyaku"){
			 divelement.innerHTML = '<IMG src="img/HBID.png" style="display: block; margin: auto;" name="imgsmp">';
			}
	}
	if(price4=="betu"){
		divelement.innerHTML = '<IMG src="img/HBB.png" style="display: block; margin: auto;" name="imgsmp">';
		if(price5=="nuituke"){
			divelement.innerHTML = '<IMG src="img/HBN.png" style="display: block; margin: auto;" name="imgsmp">';
		}
		 if(price5=="dacyaku"){
			 divelement.innerHTML = '<IMG src="img/HBD.png" style="display: block; margin: auto;" name="imgsmp">';
	}
}
}
}


	if (price1=="simple"){
		if(price2=="simple"){
			divelement.innerHTML = '<IMG src="img/DS1.png" style="display: block; margin: auto;" name="imgsmp">';


		if(price4=="hontai"){
			divelement.innerHTML = '<IMG src="img/DS1.png" style="display: block; margin: auto;" name="imgsmp">';
			if(price5=="nuituke"){
				divelement.innerHTML = '<IMG src="img/DSN1.png" style="display: block; margin: auto;" name="imgsmp">';
			}
			 if(price5=="dacyaku"){
				 divelement.innerHTML = '<IMG src="img/DSD1.png" style="display: block; margin: auto;" name="imgsmp">';
		}
	}


		if(price4=="ittai"){
			divelement.innerHTML = '<IMG src="img/DS1.png" style="display: block; margin: auto;" name="imgsmp">';
			if(price5=="nuituke"){
				divelement.innerHTML = '<IMG src="img/DSN1.png" style="display: block; margin: auto;" name="imgsmp">';
			 }
			 if(price5=="dacyaku"){
				 divelement.innerHTML = '<IMG src="img/DSD1.png" style="display: block; margin: auto;" name="imgsmp">';
				}
		}
		if(price4=="betu"){
			divelement.innerHTML = '<IMG src="img/SD1.png" style="display: block; margin: auto;" name="imgsmp">';
			if(price5=="nuituke"){
				divelement.innerHTML = '<IMG src="img/DSN1.png" style="display: block; margin: auto;" name="imgsmp">';
			}
			 if(price5=="dacyaku"){
				 divelement.innerHTML = '<IMG src="img/DSD1.png" style="display: block; margin: auto;" name="imgsmp">';
		}
	}
	}


	if(price2=="fukuzatu"){
		divelement.innerHTML = '<IMG src="img/DS1.png" style="display: block; margin: auto;" name="imgsmp">';


	if(price4=="hontai"){
		divelement.innerHTML = '<IMG src="img/DS1.png" style="display: block; margin: auto;" name="imgsmp">';
		if(price5=="nuituke"){
			divelement.innerHTML = '<IMG src="img/DSN1.png" style="display: block; margin: auto;" name="imgsmp">';
		}
		 if(price5=="dacyaku"){
			 divelement.innerHTML = '<IMG src="img/DSD1.png" style="display: block; margin: auto;" name="imgsmp">';
	}
}


	if(price4=="ittai"){
		divelement.innerHTML = '<IMG src="img/DS1.png" style="display: block; margin: auto;" name="imgsmp">';
		if(price5=="nuituke"){
			divelement.innerHTML = '<IMG src="img/DSN1.png" style="display: block; margin: auto;" name="imgsmp">';
		 }
		 if(price5=="dacyaku"){
			 divelement.innerHTML = '<IMG src="img/DSD1.png" style="display: block; margin: auto;" name="imgsmp">';
			}
	}
	if(price4=="betu"){
		divelement.innerHTML = '<IMG src="img/SD1.png" style="display: block; margin: auto;" name="imgsmp">';
		if(price5=="nuituke"){
			divelement.innerHTML = '<IMG src="img/DSN1.png" style="display: block; margin: auto;" name="imgsmp">';
		}
		 if(price5=="dacyaku"){
			 divelement.innerHTML = '<IMG src="img/DSD1.png" style="display: block; margin: auto;" name="imgsmp">';
	}
}
}
}



	// if (price1=="human2.5"){
	// 	if(price2=="simple"){
	// 	divelement.innerHTML = '<IMG src="img/typehitoBfukuzatu.png" width="" height="" name="imgsmp">';
	// }
	// if(price2=="fukuzatu"){
	// 	'<IMG src="img/typehitpAfukuzatu.png" width="" height="" name="imgsmp">';
	// 		}
	
	
	

	//Customの画像を選択
	//if (price1=="animal")and(price5=="何か"){	//どっちも満たしたとき処理
		//if (price5=="何か1"){

		//}
		//if (price5=="何か2"){

		//}
	//}
	//if (price1=="human2")or(price5=="何か"){  //どっちか満たせば処理
		//if (price5=="何か3"){

		//}
		//if (price5=="何か4"){

		//}
	//}
}


// --> 

  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');

  open.addEventListener('click', ()  =>  {
    overlay.classList.add('show');
    open.classList.add('hide');
  });

  close.addEventListener('click', ()  =>  {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });

	$(function() {
    $('html,body').animate({ scrollTop: 0 }, '1');
});