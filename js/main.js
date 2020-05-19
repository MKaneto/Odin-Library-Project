

// add card
function submitInput(event) {
    
    event.preventDefault();

    var titleValue = document.getElementById("title").value;
        title = document.createTextNode(titleValue);

    var authorValue = document.getElementById("author").value;
        author = document.createTextNode(authorValue);

    var chaptersValue = document.getElementById("chapters").value;
        chapters = document.createTextNode(chaptersValue + " Chapters");
    
    var readInput = document.getElementById("read");
        readValue = readInput.options[readInput.selectedIndex].text;
        read = document.createTextNode(readValue + " ");

    var shuffleButton = document.createElement ("i");
        shuffleButton.className = "fas fa-exchange-alt"

    var deleteButton = document.createElement("i"); // DELETE BUTTON CREATED
        deleteButton.className = "fas fa-minus-circle"; 
       
    var span = document.createElement("span");
        span.className = "toggle";

        //CREATE H2 & ADD TITLE TO H2
    var h2 = document.createElement("h2");
        h2.appendChild(title);


        //CREATE P TAG / ADD AUTHOR TO P TAG
    var p1 = document.createElement("p");
    var p2 = document.createElement("p");
    var p3 = document.createElement("p");
            p1.appendChild(author);
            p2.appendChild(chapters);
            p3.appendChild(span);
            // span.setAttribute("id","ready");
            span.appendChild(read);
            p3.appendChild(shuffleButton);
         

        //ADD H2 & P ELEMENTS TO DIV
    var div = document.createElement("div");
        div.className = "div";
        div.appendChild(deleteButton);
        div.appendChild(h2);
        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);

        if (titleValue == "" || authorValue == "" || chaptersValue == "") {
            alert("Please fill all ( tsubete wo umetekudasai 全てを埋めてください )");
        } else {
            alert("Yoshi ( よし ) :)");

            //ADD DIV TO MAIN
            var main = document.getElementById("main");
                main.appendChild(div);
                modal.style.display = "none";
                
        }

        document.getElementById("title").value = "" ;
        document.getElementById("author").value = "" ;
        document.getElementById("chapters").value = "" ;
         

        // Click on a close button to hide the current card
    var deleteButton = document.getElementsByClassName("fas fa-minus-circle");
            
        for(let i = 0; i < deleteButton.length; i++) {
            deleteButton[i].onclick = function deleteItem() {
                this.parentElement.style.display = "none";
            }   
        }

           // toggle between read and not read
    var shuffleButton = document.getElementsByClassName("fas fa-exchange-alt");
    // var toggle = document.getElementById("ready");
    var toggle = document.getElementsByClassName("toggle");
        for(let i = 0; i < shuffleButton.length; i++) {

            shuffleButton[i].onclick = function() {
                if (toggle[i].innerHTML == "Not yet read ") {
                    toggle[i].innerHTML = "Definitely read ";
                } else {
                    toggle[i].innerHTML = "Not yet read ";
                } 
            } 
        }         
}




    function openForm() {
        var modal = document.getElementById("modal"); 
            modal.style.display = "block";
    
    }
    
    // click anywhere on the window to close modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Click on a close button to hide the current card
    var deleteButton = document.getElementsByClassName("fas fa-minus-circle");
            
        for(let i = 0; i < deleteButton.length; i++) {
            deleteButton[i].onclick = function deleteItem() {
                this.parentElement.style.display = "none";
            }   
        }


    // toggle between read and not read
    var shuffleButton = document.getElementsByClassName("fas fa-exchange-alt");
    // var toggle = document.getElementById("ready");
    var toggle = document.getElementsByClassName("toggle");
        for(let i = 0; i < shuffleButton.length; i++) {

            shuffleButton[i].onclick = function() {
                if (toggle[i].innerHTML == "Definitely read ") {
                    toggle[i].innerHTML = "Not yet read ";
                } else {
                    toggle[i].innerHTML = "Definitely read ";
                } 
            } 
        }         
    