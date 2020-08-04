// 1. Add a data attribute to each label.
// 2. When a user clicks on the label, get the value and filter out all the parent that has the same label with the same value
// 4. If he clicks another one, add it to the list of  labels in the input box.

// VARIABLES
let labels = document.querySelectorAll('.job__label');
let filterBox = document.querySelector('.filter-box');
let jobContainer = document.querySelector('.jobs');

labels.forEach(label => {
    //  Get the attributes of each of the labels into an array
    let attribute_Array = label.getAttributeNames();

    // Get the attribute that start with data to exclude the class attribute or other unneeded attribute.
    let attribute = attribute_Array.filter( e => e.match(/^data/) )

    // Add event listener to the labels
    label.addEventListener('click', () => {
        let attributeName = String(attribute)
        let attributeValue = label.getAttribute(attributeName);
        let attributeNode = label.getAttributeNode(attribute);

        console.log(attributeValue)
        
        filterBox.insertAdjacentHTML('beforeend',  `<span class='filter__label'> ${attributeValue} </span>`);
        filterJob(attributeName, attributeValue);
    })
});

function filterJob(a,b) {
    // Put the job boxes into an array
    let jobs = [...jobContainer.children];
    
    jobs.forEach(element => {
        if (element.getAttribute(a) !== b) {
            console.log(element)
            element.style.display = 'none';
        } else {
            element.style.transition = '1s';
        }
    });
    // Filter the boxes based on the label clicked
    // let filtered = jobs.filter((element) => element.hasAttribute(a) && element.getAttribute(e) == b);
    // console.log(filtered);
   
    // Replace the job container with the filtered boxes
    // jobContainer.replaceWith(...filtered);
}

fetch("data.txt").then(response => {
    console.log(response.status);
    // → 200
    console.log(response.headers.get("Content-Type"));
    // → text/plain
    console.log(response.json())
    });

let toggle = document.querySelector('.toggle');
let nav = document.querySelector('.nav');
let navbar = document.querySelector('.navbar');
toggle.addEventListener('click', displayNav);

function displayNav() {
    // navbar.classList.add("show");
    nav.classList.toggle("navmobile");
    navbar.classList.toggle('stylenav')
    // navbar.classList.remove("show");
}




