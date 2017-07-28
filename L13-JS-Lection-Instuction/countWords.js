let word = "Software University";
let allWords={};
for (let i=0; i<word.length;i++){
    if(!(word[i] in allWords)){
        allWords[word[i]]=0;
    }
    allWords[word[i]]++;
}
console.log(allWords);
