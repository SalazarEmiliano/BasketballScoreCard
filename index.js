let homeScore = document.getElementById("home-score")
let totalHomeScore = 0
let guestScore = document.getElementById("guest-score")
let totalGuestScore = 0

function incrementHomeByOne() {
    totalHomeScore += 1
    homeScore.textContent = totalHomeScore
}

function incrementHomeByTwo() {
    totalHomeScore += 2
    homeScore.textContent = totalHomeScore
}

function incrementHomeByThree() {
    totalHomeScore += 3    
    homeScore.textContent = totalHomeScore
}

function incrementGuestByOne() {
    totalGuestScore += 1
    guestScore.textContent = totalGuestScore
}

function incrementGuestByTwo() {
    totalGuestScore += 2
    guestScore.textContent = totalGuestScore
}

function incrementGuestByThree() {
    totalGuestScore += 3
    guestScore.textContent = totalGuestScore
}

function newGame() {
    totalHomeScore = 0
    totalGuestScore = 0
    homeScore.textContent = totalHomeScore
    guestScore.textContent = totalGuestScore
}
