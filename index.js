const findLongestWord = string => {
  let longest = "";
  for (const i of string){
    if (i.length > longest.length){
      longest = i;
    } 
  }
  return longest;
};


console.log(findLongestWord(["The","quick","brown", "fox", 
"over", "the", "lazy", "dog", "jumpy" ]));