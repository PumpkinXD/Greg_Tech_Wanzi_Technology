ServerEvents.recipes(event => {
    event.shaped('prts:basic_wanzi_sword', [
        " A ",
        " A ",
        " B "
    ], {
        A: 'prts:basic_wanzi',
        B: 'minecraft:stick'
    })
    event.shaped('prts:compression_type_wanzi_sword', [
        " A ",
        " A ",
        " B "
    ], {
        A: 'prts:compression_type_wanzi',
        B: 'prts:basic_wanzi_sword'
    })
    event.shaped('prts:type_one_wanzi_sword', [
        " A ",
        " A ",
        " B "
    ], {
        A: 'prts:type_one_wanzi',
        B: 'prts:compression_type_wanzi_sword'
    })
})
