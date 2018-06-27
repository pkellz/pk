document.addEventListener("DOMContentLoaded",function(){
  initParticles();
  const continer = document.getElementsByClassName("container")[0]
  const swSpan = document.getElementById("six-weeks-span")
  const smSpan = document.getElementById("six-months-span")
  const eotSpan = document.getElementById("end-of-term-span")

  const daysInSixWeeks = 42
  const daysInSixMonths = 162
  const today = new Date()

  const sixWeeks = transformDate(today,daysInSixWeeks)
  const sixMonths = transformDate(today,daysInSixMonths)
  const EOT = transformDate(new Date("August 15, 2018 00:00:00"), 0)

  swSpan.innerHTML += sixWeeks
  smSpan.innerHTML += sixMonths
  eotSpan.innerHTML += EOT
})

function initParticles()
{
  particlesJS.load('particles-js', 'assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });
}
function transformDate(targetDate, days)
{
    const dateFormat = targetDate.getDate() + days
    targetDate.setDate(dateFormat)
    const month = targetDate.toString().split(" ")[1]
    const day = targetDate.toString().split(" ")[2]
    const year = targetDate.toString().split(" ")[3]
    const parsedDate = `${month} ${day} ${year}`
    return parsedDate
}
