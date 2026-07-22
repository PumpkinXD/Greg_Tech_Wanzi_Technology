// ==================== 生物掉落表系统 ====================
// 根据生物血量和击杀难度分级：
// 等级1 (20HP以下): 基础万子、微塑料块
// 等级2 (20-40HP): D型组件、压缩型万子
// 等级3 (40-80HP): 一型万子、C型组件
// 等级4 (80-150HP): MV级材料、纯化C型组件
// 等级5 (150HP以上/Boss): 高级材料、特殊合金

ServerEvents.entityLootTables(event => {
    
    // 为所有敌对生物添加特殊掉落
    const hostileMobs = [
        "minecraft:zombie", "minecraft:skeleton", "minecraft:spider", "minecraft:creeper",
        "minecraft:enderman", "minecraft:blaze", "minecraft:witch", "minecraft:vindicator",
        "minecraft:evoker", "minecraft:pillager", "minecraft:ravager", "minecraft:guardian",
        "minecraft:elder_guardian", "minecraft:shulker", "minecraft:wither_skeleton",
        "minecraft:piglin_brute", "minecraft:phantom", "minecraft:drowned", "minecraft:husk",
        "minecraft:stray", "minecraft:cave_spider", "minecraft:zombie_villager", "minecraft:endermite",
        "minecraft:slime","touhou_little_maid:fairy"
    ]
    const bossMobs = ["minecraft:wither", "minecraft:ender_dragon", "minecraft:warden"]
    
    hostileMobs.forEach(mob => {
        event.modifyEntity(mob, loot => {
            loot.addPool(pool => {
                pool.setUniformRolls(1,5)
                pool.entityProperties("killer", {
                    type: "minecraft:player"
                })
                pool.addTag("prts:type_d_prts", true).weight(90).count([1,3])
                pool.addTag("prts:lv_treasure", true).weight(1).count([1,2])
                pool.addEmpty(9)
            })
        })
    })//普通生物被玩家击杀后掉落

    hostileMobs.forEach(mob => {
        event.modifyEntity(mob, loot => {
            loot.addPool(pool => {
                pool.setUniformRolls(1,5)
                pool.entityProperties("killer", {
                    equipment: {
                        mainhand: {
                            items: ["prts:basic_wanzi_sword"]
                        }
                    }
                })
                pool.addTag("prts:type_d_prts", true).weight(50).count([2,4])
                pool.addTag("prts:lv_treasure", true).weight(5).count([1,3])
                pool.addEmpty(45)
            })
        })
    })//普通生物使用基础万子剑击杀后掉落

    hostileMobs.forEach(mob => {
        event.modifyEntity(mob, loot => {
            loot.addPool(pool => {
                pool.setUniformRolls(5,10)
                pool.entityProperties("killer", {
                    equipment: {
                        mainhand: {
                            items: ["prts:compression_type_wanzi_sword"]
                        }
                    }
                })
                pool.addTag("prts:type_d_prts", true).weight(50).count([2,4])
                pool.addTag("prts:lv_treasure", true).weight(5).count([1,3])
                pool.addTag("prts:type_d_purified_prts",true).weight(25).count([2,4])
                pool.addEmpty(20)
            })
        })
    })//普通生物使用压缩型万子剑击杀后掉落

    hostileMobs.forEach(mob => {
        event.modifyEntity(mob, loot => {
            loot.addPool(pool => {
                pool.setUniformRolls(10,15)
                pool.entityProperties("killer", {
                    equipment: {
                        mainhand: {
                            items: ["prts:type_one_wanzi_sword"]
                        }
                    }
                })
                pool.addTag("prts:type_d_prts", true).weight(30).count([2,4])
                pool.addTag("prts:type_c_prts", true).weight(30).count([2,4])
                pool.addTag("prts:lv_treasure", true).weight(5).count([1,3])
                pool.addTag("prts:type_d_purified_prts",true).weight(15).count([2,4])
                pool.addEmpty(20)
            })
        })
    })//普通生物使用一型万子剑剑击杀后掉落

    hostileMobs.forEach(mob => {
        event.modifyEntity(mob, loot => {
            loot.addPool(pool => {
                pool.setUniformRolls(15,20)
                pool.entityProperties("killer", {
                    equipment: {
                        mainhand: {
                            items: ["prts:data_rending_sword"]
                        }
                    }
                })
                pool.addTag("prts:type_d_prts", true).weight(30).count([3,6])
                pool.addTag("prts:type_c_prts", true).weight(30).count([2,6])
                pool.addTag("prts:lv_treasure", true).weight(5).count([1,3])
                pool.addTag("prts:mv_treasure", true).weight(5).count([1,3])
                pool.addTag("prts:type_d_purified_prts",true).weight(10).count([3,6])
                pool.addTag("prts:type_c_purified_prts",true).weight(10).count([2,6])
                pool.addEmpty(10)
            })
        })
    })//普通生物使用数据撕裂剑击杀后掉落
        


    bossMobs.forEach(mob => {
        event.modifyEntity(mob, loot => {
            loot.addPool(pool => {
                pool.setUniformRolls(20,30)
                pool.entityProperties("killer", {
                    equipment: {
                        mainhand: {
                            items: ["prts:data_rending_sword"]
                        }
                    }
                })
                pool.addTag("prts:type_d_prts", false).weight(30).count([9,18])
                pool.addTag("prts:type_c_prts", true).weight(30).count([6,18])
                pool.addTag("prts:lv_treasure", false).weight(10).count([6,9])
                pool.addTag("prts:mv_treasure", true).weight(10).count([6,9])
                pool.addTag("prts:type_d_purified_prts",true).weight(10).count([9,18])
                pool.addTag("prts:type_c_purified_prts",true).weight(10).count([6,18])
            })
        })
    })  // Boss级使用数据撕裂剑特殊掉落
    bossMobs.forEach(mob => {
        event.modifyEntity(mob, loot => {
            loot.addPool(pool => {
                pool.setUniformRolls(10,15)
                pool.entityProperties("killer", {
                    type: "minecraft:player"
                })
                pool.addTag("prts:type_d_prts", true).weight(30).count([2,3])
                pool.addTag("prts:type_c_prts", true).weight(30).count([1,3])
                pool.addTag("prts:lv_treasure", true).weight(5).count([1,3])
                pool.addTag("prts:mv_treasure", true).weight(5).count([1,3])
                pool.addTag("prts:type_d_purified_prts",true).weight(10).count([2,3])
                pool.addTag("prts:type_c_purified_prts",true).weight(10).count([2,3])
            })
        })
    })  //BOSS级不使用数据撕裂剑掉落

})
