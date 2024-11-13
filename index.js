//1.
const travel = document.createElement("p");

document.querySelector("p");
travel.innerText = "Visit Cuba";

const section1 = document.querySelector("section");
section1.appendChild(travel); //Genom att först använda document.querySelector("body"); och sedan använda appendChild 
                      //ser jag till att det nya elementet (travel) kommer direkt efter det redan 
                      //existerande elementet under just "section". 

                      //Förklaring: //appendChild: This methods will append a node as the last child element 
                      //of the  element on which this methods was invoked. So for instance, if we would like to 
                      //append our element from above to the body, we need to invoke this method on 
                      //the body element. Why body? Because, a html documnet can't exist without a body element. 
                      //So if we don't have any other elements to use, we can always use the body element. 



                      
//2.                      
const runItem1 = document.createElement("p");

runItem1.innerText = "Run the Marathon";
const section2 = document.querySelector("section");
document.querySelector("Run the Marathon")

section2.insertAdjacentElement("beforeend", runItem1);

//3. 

//document.getElementById(section1.innerHTML); //Tydligen är denna ej nödvändig. 

console.log(section1.innerHTML);


//4 och 5.

//const section3 = document.querySelector("section");
//section3.innerHTML = "<p>Own a cool car</p>";


//6. 

const carItem1 = "<p class='will-be-replaced'>Own a cool car</p>";
const section3 = document.querySelector("section");
section3.insertAdjacentHTML("afterbegin", carItem1);

//7. OBS FÖRSTÅR EJ DENNA ORDENTLIGT! BE OM GENOMGÅNG!

moreItems=["Eat sushi", "Eat burgers", "Eat knake"];

for(let item of moreItems) {
    
    const section = document.querySelector("section");
    const paragraphs = document.createElement("p");
    paragraphs.innerText = item;
    section.appendChild(paragraphs);
    console.log(item)
}

//8. 
const section = document.querySelector("section");
console.log(section.children);
const itemCount = section.children.length;
console.log(`The number of items is ${itemCount}`);

//9. 
const ownerOfList=document.querySelector("h2");
ownerOfList.innerText = "Henriks";

//10. 
const carItem2 = document.querySelector("p.will-be-replaced"); //carItem2 behöver här skapas för att kunna anropa klassen som kopplats till carItem1.
const planeItem = document.createElement("p");
planeItem.innerText = "Own a cool plane";
section.replaceChild(planeItem,carItem2);

    
//11. 
const bikeItem = document.createElement("p");
bikeItem.innerText = "Finish the Vätternrundan";

section.replaceChild(bikeItem, runItem1);

//12.
function removeItem() {

  const section = document.querySelector("section");
  const lastItem = section.lastElementChild;

  section.removeChild(lastItem);

}

removeItem();
