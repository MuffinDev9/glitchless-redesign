// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "testLvl":
            case "level1":return tiles.createTilemap(hex`20001000090b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0a040000000000000000000000000000000000000000000000000000000000000504000000000000000000000000000000000000000000000000000000000000050400000000000000000000000000000000000000000000000000000000000005040000000000000000000000000000000000000000000000000000000000000504000000000000000000000000000000000000000000000000000000000000050400000000000000000000000000000000000000000000000000000000000005040000000000000000000000000000000000000000000000000000000000000504000000000000000000000000000000000000000000000000000000000000050400000000000000000000000000000000000000000000000000000000000005040000000000000000000000000000000000000000000000000000000000000504000000000000000000000000000000000000000000000000070600000000050400080000000000000000000000000000000000000000000005040000000005040000000000000000000000000000000000000000000000000504000000000504000000000000000000000000000000000000000000000000050400000000050201010101010101010101010101010101010101010101010103020101010103`, img`
22222222222222222222222222222222
2..............................2
2..............................2
2..............................2
2..............................2
2..............................2
2..............................2
2..............................2
2..............................2
2..............................2
2..............................2
2........................22....2
2........................22....2
2........................22....2
2........................22....2
22222222222222222222222222222222
`, [myTiles.transparency16,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundSouthWest1,sprites.dungeon.darkGroundSouthEast1,sprites.dungeon.darkGroundEast,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.collectibleInsignia,sprites.dungeon.darkGroundNorthWest1,sprites.dungeon.darkGroundNorthEast1,sprites.dungeon.darkGroundSouth], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
