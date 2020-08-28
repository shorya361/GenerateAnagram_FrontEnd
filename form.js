var button = document.getElementById('button');

let input = document.getElementById('fileselected');
let dictionary = null;
input.addEventListener('change', () => {
  let files = input.files;
  if (files.length == 0) return;

  let reader = new FileReader();

  const file = files[0];

  reader.onload = (e) => {
    const file = e.target.result;
    const lines = file.split(/\r\n|\n/);
    dictionary = lines;
  };
  reader.readAsText(file);
});

let genAnagrams = (word, anagram = '', anagrams = []) => {
  //   word = word.toLowerCase();
  if (anagram) {
    anagrams.push(anagram);
  }
  if (!word) {
    return;
  }

  for (let i = 0; i < word.length; i++) {
    anagram += word[i];
    genAnagrams(word.slice(0, i) + word.slice(i + 1), anagram, anagrams);
    anagram = anagram.slice(0, anagram.length - 1);
  }
  return [...new Set(anagrams)];
};

button.onclick = () => {
  if (dictionary == null) {
    alert('please select the file ');
  } else {
    anagramword = document.getElementById('anagram').value;
    document.getElementById('anagram').value = '';
    let allAnagram = genAnagrams(anagramword);
    let anagrams = [];
    for (let i = 0; i < allAnagram.length; i++) {
      if (allAnagram[i].length == anagramword.length) {
        if (dictionary.indexOf(allAnagram[i]) != -1) {
          anagrams.push(allAnagram[i]);
        }
      }
    }
    localStorage.setItem('anagrams', anagrams.join('\n'));
    localStorage.setItem('anagramword', anagramword);
    window.location.href = 'resultpage.html';
  }
};
