textarea = document.getElementById('textarea');
console.log(localStorage.getItem('anagrams'));
textarea.value = localStorage.getItem('anagrams');
if (textarea.value == '') {
  alert('No result found.');
} else {
  document.getElementById('h2').innerHTML =
    'matching anagram of word "' + localStorage.getItem('anagramword') + '" ';
}
