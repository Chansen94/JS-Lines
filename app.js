


let friends = ['Meghann', 'Rain', 'Shelby', 'Matt', 'Kendall']

let friend = 0;

let howMuchBeer = 100

while (friend < friends.length) {

    name = friends[friend]

    let i = 100;

    while (i > 0) {

        if (i >= howMuchBeer) {
            console.log(friends[friend] + ':')
            
        } else if (i > 1) {
            console.log(i + ' lines of code in the file, ' + i + ' lines of code; ' + name + ' strikes one out, clears it all out, ' + (i-1) + ' lines of code in the file')
            
        } else {
            console.log(i + ' line of code in the file, ' + i + ' line of code; ' + name + ' strikes one out, clears it all out, no more lines of code in the file')
            
        }
        i--
    }
    friend ++
}