function pyramid(n) {
    for(let i=1; i<= n; i++){
        let prnt = ' '.repeat(n-i);
        let prnt2 = '*'. repeat(i*2 - i)
        console.log(prnt + prnt2 + prnt);
    }
}

pyramid(5);