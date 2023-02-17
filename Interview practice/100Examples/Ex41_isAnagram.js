function isAnagram(str1,str2){
     str1=str1.replace("/[^a-z]/gi","").toLowerCase()
     str2=str2.replace("/[^a-z]/gi","").toLowerCase()

    str1=str1.split("").sort().join("")
    str2=str2.split("").sort().join("")
    if(str1.length===str2.length && str1===str2){
        console.log("Given strings are anagram");
    }else{
        console.log("No Given strings are not anagram");
    }
}
isAnagram("acfv","fvca")
isAnagram('listen', 'silent')
isAnagram('debit card', 'bad credit')
isAnagram('hello', 'world')