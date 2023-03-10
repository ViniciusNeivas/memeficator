function enablePhotoUpload() {
  const imageInput = document.getElementById("image-input");
  imageInput.addEventListener("change", function() {
   
    const reader = new FileReader();
    reader.addEventListener("load", () => {
   
      const uploadImage = reader.result;
        changeMemePicture(uploadImage);
  })
    reader.readAsDataURL(this.files[0])
});
}

async function mapImageList() {
  const memesObject = [
    {
      name: "chapolin",
      path: "src/img/chapolin.jpg",
    },
    {
      name: "chloe",
      path: "src/img/chloe.jpg",
    },
    {
      name: "funny-cat1",
      path: "src/img/funny-cat1.png",
    },
    {
      name: "funny-cat2",
      path: "src/img/funny-cat2.png",
    },
    
    {
      name: "brasil-sem-jovens",
      path: "src/img/um-brasil-sem-jovens.jpg",
    },

  ];
  return memesObject;
}

async function createGallery(imageList) {
  const memeSelector = document.querySelector("#memes-list");
  imageList.forEach(image => {
    let newOption = document.createElement("option");
    newOption.text = image.name;
    newOption.value = image.path;
    memeSelector.appendChild(newOption);
  });
}

async function changeMemePicture(photo) {
  let displayImage = document.querySelector("#display-image");
  displayImage.style.backgroundImage = `url('${photo}')`;
}

let btnDownload = document.getElementById("btn-download");
btnDownload.onclick = function captureToDownload (){
  const screenshotPrint = document.querySelector("#downloaded")

  html2canvas(screenshotPrint).then((canvas) => {
      const base64Image = canvas.toDataURL("image/png")
      let anchor = document.createElement("a")
      anchor.setAttribute("href", base64Image)
      anchor.setAttribute("download", "my-meme.png")
      anchor.click()
      anchor.remove()
  })
}

async function main() {
  const memesImageList = await mapImageList();
  enablePhotoUpload();
  await createGallery(memesImageList);
  await changeMemePicture(memesImageList[0].path);
}

main();
