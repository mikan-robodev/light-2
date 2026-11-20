input.onButtonPressed(Button.A, function () {
    if (!(first_press)) {
        for (let k = 0; k <= positions.length - 1; k++) {
            positions[k] = (positions[k] - 1 + 300) % 300
        }
        scattered = false
        strip.clear()
        for (let q of positions) {
            strip.setPixelColor(q, neopixel.rgb(randint(150, 255), randint(150, 255), randint(150, 255)))
        }
        strip.show()
    }
})
input.onButtonPressed(Button.AB, function () {
    if (first_press) {
        positions = [randint(0, 299)]
        first_press = false
    } else {
        newPos = (positions[positions.length - 1] - 1 + 300) % 300
        positions.push(newPos)
    }
    scattered = false
    strip.clear()
    for (let p of positions) {
        strip.setPixelColor(p, neopixel.rgb(randint(150, 255), randint(150, 255), randint(150, 255)))
    }
    strip.show()
})
input.onButtonPressed(Button.B, function () {
    if (!(first_press)) {
        for (let l = 0; l <= positions.length - 1; l++) {
            positions[l] = (positions[l] + 1) % 300
        }
        scattered = false
        strip.clear()
        for (let r of positions) {
            strip.setPixelColor(r, neopixel.rgb(randint(150, 255), randint(150, 255), randint(150, 255)))
        }
        strip.show()
    }
})
input.onGesture(Gesture.Shake, function () {
    if (!(first_press)) {
        if (!(scattered)) {
            saved_positions = positions.slice()
strip.clear()
            for (let i = 0; i <= positions.length - 1; i++) {
                positions[i] = randint(0, 299)
                strip.setPixelColor(positions[i], neopixel.rgb(randint(150, 255), randint(150, 255), randint(150, 255)))
            }
            strip.show()
            scattered = true
        } else {
            positions = saved_positions.slice()
strip.clear()
            for (let j = 0; j <= positions.length - 1; j++) {
                strip.setPixelColor(positions[j], neopixel.rgb(randint(150, 255), randint(150, 255), randint(150, 255)))
            }
            strip.show()
            scattered = false
        }
    }
})
let newPos = 0
let scattered = false
let strip: neopixel.Strip = null
let first_press = false
let saved_positions: number[] = []
let positions: number[] = []
first_press = true
strip = neopixel.create(DigitalPin.P0, 300, NeoPixelMode.RGB)
positions = []
first_press = true
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (positions.length > 0) {
        positions.pop()
        strip.clear()
        for (let p of positions) {
            strip.setPixelColor(p, neopixel.rgb(randint(150, 255), randint(150, 255), randint(150, 255)))
        }
        strip.show()
    }
    if (positions.length == 0) {
        first_press = true
    }
})