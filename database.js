// Access your data from the local storage
const inventory = JSON.parse(localStorage.getItem("HomeInventory"));

// Write a function that performs the operation of creating DOM components
function buildInventoryPage(categoryFilter) {

    // Get reference to article to append the sections to it
    var articleElement = document.getElementById("myStuff");

    // Iterate over each key in the inventory
    for (let category in inventory) {

        // If current category matches the category filter or if no catergory
        // filter is provided then build the elements
        if (category === categoryFilter || !categoryFilter) {


            // Create a section for each inventory category
            const sectionElement = document.createElement("section");

            // Create a paragraph tag for each property on each item
            let categoryArray = inventory[category];
            categoryArray.forEach(function (inventoryItem) {

                for (let property in inventoryItem) {
                    const detailParagraph = document.createElement("p");

                    // Create textnode with each name, location, descritption
                    var paragraphText = document.createTextNode(inventoryItem[property]);

                    // Attach the textnode to p
                    detailParagraph.appendChild(paragraphText);

                    // Attach the p componets as children of the section
                    sectionElement.appendChild(detailParagraph);

                }
            })

            // Attach the section as a child of the article
            articleElement.appendChild(sectionElement);

        }
    }
}

buildInventoryPage("crafts");





/*
<article>
    <section>
        <p>Name</p>
        <p>Location</p>
        <p>Description</p>
    </section>

    <section>
        <p>Name</p>
        <p>Location</p>
        <p>Description</p>
    </section>

    <section>
        <p>Name</p>
        <p>Location</p>
        <p>Description</p>
    </section>
</article>
*/
