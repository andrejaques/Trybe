function pyramid(n) {
    for(let i=1; i<= n; i++){
        let str = ' '.repeat(n-i);
        let str2 = '*'. repeat(i*2 - i)
        console.log(str + str2 + str);
    }
}

pyramid(5);