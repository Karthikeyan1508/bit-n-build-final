const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyDft2QHt_KEwphoruhVvk9Vg_3hgkzO-Jw",
    authDomain: "krishi-sahay.firebaseapp.com",
    databaseURL: "https://krishi-sahay-default-rtdb.firebaseio.com",
    projectId: "krishi-sahay",
    storageBucket: "krishi-sahay.appspot.com",
    messagingSenderId: "615732053634",
    appId: "1:615732053634:web:e7b40bc6a609d39957569b"
 
});

const db = firebaseApp.firestore();


// const saveSeedData = () =>
// {
// const seeds = document.getElementById('seedName').value
// const plough = document.getElementById('plough').value
// const harrow = document.getElementById('harrow').value
// const seedDrill = document.getElementById('seedDrill').value
// const transplanter = document.getElementById('transplanter').value
// const combineHarvester = document.getElementById('combineHarvester').value

// db.collection('seeds')
// .add({
//     name: seeds
// })
// .then((docRef)=> {
//     console.log("Document is wriiten with ID:", docRef.id);
// })
// .catch((error) => {
//     console.error("Error writing document: ", error);
// });
// }
const saveData = () =>
{
    const seeds = document.getElementById('seedName').value
const plough = document.getElementById('plough').value
const harrow = document.getElementById('harrow').value
const seedDrill = document.getElementById('seedDrill').value
const transplanter = document.getElementById('transplanter').value
const combineHarvester = document.getElementById('combineHarvester').value

db.collection('tools')
.add({
    seeds : seeds,
    plough: plough,
    harrow: harrow,
    seedDrill: seedDrill,
    transplanter: transplanter,
    combineHarvester: combineHarvester
})
.then((docRef)=> {
    console.log("Document is wriiten with ID:", docRef.id);
    window.lastDocId = docRef.id;
    
})
.catch((error) => {
    console.error("Error writing document: ", error);
});
}

// const readData = () =>
// {
// db.collection('tools')
// .get()
// .then((data) => {
//     console.log(data.docs.map((item) => {
//         return {...item.data(), id: item.id}
//     }))
// })
// }

const updateData = () =>
{
const docID = docRef.id;
// db.collection('tools').doc('MBRtz1zTzhLUTOwkxmA4')
db.collection('tools').doc('docID')

.update({
    plough : document.getElementById('upPlough').value
.then(() => {
    alert('data updated')
})

});
}

// Reading data for the last saved document
const readLastSavedData = () => {
    if (window.lastDocId) {
        db.collection('tools').doc(window.lastDocId)
            .get()
            .then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());

                    // Extract data from the document
                    const data = doc.data();
                    
                    // Set the inner HTML of each element to its corresponding label and value
                    document.getElementById('seeds').innerHTML = `Seeds: ${data.seeds}` +"<br>" +`Plough: ${data.plough}`+"<br>" +`Harrow: ${data.harrow}`+"<br>" +`Seed Drill: ${data.seedDrill}`+"<br>" +`Transplanter: ${data.transplanter}`+"<br>" +`Combine Harvester: ${data.combineHarvester}`;
                    // document.getElementById('Rharrow').innerHTML = `Harrow: ${data.harrow}`;
                    // document.getElementById('RseedDrill').innerHTML = `Seed Drill: ${data.seedDrill}`;
                    // document.getElementById('Rtransplanter').innerHTML = `Transplanter: ${data.transplanter}`;
                    // document.getElementById('RcombineHarvester').innerHTML = `Combine Harvester: ${data.combineHarvester}`;
                    
                } else {
                    console.log("No such document!");
                }
            })
            .catch((error) => {
                console.log("Error getting document:", error);
            });
    } else {
        console.log("No document ID available.");
    }
}
// const displayLastSavedData = (data) => {
   

//     // Create HTML elements to display data
//     document.getElementById('seeds').innerHTML = lastDocId[4].seeds;
// }
// // Updating data for the last saved document



