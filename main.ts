basic.forever(function () {
    pins.analogWritePin(AnalogPin.P2, 500)
    basic.pause(200)
    pins.analogWritePin(AnalogPin.P2, 0)
    basic.pause(200)
})
