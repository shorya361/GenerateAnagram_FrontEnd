textarea = document.getElementById('textarea');
console.log(localStorage.getItem('anagrams'));
textarea.value = localStorage.getItem('anagrams');
if (textarea.value == '') {
  alert('No result found.');
}
if (document.readyState === 'complete') {
  console.log('ready!');
}
