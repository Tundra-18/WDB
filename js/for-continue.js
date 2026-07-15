let continueResult = "";

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue; 
    // i တန်ဖိုး ၃ ဖြစ်လျှင် အောက်ကကုဒ်ကို မလုပ်ဘဲ ၄ သို့ ခုန်ကူးမည်။
  }
  continueResult += i + " ";
}

console.log("Continue Loop Output:", continueResult); 
// ရလဒ်: "1 2 4 5 " (၃ ပျောက်သွားမည်)

