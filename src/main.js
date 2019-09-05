export function getSyllables(word) {
  const VOWELS = ["a", "e", "i", "o", "u"];
  const DIPHTHONGS = ["oi", "oy", "ou", "ow", "au", "aw", "oo","uy"];
  let count = 0;
  let newWord = "";
  let reg = /^[a-zA-Z]/;

  for(let i=0; i<word.length; i++) {
    if(reg.test(word[i])) {
      newWord += word[i];
    }
  }

  if(newWord.length === 1) {
    count = 1;
  } else {
    // for(let i=0; i<DIPHTHONGS.length; i++) {
    //   if(newWord.includes(DIPHTHONGS[i])) {
    //     count++;
    //     newWord = newWord.slice(newWord.search(DIPHTHONGS[i]), 2);
    //   }
    // }

  }

  return count;
}
