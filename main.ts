player.onChat("mobs", function () {
    player.say("Creeperio!")
    for (let index = 0; index < 4; index++) {
        mobs.spawn(mobs.monster(ZOMBIE), randpos(
        pos(-30, 0, -30),
        pos(30, 0, 30)
        ))
    }
})
player.onChat("lumos", function () {
    player.say("lumos")
    gameplay.timeSet(gameplay.time(NIGHT))
    blocks.fill(
    GRASS,
    pos(5, 0, 5),
    pos(7, 0, 7),
    FillOperation.Replace
    )
    blocks.place(BEACON, pos(6, 1, 6))
})
player.onChat("leviosa", function () {
    player.say("Wingardium leviosa")
    mobs.applyEffect(SPEED, mobs.entitiesByType(mobs.monster(ZOMBIE)), 10, 4)
})
player.onChat("r", function () {
    mobs.give(
    mobs.target(NEAREST_PLAYER),
    LEVER,
    1
    )
})
