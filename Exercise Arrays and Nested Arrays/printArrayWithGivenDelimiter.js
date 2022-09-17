function printArrayWithGivenDelimiter(arr, separator){
    let arrOfStrings = arr;
    let delimiter = separator;

    let resultStr = arrOfStrings.join(delimiter);

    console.log(resultStr);
}

printArrayWithGivenDelimiter(['One', 
'Two', 
'Three', 
'Four', 
'Five'], 
'-'
);
