let light2 = 0
input.onButtonPressed(Button.A, function () {
    light2 = input.lightLevel()
    basic.showNumber(input.lightLevel())
    if (input.lightLevel() < 50) {
        led.setBrightness(255)
    } else if (input.lightLevel() >= 50 && input.lightLevel() < 100) {
        led.setBrightness(128)
    } else if (input.lightLevel() >= 100 && input.lightLevel() < 200) {
        led.setBrightness(64)
    } else {
        led.setBrightness(0)
    }
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
basic.forever(function () {
	
})
