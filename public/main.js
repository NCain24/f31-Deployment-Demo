const btn = document.querySelector('button')
const btn2 = document.querySelector('#button2')

const clickHandler = () => alert('The cat name is: Rascal')

const getCat = () => {
    axios.get(`http://ec2-18-237-218-13.us-west-2.compute.amazonaws.com/api/cat`)
    .then(res => {
        alert(res.data)
    })
    .catch(err => console.log(err))
}

btn.addEventListener('click', clickHandler)
btn2.addEventListener('click', getCat)