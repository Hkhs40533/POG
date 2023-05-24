input.onGesture(Gesture.LogoUp, function () {
    蛇.change(LedSpriteProperty.Y, 1)
})
input.onGesture(Gesture.LogoDown, function () {
    蛇.change(LedSpriteProperty.Y, -1)
})
input.onGesture(Gesture.TiltLeft, function () {
    蛇.change(LedSpriteProperty.Y, -1)
})
input.onGesture(Gesture.TiltRight, function () {
    蛇.change(LedSpriteProperty.Y, 1)
})
let 蛇: game.LedSprite = null
蛇 = game.createSprite(2, 2)
let 食物 = game.createSprite(randint(0, 4), randint(0, 4))
basic.forever(function () {
    if (蛇.isTouching(食物)) {
        game.addScore(1)
        食物.delete()
        食物 = game.createSprite(randint(0, 4), randint(0, 4))
        basic.pause(100)
    }
    if (game.score() == 5) {
        basic.showLeds(`
            . # . # .
            . . . . .
            # # # # #
            # . . . #
            . # # # .
            `)
        game.gameOver()
    }
})
