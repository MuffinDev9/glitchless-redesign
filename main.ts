controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    Speed = 200
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0 && !(characterAnimations.matchesRule(mySprite, characterAnimations.rule(Predicate.FacingDown)))) {
        mySprite.vy = -300
    } else if (characterAnimations.matchesRule(mySprite, characterAnimations.rule(Predicate.FacingDown))) {
        if (characterAnimations.matchesRule(mySprite, characterAnimations.rule(Predicate.FacingDown, Predicate.FacingRight))) {
            characterAnimations.clearCharacterState(mySprite)
            characterAnimations.setCharacterState(mySprite, characterAnimations.rule(Predicate.FacingRight))
        } else if (characterAnimations.matchesRule(mySprite, characterAnimations.rule(Predicate.FacingDown, Predicate.FacingLeft))) {
            characterAnimations.clearCharacterState(mySprite)
            characterAnimations.setCharacterState(mySprite, characterAnimations.rule(Predicate.FacingLeft))
        }
    } else if (mySprite.vy != 0) {
        fallspeed = 50
    }
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    fallspeed = 650
})
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    Speed = 100
})
controller.combos.attachSpecialCode(function () {
    tiles.setCurrentTilemap(tilemap`testLvl`)
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.collectibleInsignia)
    Area = "test"
})
let mySprite: Sprite = null
let fallspeed = 0
let Speed = 0
let Area = ""
let Tick = 20
let Sprite_Run = false
Area = "None"
Speed = 100
fallspeed = 650
scene.setBackgroundColor(12)
mySprite = sprites.create(assets.image`PlayerCharRight`, SpriteKind.Player)
mySprite.ay = fallspeed
scene.cameraFollowSprite(mySprite)
characterAnimations.setCharacterState(mySprite, characterAnimations.rule(Predicate.FacingRight))
game.onUpdateInterval(Tick, function () {
    if (controller.left.isPressed()) {
        characterAnimations.clearCharacterState(mySprite)
        characterAnimations.setCharacterState(mySprite, characterAnimations.rule(Predicate.FacingLeft))
    } else if (controller.right.isPressed()) {
        characterAnimations.clearCharacterState(mySprite)
        characterAnimations.setCharacterState(mySprite, characterAnimations.rule(Predicate.FacingRight))
    } else if (controller.down.isPressed()) {
        if (characterAnimations.matchesRule(mySprite, characterAnimations.rule(Predicate.FacingRight))) {
            characterAnimations.clearCharacterState(mySprite)
            characterAnimations.setCharacterState(mySprite, characterAnimations.rule(Predicate.FacingDown, Predicate.FacingRight))
        } else if (characterAnimations.matchesRule(mySprite, characterAnimations.rule(Predicate.FacingLeft))) {
            characterAnimations.clearCharacterState(mySprite)
            characterAnimations.setCharacterState(mySprite, characterAnimations.rule(Predicate.FacingDown, Predicate.FacingLeft))
        }
    } else if (controller.up.isPressed()) {
        if (characterAnimations.matchesRule(mySprite, characterAnimations.rule(Predicate.FacingDown, Predicate.FacingRight))) {
            characterAnimations.clearCharacterState(mySprite)
            characterAnimations.setCharacterState(mySprite, characterAnimations.rule(Predicate.FacingRight))
        } else if (characterAnimations.matchesRule(mySprite, characterAnimations.rule(Predicate.FacingDown, Predicate.FacingLeft))) {
            characterAnimations.clearCharacterState(mySprite)
            characterAnimations.setCharacterState(mySprite, characterAnimations.rule(Predicate.FacingLeft))
        }
    }
})
game.onUpdateInterval(Tick, function () {
    controller.moveSprite(mySprite, Speed, 0)
})
game.onUpdateInterval(Tick, function () {
    mySprite.ay = fallspeed
})
game.onUpdateInterval(Tick, function () {
    if (characterAnimations.matchesRule(mySprite, characterAnimations.rule(Predicate.FacingDown, Predicate.FacingRight))) {
        mySprite.setImage(assets.image`PlayerCrouchRight`)
    } else if (characterAnimations.matchesRule(mySprite, characterAnimations.rule(Predicate.FacingDown, Predicate.FacingLeft))) {
        mySprite.setImage(assets.image`PlayerCrouchLeft`)
    } else if (characterAnimations.matchesRule(mySprite, characterAnimations.rule(Predicate.FacingRight))) {
        mySprite.setImage(assets.image`PlayerCharRight`)
    } else if (characterAnimations.matchesRule(mySprite, characterAnimations.rule(Predicate.FacingLeft))) {
        mySprite.setImage(assets.image`PlayerCharLeft`)
    }
})
