// console.log('Hello this is the callbacks');


function greeting(name){
    alert('Hello ' + name)
}

function processUserInput(callback){
    var name = prompt("What is your name? ");
    callback(name)
}

function leaving(name){
    alert('Goodbye ' + name)
}

// processUserInput(greeting);
// processUserInput(leaving);

// JavaScript Callback Function
/*
    Simply put: A Callback is a function that is to be executed after another
    function has finished its execution - hence the name callback.

    More Complex Definition: In JavaScript, functions are objects. Because of this,
    functions can take other functions as arguments(parameters), and can return functions
    by other functions.

    Functions that do this are called "higher - Order functions". Any function,
    that is passed as an argument is called a "Callback function".

    SOOOO...why do we need them?

    The reason for this is, because of the JavaScript Event Loop. In a nutshell
    JavaScript is an event driven language so this means, that instead of waiting for 
    a response before moving on, JS will keep executing while listening for other events.
*/


// Basic Callback with the DOM and button

// let myButton = document.getElementById('btn');
// console.log(myButton);

// function buttonClicked(){
//     console.log("The button has been clicked!")
// }

// myButton.addEventListener('click', buttonClicked);



// Async Example


// function first(){
//     console.log('First Started');
//     setTimeout(
//         () => console.log('First Ended'),
//         3000
//     );
// }


// function second(){
//     console.log('Second Started');
//     console.log('Second Ended');
// }

// first();
// second();

// "Real World" Example


// function downloadSong(songName){
//     console.log(`Starting download of ${songName}...`)
//     setTimeout(() => {
//         // Script to download the song
//         console.log(`Finished downloading ${songName}`)
//     }, 3000)
//     return songName
// };


// function playSong(song){
//     console.log(`Playing ${song}...`)
// };


// let song = downloadSong('Norwegian Wood');
// playSong(song);



function downloadSong(songName, callback){
    console.log(`Starting download of ${songName}...`)
    setTimeout(() => {
        // Script to download the song
        console.log(`Finished downloading ${songName}`)
        // Execute callback once finished downloading
        callback(songName)
    }, 3000)
    return songName
};


function playSong(song){
    console.log(`Playing ${song}...`)
};


// downloadSong('Norwegian Wood', playSong);
// downloadSong('In My Life', (s) => {console.log(`Sending ${s} to friend`)})


let song1 = 'Help!';
let song2 = 'While My Guitar Gently Weeps';
let song3 = 'Blackbird';


// downloadSong(song1, (s) => {
//     console.log(`Saving ${s} to file`);
//     downloadSong(song2, (s) => {
//         console.log(`Saving ${s} to file`);
//         downloadSong(song3, (s) => {
//             console.log(`Saving ${s} to file`);
//         })
//     })
// })


/*
    Though Callbacks give us more functionality...they also introduce
    their own problem: Callback Hell

    Something that looks like this:
    function1( () => {
        function2( () => {
            function3( () => {
                function4( () => {
                    // Maybe do something here... 🤷
                })
            })
        })
    })
*/


// Handling Errors
function downloadSong2(songName, callbackSuccess, callbackFail){
    console.log(`Starting download of ${songName}...`);
    setTimeout(() => {
        // Script to download the song
        console.log(`Finished downloading ${songName}`)

        // Fake error simulation
        let isValid = songName.length !== 0;
        // Execute callback once finished downloading
        isValid ? callbackSuccess(songName) : callbackFail(songName)
    }, 3000)
}


let songRequest = ''
downloadSong2(songRequest,
    (s) => console.log(`Playing ${s}`),
    (s) => console.error(`Failed to download ${s}`)
)