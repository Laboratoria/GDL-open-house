window.addEventListener('load', function() {
     let today= new Date();

       let date = today.getDate() + '-'+ (today.getMonth()+1)+'-' + today.getFullYear();

        let hour = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    let selectedDeviceId;
    const codeReader = new ZXing.BrowserQRCodeReader()

    function subirAFirebase (nombre){
        db.collection("estudiantes").add({
             name:nombre,
             fecha: date,
              hora: hour,
            
          })
          .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
          })
         .catch(function(error) {
            console.error("Error adding document: ", error);
         });
         }
    console.log('ZXing code reader initialized')
    codeReader.getVideoInputDevices()
        .then((videoInputDevices) => {
            let videoIndex = 0;



            if (videoInputDevices.length >= 1) {
                videoInputDevices.forEach((element) => {
                    console.log(element);
                })
                const sourceSelect = document.getElementById('sourceSelect')

                videoIndex = 1
                console.log(videoInputDevices.length);
                let length = videoInputDevices.length - 1;

                if (videoInputDevices[length].deviceId) {
                    selectedDeviceId = videoInputDevices[length].deviceId;
                    document.getElementById('startButton').addEventListener('click', () => {
                        codeReader.decodeFromInputVideoDevice(selectedDeviceId, 'video').then((result) => {
                            console.log(result)
                            document.getElementById('result').textContent = result.text;
                            subirAFirebase(result.text);
                          var sound = new Howl({
src: ['https://d1490khl9dq1ow.cloudfront.net/sfx/mp3preview/jg-032316-sfx-elearning-correct-answer-sound-1.mp3']
});

sound.play();
                        }).catch((err) => {
                            console.error(err)
                            document.getElementById('result').textContent = err
                        })

                        console.log(`Started continous decode from camera with id ${selectedDeviceId}`)
                    })
                } else {
                    document.getElementById('startButton').addEventListener('click', () => {
                        codeReader.decodeFromInputVideoDevice(undefined, 'video').then((result) => {
                            console.log(result)
                            document.getElementById('result').textContent = result.text
                                                             var sound = new Howl({
src: ['https://d1490khl9dq1ow.cloudfront.net/sfx/mp3preview/jg-032316-sfx-elearning-correct-answer-sound-1.mp3']
});

sound.play();
                        }).catch((err) => {
                            console.error(err)
                            document.getElementById('result').textContent = err
                        })

                        console.log(`Started continous decode from camera with id ${selectedDeviceId}`)
                    })
                }
                console.log(length);
                console.log(selectedDeviceId);
            }

            document.getElementById('resetButton').addEventListener('click', () => {
                codeReader.reset()
                console.log('Reset.')
            })
        })
        .catch((err) => {
            console.error(err)
        })

       
        
});



