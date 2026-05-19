// ==================== 生物掉落表系统 ====================
// 根据生物血量和击杀难度分级：
// 等级1 (20HP以下): 基础万子、微塑料块
// 等级2 (20-40HP): D型组件、压缩型万子
// 等级3 (40-80HP): 一型万子、C型组件
// 等级4 (80-150HP): MV级材料、纯化C型组件
// 等级5 (150HP以上/Boss): 高级材料、特殊合金

ServerEvents.entityLootTables(event => {
    
    // ==================== 等级1：基础敌对生物 (20HP) ====================
    
    // 僵尸 (20HP) - 最基础的敌对生物
    event.modifyEntity("minecraft:zombie", loot => {
        loot.addPool(pool => {
            pool.entityProperties("killer", {
                type: "minecraft:player"
            })
            pool.addItem("prts:basic_wanzi").weight(5).count([1,3])
            pool.addItem("prts:micro_plastic_block").weight(3).count([1,2])
            pool.addItem("gtceu:stone_dust").weight(2).count([1,4])
            pool.addItem("prts:component_module").weight(5).count([2,5])
            pool.addEmpty(30)
        })
    })
    
    // 骷髅 (20HP) - 远程攻击，稍难
    event.modifyEntity("minecraft:skeleton", loot => {
        loot.addPool(pool => {
            pool.entityProperties("killer", {
                type: "minecraft:player"
            })
            pool.addItem("prts:basic_wanzi").weight(5).count([1,3])
            pool.addItem("prts:micro_plastic_block").weight(3).count([1,2])
            pool.addItem("gtceu:iron_dust").weight(2).count([1,2])
            pool.addItem("prts:component_module").weight(5).count([2,5])
            pool.addEmpty(30)
        })
    })
    
    // 蜘蛛 (16HP) - 移动快，攀爬能力
    event.modifyEntity("minecraft:spider", loot => {
        loot.addPool(pool => {
            pool.entityProperties("killer", {
                type: "minecraft:player"
            })
            pool.addItem("prts:basic_wanzi").weight(4).count([1,2])
            pool.addItem("prts:micro_plastic_block").weight(3).count([1,2])
            pool.addItem("gtceu:copper_dust").weight(2).count([1,2])
            pool.addItem("prts:component_module").weight(5).count([2,5])
            pool.addEmpty(30)
        })
    })
    
    // 洞穴蜘蛛 (12HP) - 有毒，但血少
    event.modifyEntity("minecraft:cave_spider", loot => {
        loot.addPool(pool => {
            pool.entityProperties("killer", {
                type: "minecraft:player"
            })
            pool.addItem("prts:basic_wanzi").weight(3).count([1,2])
            pool.addItem("prts:micro_plastic_block").weight(2).count([1,1])
            pool.addItem("prts:iron_grit_dust_wanzi").weight(1).count([1,1])
            pool.addItem("prts:component_module").weight(5).count([3,6])
            pool.addEmpty(30)
        })
    })
    
    // 僵尸村民 (20HP)
    event.modifyEntity("minecraft:zombie_villager", loot => {
        loot.addPool(pool => {
            pool.entityProperties("killer", {
                type: "minecraft:player"
            })
            pool.addItem("prts:basic_wanzi").weight(5).count([1,3])
            pool.addItem("prts:micro_plastic_block").weight(3).count([1,2])
            pool.addItem("prts:iron_grit_dust_wanzi").weight(1).count([1,1])
            pool.addItem("prts:component_module").weight(5).count([2,5])
            pool.addEmpty(30)
        })
    })
    
    // ==================== 等级2：中等难度生物 (20-40HP) ====================
    
    // 苦力怕 (20HP) - 会爆炸，危险性高
    event.modifyEntity("minecraft:creeper", loot => {
        loot.addPool(pool => {
            pool.entityProperties("killer", {
                type: "minecraft:player"
            })
            pool.addItem("prts:basic_wanzi").weight(6).count([2,4])
            pool.addItem("prts:compression_type_wanzi").weight(3).count([1,2])
            pool.addItem("prts:micro_plastic_block").weight(2).count([1,3])
            pool.addItem("prts:type_d_conductive_circuit").weight(1).count([1,1])
            pool.addItem("prts:component_module").weight(5).count([2,5])
            pool.addEmpty(30)
        })
    })
    
    // 尸壳 (20HP) - 沙漠僵尸，造成饥饿效果
    event.modifyEntity("minecraft:husk", loot => {
        loot.addPool(pool => {
            pool.entityProperties("killer", {
                type: "minecraft:player"
            })
            pool.addItem("prts:basic_wanzi").weight(5).count([1,3])
            pool.addItem("prts:compression_type_wanzi").weight(2).count([1,1])
            pool.addItem("gtceu:stone_dust").weight(3).count([2,4])
            pool.addItem("prts:component_module").weight(5).count([2,5])
            pool.addEmpty(30)
        })
    })
    
    // 流浪者 (20HP) - 雪地骷髅，缓慢效果
    event.modifyEntity("minecraft:stray", loot => {
        loot.addPool(pool => {
            pool.entityProperties("killer", {
                type: "minecraft:player"
            })
            pool.addItem("prts:basic_wanzi").weight(5).count([1,3])
            pool.addItem("prts:compression_type_wanzi").weight(2).count([1,1])
            pool.addItem("gtceu:iron_dust").weight(2).count([1,2])
            pool.addItem("prts:type_d_resistor").weight(1).count([1,1])
            pool.addItem("prts:component_module").weight(5).count([4,7])
            pool.addEmpty(30)
        })
    })
    
    // 溺尸 (20HP) - 水下僵尸，三叉戟攻击
    event.modifyEntity("minecraft:drowned", loot => {
        loot.addPool(pool => {
            pool.entityProperties("killer", {
                type: "minecraft:player"
            })
            pool.addItem("prts:basic_wanzi").weight(5).count([1,3])
            pool.addItem("prts:compression_type_wanzi").weight(2).count([1,2])
            pool.addItem("prts:copper_grit_dust_wanzi").weight(2).count([1,1])
            pool.addItem("prts:type_d_packaging_unit").weight(1).count([1,1])
            pool.addItem("prts:component_module").weight(5).count([4,9])
            pool.addEmpty(30)
        })
    })
    
    // 女巫 (26HP) - 使用药水，较难对付
    event.modifyEntity("minecraft:witch", loot => {
        loot.addPool(pool => {
            pool.entityProperties("killer", {
                type: "minecraft:player"
            })
            pool.addItem("prts:compression_type_wanzi").weight(5).count([1,3])
            pool.addItem("prts:basic_wanzi").weight(4).count([2,4])
            pool.addItem("prts:type_d_conductive_circuit").weight(2).count([1,2])
            pool.addItem("prts:type_d_packaging_unit").weight(1).count([1,1])
            pool.addItem("prts:component_module").weight(5).count([6,9])
            pool.addEmpty(30)
        })
    })
    
    // 幻翼 (20HP) - 飞行，难以击中
    event.modifyEntity("minecraft:phantom", loot => {
        loot.addPool(pool => {
            pool.entityProperties("killer", {
                type: "minecraft:player"
            })
            pool.addItem("prts:compression_type_wanzi").weight(4).count([1,2])
            pool.addItem("prts:basic_wanzi").weight(3).count([1,3])
            pool.addItem("prts:type_d_resistor").weight(2).count([1,1])
            pool.addItem("gtceu:copper_dust").weight(1).count([1,2])
            pool.addItem("prts:component_module").weight(5).count([2,5])
            pool.addEmpty(30)
        })
    })
    
    // ==================== 等级3：困难生物 ====================
    
    // 末影螨 (8HP但成群出现，算中等)
    event.modifyEntity("minecraft:endermite", loot => {
        loot.addPool(pool => {
            pool.entityProperties("killer", {
                type: "minecraft:player"
            })
            pool.addItem("prts:type_one_wanzi").weight(2).count([1,1])
            pool.addItem("prts:compression_type_wanzi").weight(3).count([1,2])
            pool.addItem("prts:type_c_conductive_circuit").weight(1).count([1,1])
            pool.addItem("prts:component_module").weight(5).count([2,5])
            pool.addEmpty(30)
        })
    })
    
    // 卫道士 (24HP) - 高攻击，危险
    event.modifyEntity("minecraft:vindicator", loot => {
        loot.addPool(pool => {
            pool.entityProperties("killer", {
                type: "minecraft:player"
            })
            pool.addItem("prts:type_one_wanzi").weight(4).count([1,2])
            pool.addItem("prts:compression_type_wanzi").weight(3).count([1,3])
            pool.addItem("prts:type_c_conductive_circuit").weight(2).count([1,1])
            pool.addItem("gtceu:steel_dust").weight(1).count([1,2])
            pool.addItem("prts:component_module").weight(5).count([2,5])
            pool.addEmpty(30)
        })
    })
    
    // 唤魔者 (24HP) - 召唤尖牙，很危险
    event.modifyEntity("minecraft:evoker", loot => {
        loot.addPool(pool => {
            pool.entityProperties("killer", {
                type: "minecraft:player"
            })
            pool.addItem("prts:type_one_wanzi").weight(5).count([1,3])
            pool.addItem("prts:type_c_conductive_circuit").weight(3).count([1,2])
            pool.addItem("prts:type_c_resistor").weight(2).count([1,1])
            pool.addItem("prts:low_voltage_wanzi_circuit").weight(1).count([1,1])
            pool.addItem("prts:component_module").weight(5).count([2,5])
            pool.addEmpty(30)
        })
    })
    
    // 掠夺者 (24HP) - 弩攻击
    event.modifyEntity("minecraft:pillager", loot => {
        loot.addPool(pool => {
            pool.entityProperties("killer", {
                type: "minecraft:player"
            })
            pool.addItem("prts:type_one_wanzi").weight(4).count([1,2])
            pool.addItem("prts:compression_type_wanzi").weight(3).count([1,2])
            pool.addItem("prts:type_c_packaging_unit").weight(2).count([1,1])
            pool.addItem("gtceu:iron_dust").weight(1).count([2,3])
            pool.addItem("prts:component_module").weight(5).count([2,5])
            pool.addEmpty(30)
        })
    })
    
    // 劫掠兽 (100HP) - 高血量，高攻击
    event.modifyEntity("minecraft:ravager", loot => {
        loot.addPool(pool => {
            pool.entityProperties("killer", {
                type: "minecraft:player"
            })
            pool.addItem("prts:type_one_wanzi").weight(6).count([2,4])
            pool.addItem("prts:type_c_conductive_circuit").weight(4).count([1,2])
            pool.addItem("prts:type_c_packaging_unit").weight(3).count([1,2])
            pool.addItem("gtceu:steel_ingot").weight(2).count([1,2])
            pool.addItem("prts:medium_voltage_wanzi_circuit").weight(1).count([1,1])
            pool.addItem("prts:component_module").weight(5).count([6,14])
            pool.addEmpty(30)
        })
    })
    
    // 烈焰人 (20HP) - 飞行，火焰攻击，下界生物
    event.modifyEntity("minecraft:blaze", loot => {
        loot.addPool(pool => {
            pool.entityProperties("killer", {
                type: "minecraft:player"
            })
            pool.addItem("prts:type_one_wanzi").weight(5).count([1,2])
            pool.addItem("prts:type_c_conductive_circuit").weight(3).count([1,2])
            pool.addItem("prts:type_c_circuit_cross_domain_actuator").weight(2).count([1,1])
            pool.addItem("gtceu:aluminium_dust").weight(1).count([1,2])
            pool.addItem("prts:component_module").weight(5).count([2,5])
            pool.addEmpty(30)
        })
    })
    
    // 凋灵骷髅 (20HP) - 下界，凋零效果
    event.modifyEntity("minecraft:wither_skeleton", loot => {
        loot.addPool(pool => {
            pool.entityProperties("killer", {
                type: "minecraft:player"
            })
            pool.addItem("prts:type_one_wanzi").weight(5).count([1,3])
            pool.addItem("prts:type_c_resistor").weight(3).count([1,2])
            pool.addItem("prts:type_c_packaging_unit").weight(2).count([1,1])
            pool.addItem("gtceu:steel_dust").weight(2).count([1,2])
            pool.addItem("prts:low_voltage_wanzi_circuit").weight(1).count([1,1])
            pool.addItem("prts:component_module").weight(5).count([2,5])
            pool.addEmpty(30)
        })
    })
    
    // 猪灵蛮兵 (50HP) - 高血量，高攻击
    event.modifyEntity("minecraft:piglin_brute", loot => {
        loot.addPool(pool => {
            pool.entityProperties("killer", {
                type: "minecraft:player"
            })
            pool.addItem("prts:type_one_wanzi").weight(6).count([2,3])
            pool.addItem("prts:type_c_conductive_circuit").weight(4).count([1,2])
            pool.addItem("prts:type_d_high_voltage_transformation_component").weight(2).count([1,1])
            pool.addItem("gtceu:gold_dust").weight(2).count([2,3])
            pool.addItem("prts:medium_voltage_wanzi_circuit").weight(1).count([1,1])
            pool.addItem("prts:component_module").weight(5).count([2,5])
            pool.addEmpty(30)
        })
    })
    
    // ==================== 等级4：精英生物 (80-150HP) ====================
    
    // 末影人 (40HP) - 传送能力，难以击中
    event.modifyEntity("minecraft:enderman", loot => {
        loot.addPool(pool => {
            pool.entityProperties("killer", {
                type: "minecraft:player"
            })
            pool.addItem("prts:type_one_wanzi").weight(6).count([2,4])
            pool.addItem("prts:type_c_purified_conductive_circuit").weight(4).count([1,2])
            pool.addItem("prts:type_c_circuit_cross_domain_actuator").weight(3).count([1,2])
            pool.addItem("gtceu:aluminium_ingot").weight(2).count([1,2])
            pool.addItem("prts:medium_voltage_wanzi_circuit").weight(2).count([1,1])
            pool.addItem("gtceu:ender_pearl_plate").weight(1).count([1,1])
            pool.addItem("prts:component_module").weight(5).count([2,5])
            pool.addEmpty(30)
        })
    })
    
    // 守卫者 (30HP) - 水下，激光攻击
    event.modifyEntity("minecraft:guardian", loot => {
        loot.addPool(pool => {
            pool.entityProperties("killer", {
                type: "minecraft:player"
            })
            pool.addItem("prts:type_one_wanzi").weight(5).count([1,3])
            pool.addItem("prts:type_c_conductive_circuit").weight(4).count([1,2])
            pool.addItem("prts:type_c_risk_management_unit").weight(2).count([1,1])
            pool.addItem("gtceu:stainless_steel_dust").weight(2).count([1,1])
            pool.addItem("prts:low_voltage_wanzi_circuit").weight(1).count([1,1])
            pool.addItem("prts:component_module").weight(5).count([2,5])
            pool.addEmpty(30)
        })
    })
    
    // 远古守卫者 (80HP) - 高血量，采掘疲劳
    event.modifyEntity("minecraft:elder_guardian", loot => {
        loot.addPool(pool => {
            pool.entityProperties("killer", {
                type: "minecraft:player"
            })
            pool.addItem("prts:type_one_wanzi").weight(8).count([3,5])
            pool.addItem("prts:type_c_purified_conductive_circuit").weight(5).count([1,3])
            pool.addItem("prts:type_c_purified_packaging_unit").weight(4).count([1,2])
            pool.addItem("gtceu:stainless_steel_ingot").weight(3).count([1,2])
            pool.addItem("prts:medium_voltage_wanzi_circuit").weight(2).count([1,2])
            pool.addItem("gtceu:mv_electric_motor").weight(1).count([1,1])
            pool.addItem("prts:component_module").weight(5).count([2,5])
            pool.addEmpty(30)
        })
    })
    
    // 潜影贝 (30HP) - 末地，悬浮效果
    event.modifyEntity("minecraft:shulker", loot => {
        loot.addPool(pool => {
            pool.entityProperties("killer", {
                type: "minecraft:player"
            })
            pool.addItem("prts:type_one_wanzi").weight(6).count([2,4])
            pool.addItem("prts:type_c_purified_conductive_circuit").weight(4).count([1,2])
            pool.addItem("prts:type_c_specialized_circuit_group").weight(3).count([1,1])
            pool.addItem("gtceu:aluminium_plate").weight(2).count([1,2])
            pool.addItem("prts:medium_voltage_wanzi_circuit").weight(2).count([1,1])
            pool.addItem("gtceu:ender_eye_plate").weight(1).count([1,1])
            pool.addItem("prts:component_module").weight(5).count([2,5])
            pool.addEmpty(30)
        })
    })
    
    // ==================== 等级5：Boss级生物 (150HP以上) ====================
    
    // 凋灵 (300HP) - Boss，飞行，爆炸攻击
    event.modifyEntity("minecraft:wither", loot => {
        loot.addPool(pool => {
            pool.entityProperties("killer", {
                type: "minecraft:player"
            })
            pool.addItem("prts:purified_type_one_wanzi").weight(10).count([4,8])
            pool.addItem("prts:type_c_purified_conductive_circuit").weight(8).count([2,4])
            pool.addItem("prts:type_c_purified_packaging_unit").weight(6).count([2,3])
            pool.addItem("prts:type_c_purified_circuit_cross_domain_actuator").weight(5).count([1,2])
            pool.addItem("gtceu:waw_ingot").weight(4).count([1,2])
            pool.addItem("prts:medium_voltage_wanzi_circuit").weight(3).count([2,3])
            pool.addItem("gtceu:mv_electric_motor").weight(2).count([1,2])
            pool.addItem("gtceu:stainless_steel_ingot").weight(2).count([2,4])
            pool.addItem("prts:component_module").weight(5).count([20,25])
        })
    })
    
    // 末影龙 (200HP) - Boss，飞行
    event.modifyEntity("minecraft:ender_dragon", loot => {
        loot.addPool(pool => {
            pool.entityProperties("killer", {
                type: "minecraft:player"
            })
            pool.addItem("prts:purified_type_one_wanzi").weight(12).count([5,10])
            pool.addItem("prts:type_c_purified_conductive_circuit").weight(10).count([3,5])
            pool.addItem("prts:type_c_purified_packaging_unit").weight(8).count([2,4])
            pool.addItem("prts:type_c_purified_circuit_cross_domain_actuator").weight(6).count([2,3])
            pool.addItem("gtceu:waw_ingot").weight(5).count([2,3])
            pool.addItem("prts:medium_voltage_wanzi_circuit").weight(4).count([2,4])
            pool.addItem("gtceu:mv_electric_piston").weight(3).count([1,2])
            pool.addItem("gtceu:aluminium_plate").weight(2).count([3,6])
            pool.addItem("gtceu:ender_eye_plate").weight(2).count([1,2])
            pool.addItem("prts:component_module").weight(5).count([40,50])
        })
    })
    
    // 监守者 (500HP) - 深暗之域Boss
    event.modifyEntity("minecraft:warden", loot => {
        loot.addPool(pool => {
            pool.entityProperties("killer", {
                type: "minecraft:player"
            })
            pool.addItem("prts:purified_type_one_wanzi").weight(15).count([6,12])
            pool.addItem("prts:type_c_purified_conductive_circuit").weight(12).count([4,6])
            pool.addItem("prts:type_c_purified_packaging_unit").weight(10).count([3,5])
            pool.addItem("prts:type_c_purified_circuit_cross_domain_actuator").weight(8).count([2,4])
            pool.addItem("prts:type_c_purified_high_voltage_transformation_component").weight(6).count([2,3])
            pool.addItem("gtceu:waw_ingot").weight(6).count([2,4])
            pool.addItem("prts:medium_voltage_wanzi_circuit").weight(5).count([3,5])
            pool.addItem("gtceu:mv_robot_arm").weight(3).count([1,2])
            pool.addItem("gtceu:stainless_steel_plate").weight(3).count([2,4])
            pool.addItem("gtceu:mv_field_generator").weight(1).count([1,1])
            pool.addItem("prts:component_module").weight(5).count([20,50])
        })
    })
    
    // ==================== 特殊：数据撕裂剑额外掉落 ====================
    
    // 为所有敌对生物添加数据撕裂剑特殊掉落
    const hostileMobs = [
        "minecraft:zombie", "minecraft:skeleton", "minecraft:spider", "minecraft:creeper",
        "minecraft:enderman", "minecraft:blaze", "minecraft:witch", "minecraft:vindicator",
        "minecraft:evoker", "minecraft:pillager", "minecraft:ravager", "minecraft:guardian",
        "minecraft:elder_guardian", "minecraft:shulker", "minecraft:wither_skeleton",
        "minecraft:piglin_brute", "minecraft:phantom", "minecraft:drowned", "minecraft:husk",
        "minecraft:stray", "minecraft:cave_spider", "minecraft:zombie_villager", "minecraft:endermite"
    ]
    
    hostileMobs.forEach(mob => {
        event.modifyEntity(mob, loot => {
            loot.addPool(pool => {
                pool.entityProperties("killer", {
                    equipment: {
                        mainhand: {
                            items: ["prts:data_rending_sword"]
                        }
                    }
                })
                pool.addItem("prts:low_voltage_wanzi_circuit").weight(5).count([1,2])
                pool.addItem("prts:medium_voltage_wanzi_circuit").weight(2).count([1,1])
                pool.addItem("prts:abnormal_data").weight(1).count([1,1])
                pool.addItem("prts:component_module").weight(5).count([8,15])
                pool.addEmpty(30)
            })
        })
    })
    
    // Boss级生物的数据撕裂剑特殊掉落
    const bossMobs = ["minecraft:wither", "minecraft:ender_dragon", "minecraft:warden"]
    
    bossMobs.forEach(mob => {
        event.modifyEntity(mob, loot => {
            loot.addPool(pool => {
                pool.entityProperties("killer", {
                    equipment: {
                        mainhand: {
                            items: ["prts:data_rending_sword"]
                        }
                    }
                })
                pool.addItem("prts:medium_voltage_wanzi_circuit").weight(8).count([2,4])
                pool.addItem("prts:abnormal_data").weight(5).count([1,3])
                pool.addItem("prts:component_module").weight(5).count([15,25])
            })
        })
    })
    
    // ==================== 万子武器击杀额外掉落系统 ====================
    
    // 定义所有敌对生物列表
    const allHostileMobs = [
        "minecraft:zombie", "minecraft:skeleton", "minecraft:spider", "minecraft:creeper",
        "minecraft:enderman", "minecraft:blaze", "minecraft:witch", "minecraft:vindicator",
        "minecraft:evoker", "minecraft:pillager", "minecraft:ravager", "minecraft:guardian",
        "minecraft:elder_guardian", "minecraft:shulker", "minecraft:wither_skeleton",
        "minecraft:piglin_brute", "minecraft:phantom", "minecraft:drowned", "minecraft:husk",
        "minecraft:stray", "minecraft:cave_spider", "minecraft:zombie_villager", "minecraft:endermite"
    ]
    
    // 基础万子剑 - 击杀掉落基础材料（使用Tag）
    allHostileMobs.forEach(mob => {
        event.modifyEntity(mob, loot => {
            loot.addPool(pool => {
                pool.entityProperties("killer", {
                    equipment: {
                        mainhand: {
                            items: ["prts:basic_wanzi_sword"]
                        }
                    }
                })
                // 使用Tag统一管理掉落物
                pool.addTag("prts:basic_wanzi_loot", true).weight(8).count([2,4])
                pool.addEmpty(30)
            })
        })
    })
    
    // 压缩型万子剑 - 击杀掉落压缩材料和D型组件（使用Tag）
    allHostileMobs.forEach(mob => {
        event.modifyEntity(mob, loot => {
            loot.addPool(pool => {
                pool.entityProperties("killer", {
                    equipment: {
                        mainhand: {
                            items: ["prts:compression_type_wanzi_sword"]
                        }
                    }
                })
                // 使用Tag统一管理掉落物
                pool.addTag("prts:compressed_wanzi_loot", true)
                pool.addEmpty(30)
            })
        })
    })
    
    // 一型万子剑 - 击杀掉落一型材料和C型组件（使用Tag）
    allHostileMobs.forEach(mob => {
        event.modifyEntity(mob, loot => {
            loot.addPool(pool => {
                pool.entityProperties("killer", {
                    equipment: {
                        mainhand: {
                            items: ["prts:type_one_wanzi_sword"]
                        }
                    }
                })
                // 使用Tag统一管理掉落物
                pool.addTag("prts:alpha_wanzi_loot", true)
                pool.addEmpty(30)
            })
        })
    })
    
    // 数据撕裂剑 - 击杀掉落高级材料和纯化组件（使用Tag）
    // 为所有敌对生物添加数据撕裂剑的通用掉落
    allHostileMobs.forEach(mob => {
        event.modifyEntity(mob, loot => {
            loot.addPool(pool => {
                pool.entityProperties("killer", {
                    equipment: {
                        mainhand: {
                            items: ["prts:data_rending_sword"]
                        }
                    }
                })
                // 使用Tag统一管理掉落物
                pool.addTag("prts:data_sword_loot", true)
                pool.addEmpty(30)
            })
        })
    })
    
    // 数据撕裂剑击杀Boss的额外特殊掉落（使用Tag）
    bossMobs.forEach(mob => {
        event.modifyEntity(mob, loot => {
            loot.addPool(pool => {
                pool.entityProperties("killer", {
                    equipment: {
                        mainhand: {
                            items: ["prts:data_rending_sword"]
                        }
                    }
                })
                // 使用Tag统一管理Boss特殊掉落
                pool.addTag("prts:data_sword_boss_loot", true)
            })
        })
    })
    
})


/*ServerEvents.entityLootTables(event => {
    event.modifyEntity("minecraft:zombie", loot => {
        loot.addPool(pool => {
            pool.entityProperties("killer", {
                type: "minecraft:player"
            })
            pool.addTag("gtceu:waw_yuan",false)
    })
  })
})*/


// ==================== Tag使用说明 ====================
/*
使用Tag定义掉落表的格式示例：

ServerEvents.entityLootTables(event => {
    event.modifyEntity("minecraft:zombie", loot => {
        loot.addPool(pool => {
            pool.entityProperties("killer", {
                type: "minecraft:player"
            })
            // 使用Tag添加掉落物，第二个参数true表示从Tag中随机选择一个物品
            pool.addTag("gtceu:waw_yuan", true)
        })
    })
})

Tag文件位置：kubejs/data/<命名空间>/tags/items/<tag名称>.json

Tag文件格式：
{
    "replace": false,
    "values": [
        "物品ID1",
        "物品ID2",
        "物品ID3"
    ]
}

当前项目使用的武器掉落Tag：
- prts:basic_wanzi_loot - 基础万子剑击杀掉落
  包含：基础万子、微塑料块、石粉
  
- prts:compressed_wanzi_loot - 压缩型万子剑击杀掉落
  包含：压缩型万子、基础万子、D型导电线路、D型封装单元、铁粉
  
- prts:alpha_wanzi_loot - 一型万子剑击杀掉落
  包含：一型万子、压缩型万子、C型导电线路、C型封装单元、C型线路跨域驱动器、钢粉
  
- prts:data_sword_loot - 数据撕裂剑击杀普通生物掉落
  包含：纯化一型万子、一型万子、纯化C型导电线路、纯化C型封装单元、中压万子电路、铝粉、异常数据
  
- prts:data_sword_boss_loot - 数据撕裂剑击杀Boss掉落
  包含：中压万子电路、异常数据、非常规组件

修改掉落物的方法：
1. 打开对应的Tag文件（位于 kubejs/data/prts/tags/items/）
2. 在 "values" 数组中添加或删除物品ID
3. 保存文件后使用 /reload 命令重载即可生效
4. 无需修改任何JavaScript代码
*/
