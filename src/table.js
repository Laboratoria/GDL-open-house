    
    
    //.....Lee Asistencia de coleccion estudiantes.....
    
    let tabla=document.getElementById('tablaAsistencia');
    console.log("db", db);
    db.collection("estudiantes").get().then((querySnapshot)=>{
      tabla.innerHTML='';
        querySnapshot.forEach((doc)=>{
          console.log(`${doc.id}=>${doc.data().name}`);
            tabla.innerHTML+=`<tr>
           <th scope="row">${doc.data().name}</th>
            <td>${doc.data().fecha}</td>
            <td>${doc.data().hora}</td>
            <td>${doc.data().asistencia}</td>
            <td>${doc.data().falta}</td>
            <td>${doc.data().retardo}</td>
            <td>${doc.data().dropOut}</td>
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