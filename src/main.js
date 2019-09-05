export function getSyllables(word) {
  const VOWELS = ["a", "e", "i", "o", "u"];
  const DIPHTHONGS = ["oi", "oy", "ou", "ow", "au", "aw", "oo","uy"];
  let count = 0;
  let newWord = "";
  let reg = /^[a-zA-Z]/;

  for(let i=0; i<word.length; i++) {
    if(reg.test(word[i])) {
      newWord += word[i].toLowerCase();
    }
  }

  if(newWord.length === 1) {
    count = 1;
  } else {
    if(newWord[newWord.length-1] === 'e') {
      if(newWord[newWord.length-2] === 'l' || newWord[newWord.length-2] === 'r') {
        count++;
        newWord = newWord.slice(newWord.length-2, newWord.length-1);
      }
      newWord = newWord.slice(newWord.length-1, newWord.length);
    }
    for(let i=0; i<DIPHTHONGS.length; i++) {
      if(newWord.includes(DIPHTHONGS[i])) {
        count++;
        newWord = newWord.slice(newWord.search(DIPHTHONGS[i]), newWord.search(DIPHTHONGS[i]+2));
      }
    }
    for(let i=0; i<VOWELS.length; i++) {
      if(newWord.includes(VOWELS[i])) {
        count++;
        newWord = newWord.slice(newWord.search(VOWELS[i]), newWord.search(VOWELS[i]+1));
      }
    }

  }

  return count;
}
