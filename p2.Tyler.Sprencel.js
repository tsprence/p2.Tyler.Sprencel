//Def'n of clock widget
let squ1 = {t: 150, s: 60, posX: 10, posY:110, fill: 200}
//Def'n of weather widget
let rec2 = {a: 180, b: 100, posX: 510, posY: 330, fill: 200}
//Def'n of calendar widget
let rec3 = {c: 130, d: 200, posX: 560, posY: 110, fill: 200}
//Def'n of news widget
let rec4 = {e: 680, f: 80, posX: 10, posY: 10, fill: 200}
//Def'n of weight widget
let rec5 = {g: 280, h: 180, posX: 10, posY: 190, fill: 200}
//Def'n of clock icon
let clockIcon = {t: 70, s: 70, posX: 100, posY: 500}
//Def'n of weather icon
let weatherIcon = {t: 70, s: 70, posX: 200, posY: 500}
//Def'n of calendar icon
let calendarIcon = {t: 70, s: 70, posX: 300, posY: 500}
//Def'n of news icon
let newsIcon = {t: 70, s: 70, posX: 400, posY: 500}
//Def'n of weight icon
let weightIcon = {t: 70, s: 70, posX: 500, posY: 500}
//Clock variables
var h, m, mer;
//Calendar variables
var day;
let calendarData
let morning
let midmorning
let evening
var clickedClock, clickedWeather, clickedCalendar, clickedNews, clickedWeight = false;
//Weather variables
let curr_temp
let curr_short_forecast
let weatherData
//News variables
let newsData
let article1, article2, article3, article4, article5, article6
//Weight chart variables
let weightDown, currWeight, goalWeight
let closeIcon

class closeWindows {
    constructor(posX, posY, t, s) {
        this.posX = posX
        this.posY = posY
        this.t = t
        this.s = s
    }

    display() {
        closeIcon = {posX: this.posX, posY: this.posY, t: this.t, s: this.s}
        image(closeWindow, this.posX, this.posY)
    }
}

//Draggable widget class
class Drag_Rect{
    constructor(posX, posY, w, h, r, fill, text, text2, text3, text4, text5, text6, text_fill) {
        this.w = w
        this.h = h
        this.posX = posX
        this.posY = posY
        this.r = r
        this.fill = fill
        this.text = text
        this.text2 = text2
        this.text3 = text3
        this.text4 = text4
        this.text5 = text5
        this.text6 = text6
        this.text_fill = text_fill
        this.is_over = false
        this.drag = false
        this.offsetX = 0
        this.offsetY = 0
        this.type = 'rect'
    }

    display(){
        this.over()
        this.update()
        this.is_over ? fill(150): fill(this.fill)
        fill(0, 0, 0, 50)
        noStroke()
        rect(this.posX, this.posY, this.w, this.h, this.r)
        fill(this.text_fill)
        textAlign(CENTER, CENTER)
        text(this.text, this.posX + (this.w/2), this.posY + 30)
        text(this.text2, this.posX + (this.w/2), this.posY + 70)
        text(this.text3, this.posX + (this.w/2), this.posY + 110)
        text(this.text4, this.posX + (this.w/2), this.posY + 150)
        text(this.text5, this.posX + (this.w/2), this.posY + 20)
        text(this.text6, this.posX + (this.w/2), this.posY + 50)
    }

    update() {
        if (this.drag) {
            this.posX = mouseX + this.offsetX;
            this.posY = mouseY + this.offsetY;
        }
    }

    over(){
        if( mouseX >= this.posX && mouseX <= this.posX + this.w && mouseY >= this.posY && mouseY <= this.posY + this.h){
            this.is_over = true;
        }
        else this.is_over = false;
    }


    _pressed() {
        if (mouseX > this.posX && mouseX < this.posX + this.w && mouseY > this.posY && mouseY < this.posY + this.h) {
            this.drag = true;
            this.offsetX = this.posX - mouseX;
            this.offsetY = this.posY - mouseY;
        }
    }

    released(){
        this.drag = false;
    }

}

function preload() {
    newsData = loadJSON('news.json')
    calendarData = loadJSON('calendar.json')
    weatherData = loadJSON('weather.json')
    weightData = loadJSON('weight.json')
    clock = loadImage('assets/clock.png')
    weather = loadImage('assets/weather.png')
    calendar = loadImage('assets/calendar.png')
    news = loadImage('assets/news.png')
    weight = loadImage('assets/weight.png')
    closeWindow = loadImage('assets/close.png')

}

function checkIcon(icon){
    return mouseX >= icon.posX && mouseX <= icon.posX + icon.s && mouseY >= icon.posY && mouseY <= icon.posY + icon.s;
}

function setup() {
    createCanvas(700, 600)
    //Clock variables defined
    let h = hour()
    let m = minute()
    let mer = h < 12 ? "AM":"PM";
    //Clock formatting
    h = formatting(h % 12)
    m = formatting(m)
    // //Calendar variable defined
    let d = day()

    console.log(weatherData)
    curr_temp = weatherData.curr_temp
    curr_short_forecast = weatherData.curr_short_forecast
    console.log(newsData)
    article1 = newsData.article1
    article2 = newsData.article2
    console.log(calendarData)
    morning = calendarData.morning
    midmorning = calendarData.midmorning
    evening = calendarData.evening

    console.log(weightData)
    weightDown = weightData.PoundsDown
    currWeight = weightData.CurrentWeight
    goalWeight = weightData.GoalWeight

    rect1 = new Drag_Rect(squ1.posX, squ1.posY, squ1.t, squ1.s, 10, squ1.fill, h + ":" + m + " " + mer, "", "", "", "", "",0)
    rect2 = new Drag_Rect(rec2.posX, rec2.posY, rec2.a, rec2.b, 10, rec2.fill, curr_temp + "℉", curr_short_forecast, "", "", "", "",0)
    rect3 = new Drag_Rect(rec3.posX, rec3.posY, rec3.c, rec3.d, 10, rec3.fill, "Nov. " + d, morning, midmorning, evening, "", "",0)
    rect4 = new Drag_Rect(rec4.posX, rec4.posY, rec4.e, rec4.f, 10, rec4.fill, "", "", "", "", "NEWS", article1,0)
    rect5 = new Drag_Rect(rec5.posX, rec5.posY, rec5.g, rec5.h, 10, rec5.fill, weightDown, currWeight, goalWeight, "", "", "", 0)

    close1 = new closeWindows(145, 485, 40, 40)
    close2 = new closeWindows(245, 485, 40, 40)
    close3 = new closeWindows(345, 485, 40, 40)
    close4 = new closeWindows(445, 485, 40, 40)
    close5 = new closeWindows(555, 485, 40, 40)
}

function draw() {
    background(175)
    strokeWeight(4)

    image(clock, 100, 500)
    image(weather, 200, 500)
    image(calendar, 300, 500)
    image(news, 400, 500)
    image(weight, 500, 500)

    if(clickedClock) {
        textSize(32)
        textAlign(CENTER, CENTER)
        rect1.display()
        fill(0)
        close1.display()
    }
    if(clickedWeather) {
        textSize(32)
        textAlign(CENTER, CENTER)
        rect2.display()
        close2.display()
    }
    if(clickedCalendar) {
        textSize(20)
        rect3.display()
        close3.display()
    }
    if(clickedNews) {
        textAlign(TOP, TOP)
        textSize(24)
        rect4.display()
        close4.display()
    }
    if(clickedWeight) {
        textSize(24)
        rect5.display()
        close5.display()
    }
}

function mousePressed() {
    if(checkIcon(clockIcon)) {
        clickedClock = true
    }
    if(checkIcon(weatherIcon)) {
        clickedWeather = true
    } else if(checkIcon(calendarIcon)) {
        clickedCalendar = true
    } else if(checkIcon(newsIcon)) {
        clickedNews = true
    } else if(checkIcon(weightIcon)) {
        clickedWeight = true
    }

    if(checkIcon(close1)) {
        clickedClock = false
    } else if(checkIcon(close2)) {
        clickedWeather = false
    } else if(checkIcon(close3)) {
        clickedCalendar = false
    } else if(checkIcon(close4)) {
        clickedNews = false
    } else if(checkIcon(close5)) {
        clickedWeight = false
    }
    rect1._pressed();
    rect2._pressed();
    rect3._pressed();
    rect4._pressed();
    rect5._pressed();

}

function mouseReleased() {
    rect1.released();
    rect2.released();
    rect3.released();
    rect4.released();
    rect5.released();

}

function formatting(num){

    // Convert to int and check
    // if less than 10
    if(int(num) < 10) {

        // Return the padded number
        return "0" + num;
    }

    // Return the original number if
    // padding is not required
    return num;
}
