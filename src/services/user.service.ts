import prisma from "../db/prisma";
import { calculateLevelUp } from "../utils/level-calculator";

const getUserById = async (id: number) => {
    return await prisma.user.findUnique({ where: { id } });
};

const createUser = async (username: string) => {
    return await prisma.user.create({
        data: { username },
    })
}

const gainExp = async (id:number, gainExp:number) => {
    const user = await prisma.user.findUnique({ where: { id } });
    if(!user){
        throw new Error("User not found");
    }

    const totalExp = user.exp + gainExp;
    const { newlevel, remainingExp } = calculateLevelUp(totalExp, user.level);

    return await prisma.user.update({
    where: { id },
    data: {
      exp: remainingExp,
      level: newlevel,
    },
  });
}

const getTopUsers = async () =>{
    return await prisma.user.findMany({
        orderBy: [ 
            {level: 'desc'},
            {exp: 'desc'}
        ],
        take: 10,
    })
}

export default { getUserById, createUser, gainExp, getTopUsers };