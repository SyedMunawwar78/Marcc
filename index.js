//For Main Categories page
const db = firebase.firestore();

const ImageRow = document.querySelector('.Categories-Fetch');

var category= document.querySelector('.firebase');

var cnt= document.querySelector('.count');

var Tag1= document.querySelector('.TAG1');

var Tag2= document.querySelector('.TAG2');


var categoryName=category.innerText;
let count=0;
db.collection('SubCategories').where('tag', '==', categoryName).orderBy('Product').get().then(snapshot => {
    snapshot.docs.forEach((doc) => {
        count++;
        cnt.innerText=count;
        console.log(count);
        addToList(doc.data());
        Display(doc.data());
    });
}).catch(err => {
    console.log(err);
});

const Display = (details) => {
    let dataTitle = details.name;
        console.log(details)
            let html = `
            <div class="col-xl-4 col-sm-6 mb--50">
                <div class="ft-product">
                    <div class="product-inner">
                        <div class="product-image">
                            <figure class="product-image--holder">
                                    <img src=${details.image} alt=${details.Product} >
                            </figure>
                            <a href=${details.tag+details.Product}.html class="product-overlay"></a>
                        </div>
                        <div class="product-info" style="text-align: center; padding:8px; border:1px solid black; background-color:rgba(0,0,0,0.2); color:white ; border-radius:20px;  padding-bottom:2px">
                            <h3 class="product-title" style="color:rgba(1,1,1,1);"><a href=${details.tag+details.Product}.html>${details.Product}</a></h3>
                        </div>
                    </div>
                </div>
            </div>
        `;
      
    //addImages(details.name);
    ImageRow.innerHTML += html;
    

    //add the class after 2-3 seconds
    setTimeout(()=>{
        timedFunction();
    },1000);  
}

let timedFunction=()=>{
    //animate__animated animate__fadeInDown
    var ImageR = document.querySelector('.animatedImg');

    ImageR.classList.add('animate__animated');
    ImageR.classList.add('animate__fadeInDown');

}  
//style="border: 1px solid green"



///add items to list
let list= document.querySelector('.list');
let options= document.querySelector('.ListItems');

function addToList(data){
    console.log(data);
    let ListItem= data.Product;

    Tag1.innerText=data.tag+' Furniture';
    Tag2.innerText=data.tag+' Furniture';
    

    let LIST= document.createElement('li');
    // LIST.textContent=ListItem;
    // LIST.classList.add('option');

    // let aTag= document.createElement('a');
    // aTag.href=data.Product + data.tag + ".html";
    LIST.innerHTML += `
    <li>
        <a href=${data.Product+data.tag+'.html'} >
            <span class="category-title">${ListItem}</span>
            <i class="fa fa-angle-double-right"></i>
        </a>
    </li>`;

    list.appendChild(LIST);
    
    // let Option= document.createElement('option');
    // Option.textContent= ListItem;
    // Option.value= url;

    // options.appendChild(Option);
    // console.log(Option);
}


list.addEventListener('click',(e)=>{
    console.log('changed');
    console.log(list);

})

{/* <div class="col-xl-4 col-sm-6 mb--50">
    <div class="ft-product">
        <div class="product-inner">
            <div class="product-image">
                <figure class="product-image--holder">
                    <img src="assets/img/products/prod-04-270x300.jpg" alt="Product">
                </figure>
                <a href="product-details.html" class="product-overlay"></a>
            </div>
            <div class="product-info" style="text-align: center;">
                <h3 class="product-title"><a href="product-details.html">Golden Easy Spot Chair.</a></h3>
            </div>
        </div>
    </div>
</div> */}

