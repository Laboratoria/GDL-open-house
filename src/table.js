//Agregar elementos a la coleccion
function guardar (){
   
    db.collection("estudiantes").add({
        name:document.getElementById('name').value,
        sede:document.getElementById('sede').value,
        timezone:document.getElementById('timezone').value,
        role:document.getElementById('role').value
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        document.getElementById('name').value='';
        document.getElementById('sede').value='';
        document.getElementById('timezone').value='';
        document.getElementById('role').value='';
        
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
    }
    
    //.....Lee elementos de coleccion estudiantes.....
    //let tabla=document.getElementById('tabla');
    //db.collection("estudiantes").get().then((querySnapshot)=>{
       // tabla.innerHTML='';
        //querySnapshot.forEach((doc)=>{
          //  console.log(`${doc.id}=>${doc.data().name}`);
            //tabla.innerHTML+=`<tr>
            //<td>${doc.data().name}</td>
            //<td>18515</td>
            //<td>${doc.data().sede}</td>
            //<td>${doc.data().timezone}</td>
            //<td>${doc.data().role}</td>
            //<td><button onClick="editar ('${doc.id}','${doc.data().date')"></button></td>
            //</tr>`
      //  });
    //});
      
    
    
    
    
    
    //.....Lee Asistencia de coleccion estudiantes.....
    
    let tabla=document.getElementById('tablaAsistencia');
    db.collection("estudiantes").get().then((querySnapshot)=>{
      tabla.innerHTML='';
        querySnapshot.forEach((doc)=>{
          console.log(`${doc.id}=>${doc.data().name}`);
            tabla.innerHTML+=`<tr>
           <th scope="row">${doc.data().name}</th>
            <td>${doc.data().fecha}</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td><button class="btn btn-info" onclick="editar('${doc.data().fecha}')">Editar</button></td>
          </tr>`
        });
    });
    
    //.....Edita Asistencia de coleccion estudiantes.....
    function editar (fecha){
        
        var washingtonRef = db.collection("estudents").doc("id");
        let nuevaFecha = new Date ();
        var asistencia = fecha.push(nuevaFecha);   
    // Set the "capital" field of the city 'DC'
    return washingtonRef.update({
        fecha:asistencia
    })
    .then(function() {
        console.log("Document successfully updated!");
    })
    .catch(function(error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
    });
    }