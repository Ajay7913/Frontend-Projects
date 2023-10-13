
function isPalindrome(str){

   const cleanstr = str.toLowerCase().replace(/[^a-z0-9]/g,'');
   console.log(cleanstr);
   const reverseStr =cleanstr.split('').reverse().join('');
   console.log(reverseStr);
   return cleanstr === reverseStr;
}


function palindromeChecker(){

    const inputText = document.getElementById('inputText');
    const result = document.getElementById('result');

    if(isPalindrome(inputText.value)){
           result.textContent = `"${inputText.value}" is a Palindrome`;
    }else {
        result.textContent = `"${inputText.value}" is a  Not Palindrome`;
    }
    inputText.value = ''; 
}





document.getElementById('checkButton').
addEventListener("click",palindromeChecker);