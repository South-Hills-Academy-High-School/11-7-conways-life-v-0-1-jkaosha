controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    cursor.y += -10
    cursorGridRow += -1
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    grid[cursorGridRow][cursorGridCol] = 1 + grid[cursorGridRow][cursorGridCol] * -1
    drawGrid()
    console.log(grid[0])
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    cursor.x += -10
    cursorGridCol += -1
})
function eraseGrid () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    cursor.x += 10
    cursorGridCol += 1
})
function drawGrid () {
    eraseGrid()
    gridSprites = []
    currentY = 0
    for (let row of grid) {
        currentX = 0
        for (let gridSpace of row) {
            if (gridSpace == 1) {
                gridSprite = sprites.create(img`
                    7 7 7 7 7 7 7 7 7 7 
                    7 7 7 f 7 7 7 7 7 7 
                    7 7 7 7 7 7 f 7 7 7 
                    7 7 7 7 7 7 7 7 7 7 
                    7 7 7 7 7 7 7 7 7 7 
                    7 7 f 7 7 7 7 f 7 7 
                    7 7 f 7 7 7 f f 7 7 
                    7 7 f f f f f 7 7 7 
                    7 7 7 7 7 7 7 7 7 7 
                    7 7 7 7 7 7 7 7 7 7 
                    `, SpriteKind.Projectile)
                gridSprite.left = currentX
                gridSprite.top = currentY
                gridSprites.push(gridSprite)
            }
            currentX += 10
        }
        currentY += 10
    }
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    cursor.y += 10
    cursorGridRow += 1
})
let gridSprite: Sprite = null
let currentX = 0
let currentY = 0
let gridSprites: Sprite[] = []
let cursorGridCol = 0
let cursorGridRow = 0
let cursor: Sprite = null
let grid: number[][] = []
grid = []
for (let row = 0; row <= 11; row++) {
    grid.push([])
    for (let column = 0; column <= 15; column++) {
        grid[row].push(0)
    }
}
cursor = sprites.create(img`
    3 3 3 3 . . 3 3 3 3 
    3 . . . . . . . . 3 
    3 . . . . . . . . 3 
    3 . . . . . . . . 3 
    . . . . . . . . . . 
    . . . . . . . . . . 
    3 . . . . . . . . 3 
    3 . . . . . . . . 3 
    3 . . . . . . . . 3 
    3 3 3 3 . . 3 3 3 3 
    `, SpriteKind.Player)
cursor.left = 0
cursor.top = 0
cursor.z = 10
cursorGridRow = 0
cursorGridCol = 0
drawGrid()
game.onUpdate(function () {
	
})
