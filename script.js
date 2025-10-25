const daysSpan = document.querySelector(".days").firstElementChild
const hoursSpan = document.querySelector(".hours").firstElementChild
const minutesSpan = document.querySelector(".minutes").firstElementChild
const secondsSpan = document.querySelector(".seconds").firstElementChild
const quotes = ['"Do not believe in what you can see. What truly matters is what you cannot."', '"The moon can be treacherous."', '"If mortals can turn to the gods when they are powerless... then who do the gods turn to when they have nothing left to give?"']

document.querySelector("p").innerHTML = quotes[Math.floor(Math.random() * quotes.length)]

function getTimeLeftInMs() {
    const ColumbinaDate = new Date("2026-01-14T04:00:00")
    const currentDate = new Date().getTime()
    const difference = ColumbinaDate - currentDate
    return difference
}

function formatNumber(n) {
    return n < 10 ? `0${n}` : n
}


function countDownMaker() {
    const difference = getTimeLeftInMs()

    daysSpan.innerHTML = formatNumber(Math.floor(difference / (1000 * 60 * 60 * 24)))
    hoursSpan.innerHTML = formatNumber(Math.floor(difference / (1000 * 60 * 60) % 24))
    minutesSpan.innerHTML = formatNumber(Math.floor(difference / (1000 * 60) % 60))
    secondsSpan.innerHTML = formatNumber(Math.floor(difference / 1000) % 60)

    setInterval(countDownMaker, 1000)
}

countDownMaker()