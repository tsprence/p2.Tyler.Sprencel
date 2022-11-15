class Drag_Rect{
    constructor(w, h, posX, posY, fill, text, text_fill) {
        this.w = w
        this.h = h
        this.posX = posX
        this.posY = posY
        this.fill = fill
        this.text = text
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
        rect(this.posX, this.posY, this.w, this.h)
        fill(this.text_fill)
        textAlign(CENTER, CENTER)
        text(this.text, this.posX + (this.w/2), this.posY + (this.h/2))
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