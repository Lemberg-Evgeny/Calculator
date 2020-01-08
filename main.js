
const insert = (num) => {
    document.form.textview.value += num;
}

const clean = () => {
    document.form.textview.value = '';
}

const back = () => {
    let exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0, exp.length - 1);
}

const equal = () => {
    let exp = document.form.textview.value;
    console.log('eval(exp)');
    eval(exp);
    console.log(eval(exp));
    if (eval(exp) == 'Infinity') {
        document.form.textview.value = '';

    }else{
        document.form.textview.value = eval(exp);
    }
    
}
