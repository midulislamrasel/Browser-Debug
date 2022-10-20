
/* const modelTitle = () => {   
    alert('Plz this any Key ')
}  */
const modelTitle = () => {
    const num = Math.random() * 10;
    console.log(num)
    if (num < 5) {
        alert("your number < 5")
    }
}

const condition = () => {
    const decision = confirm('Are you coming ?');
    if (decision === true) {
        alert("Bkash plz 500 tk")
    }
    else {
        alert("DGM :)")
    }
}
const getUserInfo = () => {
    const name = prompt('Tell us your name')
    if (!!name) {
        console.log('Welcome here ', name)
    }
}