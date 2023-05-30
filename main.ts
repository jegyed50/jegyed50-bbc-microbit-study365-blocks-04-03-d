// JEGYED50-BBC-MICROBIT-STUDY365-BLOCKS-04-03-D
input.onButtonPressed(Button.A, function () {
    sense = sense - 50
    Showsense()
})
function Showsense () {
    led.plotBarGraph(
    Math.map(sense, -700, 700, 0, 700),
    700
    )
    basic.pause(1000)
    music.playTone(262, music.beat(BeatFraction.Whole))
}
input.onButtonPressed(Button.AB, function () {
    sense = 350
    Showsense()
})
input.onButtonPressed(Button.B, function () {
    sense = sense + 50
    Showsense()
})
let x = 0
let y = 0
let sense = 0
sense = 350
Showsense()
basic.pause(3000)
basic.clearScreen()
music.playTone(698, music.beat(BeatFraction.Quarter))
basic.forever(function () {
    basic.clearScreen()
    y = input.acceleration(Dimension.Y)
    x = input.acceleration(Dimension.X)
    if (x < sense * -1) {
        x = sense * -1
        music.playTone(698, music.beat(BeatFraction.Quarter))
    }
    if (x > sense) {
        x = sense
        music.playTone(698, music.beat(BeatFraction.Quarter))
    }
    if (y < sense * -1) {
        y = sense * -1
        music.playTone(698, music.beat(BeatFraction.Quarter))
    }
    if (y > sense) {
        y = sense
        music.playTone(698, music.beat(BeatFraction.Quarter))
    }
    x = Math.map(x, sense * -1, sense, 4, 0)
    y = Math.map(y, sense * -1, sense, 4, 0)
    led.plot(x, y)
})
