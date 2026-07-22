ServerEvents.recipes(event =>{
    event.shapeless(Item.of('minecraft:redstone',1),[
        'minecraft:red_dye','gtceu:stone_dust'
    ])
    //红石新合成配方↑
    
    event.shaped(Item.of('minecraft:iron_nugget',6),[
        ['','#forge:tools/hammers',''],
        ['','',''],
        ['','minecraft:iron_ingot',''],
    ])
    //铁粒配方复原（低效化）

    event.shaped(Item.of('minecraft:iron_block',1),[
        ['#forge:plates/iron','#forge:plates/iron','#forge:plates/iron'],
        ['#forge:plates/iron','minecraft:iron_ingot','#forge:plates/iron'],
        ['#forge:plates/iron','#forge:plates/iron','#forge:plates/iron']
    ])
    //铁块配方复原（低效化）

    event.shaped(Item.of('minecraft:slime_ball',4),[
        ['','#forge:tools/hammers',''],
        ['minecraft:water_bucket','gtceu:sticky_resin','minecraft:water_bucket'],
        ['','minecraft:bread','']
    ])
    //黏液球制造

    event.smelting('gtceu:wrought_iron_ingot','minecraft:iron_ingot',5,20*5)//锻铁粉补全
    
    event.shapeless(Item.of('minecraft:copper_block',1),[
        'minecraft:copper_ingot','minecraft:copper_ingot','minecraft:copper_ingot',
        'minecraft:copper_ingot','minecraft:copper_ingot','minecraft:copper_ingot',
        'minecraft:copper_ingot','minecraft:copper_ingot','minecraft:copper_ingot'
    ])//铜块配方补全

    event.shapeless(Item.of('minecraft:netherite_block',1),[
        'minecraft:netherite_ingot','minecraft:netherite_ingot','minecraft:netherite_ingot','minecraft:netherite_ingot','minecraft:netherite_ingot','minecraft:netherite_ingot','minecraft:netherite_ingot','minecraft:netherite_ingot','minecraft:netherite_ingot'
    ])
    //补全下界合金块配方

    event.shapeless(Item.of('touhou_little_maid:smart_slab_empty',1),[
        '#minecraft:wool','#minecraft:wool','#minecraft:wool','#minecraft:wool','minecraft:paper','slashblade:proudsoul_trapezohedron','slashblade:proudsoul_trapezohedron','slashblade:proudsoul_trapezohedron','slashblade:proudsoul_trapezohedron',
    ])
    //魂符制作

    event.shaped(Item.of('twilightforest:uncrafting_table',1),[
       ['avaritia:infinity','avaritia:infinity','avaritia:infinity'],
       ['avaritia:infinity','twilightforest:maze_map_focus','avaritia:infinity'],
       ['avaritia:infinity','avaritia:infinity','avaritia:infinity']
    ])//拆解台配方极度困难化
    event.shaped(Item.of('cyclic:uncrafter',1),[
        ['minecraft:diamond','','minecraft:diamond'],
        ['avaritia:infinity_nugget','cyclic:gem_obsidian','avaritia:infinity_nugget'],
        ['minecraft:calcite','minecraft:calcite','minecraft:calcite']
    ])//分解磨床配方极度困难化
    
    event.remove({id:'twilightforest:uncrafting_table'})//去除原版拆解台配方
    event.remove({id:'cyclic:uncrafter'})//分解磨床配方去除
})

ServerEvents.recipes(event => {
    const { avaritia } = event.recipes;
    avaritia.shaped_table(
            // shapeless is avaritia.shapeless_table
            4,
            "avaritia:infinity_sword",
            [
                "       I ",
                "      III",
                "     III ",
                "    III  ",
                " C III   ",
                "  CII    ",
                "  NC     ",
                " N  C    ",
                "X        ",
            ],
            {
                C: "avaritia:crystal_matrix_ingot",
                I: "avaritia:infinity_ingot",
                N: "avaritia:neutron_ingot",
                X: "avaritia:infinity_catalyst",
            }
        );
    avaritia.shaped_table(1,
        "prts:data_rending_sword",
        [
            "  S",
            " S ",
            "D  "
        ],{
            S:'prts:medium_voltage_wanzi_circuit',
            D:'gtceu:lv_voltage_coil'
        }
    )//数据撕裂剑合成
})


