export interface MonsterTypeI{
    name: string
    strongAgainst: Array<MonsterTypeI> | string 
    weakAgainst: Array<MonsterTypeI> | string
}
