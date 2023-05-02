function test(event)
{
    event.preventDefault();
    var amt = document.getElementById('amount').value;
    var des = document.getElementById('description').value;
    var cat = document.getElementById('category').value;

    let myObj = {amt,des,cat};
    
    
    let myObj_serialized = JSON.stringify(myObj)
    console.log(myObj.des)

    localStorage.setItem(myObj.des,myObj_serialized)
   
    showOnScreen(myObj);
}
function showOnScreen(myObj)
{
    let myObj_dserialized = JSON.parse(localStorage.getItem(myObj.des));
    var am = myObj_dserialized.amt
    var a = myObj_dserialized.des;
    var b = myObj_dserialized.cat;
    var ul = document.getElementById('list');
    var li = document.createElement('li');
    li.textContent = "Amount = " + am + " Description = " + a + " Category = " + b;
    li.style.fontWeight = 'bold'
    ul.append(li);
    var btn = document.createElement('button');
    btn.className = 'btn btn-primary btn=sm delete'
    btn.textContent = 'DELETE'
    btn.addEventListener("click", function(e){
        if(confirm('are you sure'))
                {
                    localStorage.removeItem(myObj.des);
                    var li = e.target.parentElement;
                    var item = document.getElementById('list'); 
                    item.removeChild(li);
                }
    });
    li.append(" ",btn)
    //edit button
    var btnEdit = document.createElement('button');
    btnEdit.className = 'btn btn-success btn=sm edit'
    btnEdit.textContent = 'EDIT'
    btnEdit.style.borderRadius = '5 px'
    btnEdit.style.border = 'black'
    btnEdit.addEventListener("click", function(e){
        
                
                    localStorage.removeItem(myObj.des);
                    var li = e.target.parentElement;
                    var item = document.getElementById('list');
                    item.removeChild(li);
                   document.getElementById('amount').value = myObj.amt;
                   document.getElementById('description').value = myObj.des;
                   document.getElementById('category').value = myObj.cat;

                    
                
    });
    li.append(" ",btnEdit)

}

