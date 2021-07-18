bluetooth.onBluetoothConnected(function () {
    midi.playTone(262, music.beat(BeatFraction.Whole))
    strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    robotbit.MotorRunDual(
    robotbit.Motors.M1B,
    150,
    robotbit.Motors.M1A,
    150
    )
    robotbit.MotorRunDual(
    robotbit.Motors.M2A,
    150,
    robotbit.Motors.M2B,
    150
    )
    basic.pause(1000)
    robotbit.MotorStopAll()
})
let strip: neopixel.Strip = null
bluetooth.startUartService()
bluetooth.setTransmitPower(7)
