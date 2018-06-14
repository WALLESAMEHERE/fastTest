const arg1 = process.argv[2];
const arg2 = process.argv[3];
const arg3 = process.argv[4];
const arg4 = process.argv[5];
heart = {
    top: [
        '..#...#..',
        '.###.###.',
        '#########',
        '#########',
        '#########',
        '##.###.##',
        '##..#..##'
    ],
    mid: [
        '##.....##'
    ],
    bottom: [
        '###...###',
        '####.####',
        '#########',
        '.#######.',
        '..#####..',
        '...###...',
        '....#....'
    ]
}
let myArr = [];
test2(heart.top, arg2);
test2(heart.mid, arg3);
test2(heart.bottom, arg4);
myArr.map((b) => {
    let goodArr = [];
    let glyph = b.split('');
    for (let i = 0; i < glyph.length; i++) {
        for (let j = 0; j < arg1; j++) {
            goodArr.push(glyph[i])
        }
    }
    const str = goodArr.join('');
    process.stdout.write(str + '\n');
});

function test2(arr, good) {
    let repeatedRow = [];
    arr.map((a) => {
        for (let i = 0; i < good; i++) {
            repeatedRow.push(a);
        }
    });
    myArr.push(...repeatedRow);
}
