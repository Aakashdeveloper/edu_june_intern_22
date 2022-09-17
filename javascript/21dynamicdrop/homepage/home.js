const cityUrl = "https://zomatoajulypi.herokuapp.com/location"
const restUrl = "https://zomatoajulypi.herokuapp.com/restaurant?stateId="

function getCity(){
    fetch(cityUrl,{method:'GET'})
    .then((res) => res.json())
    .then((data) => {
        data.map((item) => {
            let element = document.createElement('option') //<option></option>
            let text = document.createTextNode(item.state) // Delhi
            element.appendChild(text) //<option>Delhi</option>
            element.value = item.state_id //<option value="1">Delhi</option>
            document.getElementById('city').appendChild(element) 
            //<select><option value="1">Delhi</option></select>
        })
    })
}

const getCity = async() => {
    let res = await fetch(cityUrl,{method:'GET'})
    let data = await res.json()
    data.map((item) => {
        let element = document.createElement('option') //<option></option>
        let text = document.createTextNode(item.state) // Delhi
        element.appendChild(text) //<option>Delhi</option>
        element.value = item.state_id //<option value="1">Delhi</option>
        document.getElementById('city').appendChild(element) 
        //<select><option value="1">Delhi</option></select>
    })
}


async function getCity(){
    let res = await fetch(cityUrl,{method:'GET'})
    let data = await res.json()
    data.map((item) => {
        let element = document.createElement('option') //<option></option>
        let text = document.createTextNode(item.state) // Delhi
        element.appendChild(text) //<option>Delhi</option>
        element.value = item.state_id //<option value="1">Delhi</option>
        document.getElementById('city').appendChild(element) 
        //<select><option value="1">Delhi</option></select>
    })
}

function getRest(){
    let cityId = document.getElementById('city').value;
    let rest = document.getElementById('restSelect');
    while(rest.length > 0){
        rest.remove(0)
    }
    fetch(`${restUrl}${cityId}`,{method:'GET'})
    .then((res) => res.json())
    .then((data) => {
        data.map((item) => {
            let element = document.createElement('option')
            let text = document.createTextNode(item.restaurant_name)
            element.appendChild(text)
            rest.appendChild(element)
        })
    })

}