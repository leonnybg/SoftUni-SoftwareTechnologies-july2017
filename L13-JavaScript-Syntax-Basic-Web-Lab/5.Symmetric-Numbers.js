function symmetricNumbers(input) {
    let n = Number(input[0]);
    for(let i=1; i<=n; i++) {
        if(isSymetricNumber("" + i)){
            console.log((i));
        }
    }

    function isSymetricNumber(num) {
        for(let i=0; i<num.length; i++) {
            if(num[i] != num[num.length - 1 - i]) {
                return false;
            }
        }

        return true;
    }
}

symmetricNumbers(['100']);