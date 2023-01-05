async function mapImageList(){
    const memesObject = [
        {
            name: "chapolin",
            path: "memeficator/src/img/chapolin.jpg"
        },
        {
            name: "chloe",
            path: "memeficator/src/img/chloe(1).jpg"
        },
        {
            name: "funny-cat1",
            path: "memeficator/src/img/funny-cat1.jpg"
        },
        {
            name: "funny-cat2",
            path: "memeficator/src/img/funny-cat2.jpg"
        }
    ]
    return memesObject;
}

async function createGallery (imageList){
    const memeSelector = document.getElementById("memes-list")
    imageList.forEach(image => {
        let newOption = document.createElement("option");
        newOption.text = image.name;
        newOption.value = image.path;
        memeSelector.appendChild(newOption);
        
    });
}

async function main() {
    const memesImageList = await mapImageList();   
    await createGallery(memesImageList); 
}

main();

