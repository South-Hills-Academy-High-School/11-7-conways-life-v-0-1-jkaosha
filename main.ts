function drawGrid () {
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
                    `, SpriteKind.Player)
                gridSprite.left = currentX
                gridSprite.top = currentY
                gridSprites.push(gridSprite)
            }
            currentX += 10
        }
        currentY += 10
    }
}
let gridSprite: Sprite = null
let currentX = 0
let currentY = 0
let gridSprites: Sprite[] = []
let grid: number[][] = []
let rowTemplate = [
1,
1,
1,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0
]
grid = []
for (let index = 0; index < 12; index++) {
    grid.push(rowTemplate)
}
game.onUpdate(function () {
    drawGrid()
})
