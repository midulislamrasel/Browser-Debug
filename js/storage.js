// Add item
document.getElementById('btn-name-add').addEventListener('click', function () {
    const inputName = document.getElementById('input-name-field');
    const inputNameValue = inputName.value;
    console.log(inputNameValue)
    localStorage.setItem('name', inputNameValue);
});


document.getElementById('btn-age-add').addEventListener('click', function () {
    const inputAge = document.getElementById('input-age-field');
    const inputAgeValue = inputAge.value;
    console.log(inputAgeValue);
    localStorage.setItem('age',inputAgeValue)
})








// Remove item
document.getElementById('btn-name-remove').addEventListener('click', function () {
    localStorage.removeItem('name')
})
document.getElementById('btn-age-remove').addEventListener('click', function () {
    localStorage.removeItem('age')
})