function createPyramid(n)
{
    for (let i = 0; i < n; i++) {
        var output = '';
        for (let j =0; j < n - i; j++) output += ' ';''
        for (let k = 0; k <= i; k++) output += '* ';
        console.log(output);  
    } 
}

createPyramid(5)