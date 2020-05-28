

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
        read = document.createTextNode(readValue);
        
    var deleteButton = document.createElement("i"); // DELETE BUTTON CREATED
        deleteButton.className = "fas fa-minus-circle"; 
       
    var span = document.createElement("span");
        span.className = "toggle";

        //CREATE H2 & ADD TITLE TO H2
    var h2 = document.createElement("h2");
        h2.appendChild(title);


        //CREATE P TAG / ADD CONTENT TO P TAG
    var p1 = document.createElement("p");
    var p2 = document.createElement("p");
    var p3 = document.createElement("p");
            p1.appendChild(author);
            p2.appendChild(chapters);
            p3.appendChild(span);
            span.appendChild(read);

        //CREATE SWITCHER
    var label = document.createElement("label");
        label.className = "switch";
    var checkboxInput = document.createElement("input");
        checkboxInput.type = "checkbox";
        checkboxInput.className = "checkbox";
    var switcher = document.createElement("span");
        switcher.className = "slider";
        label.appendChild(checkboxInput);
        label.appendChild(switcher);

        //ADD H2, P & SWITCHER ELEMENTS TO DIV
    var div = document.createElement("div");
        div.className = "div";
        div.appendChild(deleteButton);
        div.appendChild(h2);
        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);
        div.appendChild(label);

        if (titleValue == "" || authorValue == "" || chaptersValue == "") {
            document.getElementById("attention").style.display = "block";
        } else {

            modal.onclick = function(){
                document.getElementById("attention").style.display = "none";
            }
            //ADD DIV TO MAIN
            var main = document.getElementById("main");
                main.appendChild(div); 
                if(readValue === "Read"){checkboxInput.checked = true;} 
                else {checkboxInput.checked = false;}
                modal.style.display = "none";
        }

        
        

        document.getElementById("title").value = "" ;
        document.getElementById("author").value = "" ;
        document.getElementById("chapters").value = "" ;
         


    // Click on a close button to hide the current card
    var deleteButton = document.getElementsByClassName("fas fa-minus-circle");
    var confirm = document.getElementById("confirm");
    var yes = document.getElementById("yes");
    var no = document.getElementById("no");

        for(let i = 0; i < deleteButton.length; i++) {
            deleteButton[i].onclick = function deleteItem() {
                confirm.style.display = "block";

                yes.onclick = function(event){  
                    event.preventDefault();
                    deleteButton[i].parentElement.style.display = "none";
                    confirm.style.display = "none";
                }

                no.onclick = function(){
                    confirm.style.display = "none";
                }
            }
        }

    
    // toggle between read and not read
    var shuffleButton = document.getElementsByClassName("checkbox");
    var toggle = document.getElementsByClassName("toggle");
        for(let i = 0; i < shuffleButton.length; i++) {

            shuffleButton[i].onclick = function(){
                if(shuffleButton[i].checked === true) {
                    toggle[i].innerHTML = "Read";
                }else{
                    toggle[i].innerHTML = "Not read yet";
                }
            }
        }

}

    function goBack() {
        modal.style.display = "none";
        document.getElementById("attention").style.display = "none";
    }


    function openForm() {
        var modal = document.getElementById("modal"); 
            modal.style.display = "block";
    }
    
    // click anywhere on the window to close modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            document.getElementById("attention").style.display = "none";
        }
    }

    // Click on a close button to hide the current card
    var deleteButton = document.getElementsByClassName("fas fa-minus-circle");
    var confirm = document.getElementById("confirm");
    var yes = document.getElementById("yes");
    var no = document.getElementById("no");

        for(let i = 0; i < deleteButton.length; i++) {
            deleteButton[i].onclick = function deleteItem() {
                confirm.style.display = "block";

                yes.onclick = function(event){  
                    event.preventDefault();
                    deleteButton[i].parentElement.style.display = "none";
                    confirm.style.display = "none";
                }

                no.onclick = function(){
                    confirm.style.display = "none";
                }
            }
        }



    // toggle between read and not read
    var shuffleButton = document.getElementsByClassName("checkbox");
    var toggle = document.getElementsByClassName("toggle");
        for(let i = 0; i < shuffleButton.length; i++) {

            shuffleButton[i].onclick = function(){
                if(shuffleButton[i].checked === true) {
                    toggle[i].innerHTML = "Read";
                }else{
                    toggle[i].innerHTML = "Not read yet";
                }
            }
        }
    