input.onButtonPressed(Button.A, function () {
    led.unplot(posXpion, posYpion)
    posXpion += -1
    led.plot(posXpion, posYpion)
    if (posXpion <= 0) {
        led.plot(0, 4)
    }
    basic.pause(100)
})
input.onButtonPressed(Button.B, function () {
    led.unplot(posXpion, posYpion)
    posXpion += 1
    led.plot(posXpion, posYpion)
    if (posXpion >= 4) {
        led.plot(4, 4)
    }
    basic.pause(100)
})
let posYpion = 0
let posXpion = 0
let posx = randint(0, 4)
let posY = 0
let direction = 1
posXpion = 2
posYpion = 4
let direction_pion = 1
led.plot(posx, posY)
led.plot(posXpion, posYpion)
basic.forever(function () {
    led.unplot(posx, posY)
    posY += direction
    posx += randint(0, 3)
    led.plot(posx, posY)
    if (true) {
    	
    }
    if (posY <= 0) {
        direction = 1
    } else if (posY >= 4) {
        direction = -1
    }
})
