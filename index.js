

function wakeDog(name, breed) {
    return(`Wake ${name} the ${breed}`);    
}

function leashDog(name, breed) {
    return(`Leash ${name} the ${breed}`);
}

function walkToPark(name, breed) {
    return(`Walk to the park with ${name} the ${breed}`);
}

function throwFrisbee(name, breed) {
    return(`Throw the frisbee for ${name} the ${breed}`)    
}

function walkHome(name, breed) {
    return(`Walk home with ${name} the ${breed}`);
}

function unleashDog(name, breed) {
    return(`Unleash ${name} the ${breed}`)
}

const routine = [wakeDog,leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

function exerciseDog(dogName, dogBreed) {
    let result = [];
    let i=0;
    for(i=0; i < routine.length; i++) {    
        result.push(routine[i](dogName, dogBreed));
    }
    return result;
}