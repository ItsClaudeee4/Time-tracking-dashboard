const day = document.getElementById("day")
const week = document.getElementById("week")
const month = document.getElementById("month")
const dailyValue = document.querySelectorAll("#dailyValue")
const pastDaily = document.querySelectorAll("#pastDaily")
const WeeklyValue = document.querySelectorAll("#WeeklyValue")
const pastWeekly = document.querySelectorAll("#pastWeekly")
const monthlyValue = document.querySelectorAll("#monthlyValue")
const pastmonthly = document.querySelectorAll("#pastmonthly")

day.addEventListener("click", () => {
    for (let i = 0; i < dailyValue.length; i++) {
        dailyValue[i].classList.remove("hidden")
        pastDaily[i].classList.remove("hidden")
        WeeklyValue[i].classList.add("hidden")
        pastWeekly[i].classList.add("hidden")
        monthlyValue[i].classList.add("hidden")
        pastmonthly[i].classList.add("hidden")
        
    }
    day.style.color = "white"
    week.style.color = "hsl(235, 45%, 61%)"
    month.style.color = "hsl(235, 45%, 61%)"
})
week.addEventListener("click", () => {
    for (let i = 0; i < dailyValue.length; i++) {
        dailyValue[i].classList.add("hidden")
        pastDaily[i].classList.add("hidden")
        WeeklyValue[i].classList.remove("hidden")
        pastWeekly[i].classList.remove("hidden")
        monthlyValue[i].classList.add("hidden")
        pastmonthly[i].classList.add("hidden")
        
    }
    week.style.color = "white"
    day.style.color = "hsl(235, 45%, 61%)"
    month.style.color = "hsl(235, 45%, 61%)"
})

month.addEventListener("click", () => {
    for (let i = 0; i < dailyValue.length; i++) {
        dailyValue[i].classList.add("hidden")
        pastDaily[i].classList.add("hidden")
        WeeklyValue[i].classList.add("hidden")
        pastWeekly[i].classList.add("hidden")
        monthlyValue[i].classList.remove("hidden")
        pastmonthly[i].classList.remove("hidden")
        
    }
    month.style.color = "white"
    week.style.color = "hsl(235, 45%, 61%)"
    day.style.color = "hsl(235, 45%, 61%)"
})




