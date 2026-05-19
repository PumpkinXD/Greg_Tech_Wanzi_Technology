ServerEvents.recipes(event => {
    // === 万子科技树武器合成配方 ===
    // 使用万子科技机器制作，符合万子科技流程
    
    // ==================== 基础万子剑 ====================
    
    // 工作台配方（简易版）
    event.shaped('prts:basic_wanzi_sword', [
        " A ",
        " A ",
        " B "
    ], {
        A: 'prts:basic_wanzi',
        B: 'minecraft:stick'
    })
    
    // ==================== 压缩型万子剑 ====================
    
    // 工作台配方（需要前置武器）
    event.shaped('prts:compression_type_wanzi_sword', [
        " A ",
        " A ",
        " B "
    ], {
        A: 'prts:compression_type_wanzi',
        B: 'prts:basic_wanzi_sword'
    })
    
    // ==================== 一型万子剑 ====================
    
    // 工作台配方（需要前置武器）
    event.shaped('prts:type_one_wanzi_sword', [
        " A ",
        " A ",
        " B "
    ], {
        A: 'prts:type_one_wanzi',
        B: 'prts:compression_type_wanzi_sword'
    })
    
    // ==================== 数据撕裂剑 ====================
    


})
