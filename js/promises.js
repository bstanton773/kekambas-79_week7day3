console.log('Hello from promises');

// Callback Hell Problem is solved with Promises!


/*
    In JavaScript, a Promise is an object that returns a value which you hope to receive in the future, but not now.
    Has three states:
    1. Pending: initial state, neither fulfilled nor rejected
    2. Fulfilled: meaning that the operation was completed successfully
    3. Rejected: meaning that the operation failed
*/


// let completed = true;

// let doMyChores = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (completed){
//             resolve('I did my chores!')
//         } else {
//             reject('I was busy and did not do chores')
//         }
//     }, 3000)
// })

// console.log(typeof(doMyChores));
// console.log(doMyChores);


function downloadSong(songName){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (songName.length !== 0){
                resolve(songName)
            } else {
                reject('There was an issue downloading this song')
            }
        }, 3000)
    })
}

// downloadSong('Yesterday').then((s) => {console.log(`${s} is now playing`)}, (err) => {console.error(err)})

// downloadSong('Yellow Submarine')
//     .then(val => {
//         console.log(val + '!!!!')
//         return val.toUpperCase()
//     })
//     .then(data => {console.log(data)})
//     .catch((err) => {
//         console.error(err.toUpperCase());
//         return err + '!!!!'
//     })
//     .finally(() => console.log('Promise Over'))


// Example: Get the price of a user's order based on user id
// userId -> user -> user's order -> calculate the order

function getUser(userId){
    return new Promise((resolve, reject) => {
        console.log(`Getting user ${userId} from the database`)
        setTimeout(() => {
            resolve({
                userId: userId,
                username: "johnqsample"
            })
        }, 1000)
    })
}

function getUserOrder(user){
    return new Promise((res, rej) => {
        console.log(`Getting the orders for ${user.username}`)
        setTimeout(() => {
            // res([
            //     {prodName: 'Computer', price: 1000},
            //     {prodName: 'Pen', price: 10},
            //     {prodName: 'Cup', price: 15}
            // ])
            rej('This user has no orders')
        }, 1000)
    })
}

function getOrderTotal(order){
    return new Promise((resolve, reject) => {
        console.log('Calculating...')
        setTimeout(() => {
            let total = 0;
            for (let item of order){
                total += item.price
            }
            resolve(total)
        }, 1000)
    })
}

getUser(123)
    .then(user => getUserOrder(user))
    .then(order => getOrderTotal(order))
    .then(total => console.log(`Your total is $${total}`))
    .catch(err => console.error(err));



// 
// let user = getUser(123);
// let order = getUserOrder(user);
// let total = getOrderTotal(order);
// console.log(`Your total is ${total}`)

async function getUserOrderTotal(userID){
    try{
        let user = await getUser(userID);
        let order = await getUserOrder(user);
        let total = await getOrderTotal(order);
        console.log(`Your total is ${total}`)
    } catch(err){
        console.error(err)
    }
};