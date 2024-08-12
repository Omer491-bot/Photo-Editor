let upload_img_box = document.querySelector('upload_img_box');
let selectedImage = document.querySelector('#selectedImage');
let choose_img = document.querySelector('.choose_image');

let img_holder = document.querySelector('.img_holder');
let image = document.querySelector('#image');

let slider = document.querySelector('.slider');
let show_value = document.querySelector('.show_value');

let list_option = document.querySelector('ul li');

let options = document.querySelector('.options');
let option = document.querySelector('.option');

let clear_all = document.querySelector('#clearAll');
let remove_img_btn = document.querySelector('#remove_img_btn');

let canvas = document.querySelector('#image_cavas');
const context = canvas.getContext('2d');


let file_Name;
let Edit= false;


document.addEventListener("DOMContentLoaded", function() {
    const upload_img_box = document.querySelector('.upload_img_box');
    const selectedImage = document.getElementById('selectedImage');

    if (!upload_img_box) {
        console.error('upload_img_box element not found');
        return;
    }

    if (!selectedImage) {
        console.error('selectedImage element not found');
        return;
    }

    upload_img_box.addEventListener("click", function() {
        try {
            selectedImage.click();
        } catch (error) {
            console.error('Error triggering click on selectedImage:', error);
        }
    });
});



// choose img event

selectedImage.addEventListener("click" , function(){
    const file= this.file[0];

    if(file){
        const reader = new FileReader()
        file_Name = file.name;

        choose_img.style.display = "none";
        image_holder.style.display = "block";

        reader.addEventListener("load" , function(){
            image.setAttribute("src" , this.result)
        });
        reader.readAsDataURL(file);
        remove_img_btn.style.display = "block"
    }
    if(Edit == false){
        Edit= true
    }



});




// function call when slider value change
for(let i=0 ; i<=slider.length-1 ; i++){
    slider[i].addEventListener(Input , editimage)
};

function editImage(){
    let bright = document.querySelector('#brightness');
    let blur  = document.querySelector('#blur');
    let grey = document.querySelector('#gery');
    let hue = document.querySelector('#hue');
    let saturation = document.querySelector('#saturation');

    let brightValShow = document.querySelector('#brightVal');
    let blurValShow = document.querySelector('#blurVal');
    let greyValShow = document.querySelector('#greyVal');
    let hueValShow = document.querySelector('#hueVal');
    let saturationValShow = document.querySelector('#saturationVal');

    let brightVal = bright.value;
    let blurVal = blur.value;
    let greyValu = grey.value;
    let hueVal = hue.value;
    let saturationVal = saturation.value;

    brightValShow.innerHTML = brightVal;
    blurValShow.innerHTML = blurVal;
    greyValShow.innerHTML = grayVal;
    hueValShow.innerHTML = hueVal;
    saturationValShow.innerHTML = satuVal;

    image.style.filter = 'greyscale( '+grayVal +' %) hue-rotate('+hueVal+'deg) brightness('+ brightVal +'  %) blur('+ blurVal + '%) saturation('+ satuVal +'%)';
    context.filter = 'greyscale( '+grayVal +' %) hue-rotate('+hueVal+'deg) brightness('+ brightVal +'  %) blur('+ blurVal + '%) saturation('+ satuVal +'%)';

    clear_all.style.transform = 'translateY(0px)';
    
}

// handel each option click even
 // Initialize as an empty array

list_option.forEach((list_option, index)=>{
    list_option.addEventListener('click', function(){

        if(image.getAttribute('src') == ""){
            alert("Choose image first");
        }else{

            options.style.transform= 'translateY(0px)';


            if(Edit == true){
                canvas.height = image.naturalHeight;
                canvas.widht = image.naturalWidth;

                for(let i= 0 ; i<=4 ; i++){
                    if(index !=i){
                        list_options[i].classList.remove("active_option");
                        option[i].classList.remove("active_controller")
                    }else{
                        this.classList.add("active_option")
                        option[i].classList.add("active_controller")
                    }
                }
                
            }
            
            else{
                alert("Edit your image first")
            }



        }
    })
})

// download img button

function Download_btn() {
    // Ensure 'image', 'Edited', 'context', and 'canvas' are defined and accessible
    if (image.getAttribute('src') != "") {
        if (Edited == true) {
            // Draw the image onto the canvas
            context.drawImage(image, 0, 0, canvas.width, canvas.height);
            var jpegurl = canvas.toDataURL('image/jpeg')
            
            // Create a temporary link element
            const link = document.createElement('a');
            link.href = dataURL;
            link.download = 'download.png';
            
            // Trigger the download
            link.click();
        }
    }
}

