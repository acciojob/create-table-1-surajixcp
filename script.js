function insert_Row() {
    // Get the table by its ID
    var table = document.getElementById("sampleTable");
    
    // Create a new row
    var newRow = table.insertRow(0); // Insert at the top (index 0)
    
    // Create new cells
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    
    // Add values to the new cells
    cell1.innerHTML = "New Cell1";
    cell2.innerHTML = "New Cell2";
}
