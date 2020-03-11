const encounterTable = [
    {Level: 1, Easy: 25, Medium: 50, Hard: 75, Deadly: 100},
    {Level: 2, Easy: 50, Medium: 100, Hard: 150, Deadly: 200},
    {Level: 3, Easy: 75, Medium: 150, Hard: 225, Deadly: 400},
    {Level: 4, Easy: 125, Medium: 250, Hard: 375, Deadly: 500},
    {Level: 5, Easy: 250, Medium: 500, Hard: 750, Deadly: 1100},
    {Level: 6, Easy: 300, Medium: 600, Hard: 900, Deadly: 1400},
    {Level: 7, Easy: 350, Medium: 750, Hard: 1100, Deadly: 1700},
    {Level: 8, Easy: 450, Medium: 900, Hard: 1400, Deadly: 2100},
    {Level: 9, Easy: 550, Medium: 1100, Hard: 1600, Deadly: 2400},
    {Level: 10, Easy: 600, Medium: 1200, Hard: 1900, Deadly: 2800},
    {Level: 11, Easy: 800, Medium: 1600, Hard: 2400, Deadly: 3600},
    {Level: 12, Easy: 1000, Medium: 2000, Hard: 3000, Deadly: 4500},
    {Level: 13, Easy: 1100, Medium: 2200, Hard: 3400, Deadly: 5100},
    {Level: 14, Easy: 1250, Medium: 2500, Hard: 3800, Deadly: 5700},
    {Level: 15, Easy: 1400, Medium: 2800, Hard: 4300, Deadly: 6400},
    {Level: 16, Easy: 1600, Medium: 3200, Hard: 4800, Deadly: 7200},
    {Level: 17, Easy: 2000, Medium: 3900, Hard: 5900, Deadly: 8800},
    {Level: 18, Easy: 2100, Medium: 4200, Hard: 6300, Deadly: 9500},
    {Level: 19, Easy: 2400, Medium: 4900, Hard: 7300, Deadly: 10900},
    {Level: 20, Easy: 2800, Medium: 5700, Hard: 8500, Deadly: 12700},
]

const monsterNumberMultiplier = [
    {Monsters: "1", ExpMultiplier: 1},
    {Monsters: "2", ExpMultiplier: 1.5},
    {Monsters: "3-6" , ExpMultiplier: 2},
    {Monsters: "7-10", ExpMultiplier: 2.5},
    {Monsters: "11-14", ExpMultiplier: 3},
    {Monsters: "15+", ExpMultiplier: 4}
]

export default encounterTable;