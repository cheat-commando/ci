function getGreeting(name){
    return "Hi " + name;
};

function displayAge(age) {
    const plural = age === 1 ? '' : 's'
    return `You are ${age} year${plural} old.`
}
module.exports = {
    getGreeting,
    displayAge
}
