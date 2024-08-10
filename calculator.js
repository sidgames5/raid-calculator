document.getElementById('calculator').onsubmit = function(event) {
    event.preventDefault(); // Prevent form from submitting

    // Get the values from the form elements
    let size = parseFloat(document.getElementById("drivesize").value);
    let count = parseFloat(document.getElementById("drivecount").value);
    let type = document.getElementById("raidtype").value;
    let raw = 0;
    let capacity = 0;
    let failures = 0;

    // Check if the values are valid numbers and the operation is selected
    if (!isNaN(size) && !isNaN(count) && type !== "") {
        // Perform the calculation based on the operation
        switch (type) {
            case "raid0":
                raw = size * count;
                capacity = raw;
                failures = 0;
                break;
            case "raid1":
                raw = size * count;
                capacity = size;
                failures = count;
                break;
            case "raid5":
                raw = size * count;
                capacity = size * (count - 1);
                failures = 1;
                break;
            case "raid6":
                raw = size * count;
                capacity = size * (count - 2);
                failures = 2;
                break;
        }
    } else {
        raw = "Invalid input";
        capacity = "Invalid input";
        failures = "Invalid input";
    }

    // Display the result in the paragraph element
    document.getElementById("raw").innerHTML = "Raw Capacity: " + raw + " TB";
    document.getElementById("capacity").innerHTML = "Usable Storage: " + capacity + " TB";
    document.getElementById("failures").innerHTML = "Drive failures before data loss: " + failures;
};