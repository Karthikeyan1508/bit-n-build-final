

document.addEventListener("DOMContentLoaded", function() {
    const cropSelect = document.getElementById("cropSelect");
    const cropInfo = document.getElementById("cropInfo");

    // Initialize Firebase

   
    const firebaseConfig = {
        apiKey: "AIzaSyDft2QHt_KEwphoruhVvk9Vg_3hgkzO-Jw",
        authDomain: "krishi-sahay.firebaseapp.com",
        projectId: "krishi-sahay",
        storageBucket: "krishi-sahay.appspot.com",
        messagingSenderId: "615732053634",
        databaseURL : "https://krishi-sahay-default-rtdb.firebaseio.com/",
        appId: "1:615732053634:web:e7b40bc6a609d39957569b"
      };

    const app = initializeApp(firebaseConfig);

    // Reference to the crops data in Firebase Realtime Database
    const dbRef = firebase.database().ref("crops");

    // Fetch crops data from Firebase
    dbRef.once("value", function(snapshot) {
        const cropsData = snapshot.val();
        if (cropsData) {
            // Populate dropdown options
            Object.keys(cropsData).forEach(key => {
                const crop = cropsData[key];
                const option = document.createElement("option");
                option.value = crop.name;
                option.textContent = crop.name;
                cropSelect.appendChild(option);
            });
        } else {
            console.error("No crops data found in the database");
        }
    })
    .catch(error => {
        console.error("Error fetching crops data:", error);
    });

    // Event listener for dropdown change
    cropSelect.addEventListener("change", function() {
        const selectedCrop = this.value;
        if (!selectedCrop) return; // Exit if no crop selected

        // Find selected crop data
        dbRef.once("value", function(snapshot) {
            const cropsData = snapshot.val();
            const selectedCropData = Object.values(cropsData).find(crop => crop.name === selectedCrop);
            if (selectedCropData) {
                const toolsList = selectedCropData.tools.join(", ");
                const temperature = selectedCropData.temperature;
                const fieldConditions = selectedCropData.field_conditions;
                const cropInfoHTML = `
                    <h2>${selectedCrop}</h2>
                    <p><strong>Tools:</strong> ${toolsList}</p>
                    <p><strong>Temperature:</strong> ${temperature}</p>
                    <p><strong>Field Conditions:</strong> ${fieldConditions}</p>
                `;
                cropInfo.innerHTML = cropInfoHTML;
            } else {
                cropInfo.innerHTML = "<p>No information available for this crop.</p>";
            }
        })
        .catch(error => {
            console.error("Error fetching crops data:", error);
        });
    });
});
