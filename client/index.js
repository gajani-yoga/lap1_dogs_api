const displayBtn = document.querySelector('#display')


displayBtn.addEventListener('click', fetchDogs)

function fetchDogs() {
  fetch("http://localhost:3000/dogs/")
  .then(resp => resp.json())
  .then(addDog)
}

function addDog(data) {
  const DogList = document.querySelector('#dogs')
  const dogs = data
  fruitList.textContent = ''

  dogs.forEach(dog => {
    const li = document.createElement('li')
    li.textContent = dog.name
    dogList.appendChild(li)
  })
}

const form = document.getElementById('dogForm')

form.addEventListener('submit', createFruit)

async function createFruit(e) {
  e.preventDefault()
  console.log(e.target.dog.value)

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: e.target.dog.value
    })
  }

  const response = await fetch("http://localhost:3000/dogs/", options)

  if (response.status == 201) {
    e.target.dog.value = ''
  }
}
