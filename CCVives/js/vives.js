/**
 * Send room rent request to management system
 * @param {} rentRequest 
 */
 async function saveRentRequest(rentRequest){
    event.preventDefault()
    let semestre = document.getElementById("semestre").value
    let floorType =document.getElementById("floorType").value
    let contact = document.getElementById("contact").value

    db.collection("solicitudesDeHabitaciones").add({
        semestre: semestre,
        floorType: floorType,
        contact: contact
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);

    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    })
}

/**
 * Get the list of room renting requests
 */
async function getRentRequests() {
    var rents = []
    db.collection('solicitudesDeHabitaciones').get().then(query =>{query.forEach(element => {
        // console.log(element.data())
        rents.push(element.data())
        // const roomRequests = document.getElementById("roomRequests")
        // roomRequests.innerHTML += `${element.data()}`
      });})
      .catch((error) => {
        console.log(error)
      })
    return rents;
}


const rents = getRentRequests()

console.log(rents)