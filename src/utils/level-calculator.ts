export const LEVEL_EXP_MAP:Record<number,number> = {
    1:100,
    2:200,
    3:400,
    4:800,
    5:1600,
    6:3200,
    7:6400,
    8:12800,
    9:25600,
    10:51200,
}

export function calculateLevelUp(currentExp: number , currentLevel: number){
    let exp = currentExp;
    let level = currentLevel;
    while (exp >= LEVEL_EXP_MAP[level] || 0) {
        exp -= LEVEL_EXP_MAP[level];
        level++
    }

    return {newlevel: level, remainingExp: exp};
}