function highlight() {
    //Write your code here
	// Get all <strong> elements in the document
    const strongElements = document.querySelectorAll('strong');

    // Loop through each <strong> element and change its color to green
    strongElements.forEach(element => {
        element.style.color = 'green';
    });

}


function return_normal() {
    //Write your code here
	// Get all <strong> elements in the document
    const strongElements = document.querySelectorAll('strong');

    // Loop through each <strong> element and change its color back to black
    strongElements.forEach(element => {
        element.style.color = 'black';
    });
    
}
