export interface QTest {
    question: string
    answer01: string
    answer02: string
    answer03: string
    ansewr04: string
    answer05: string
}


export const QMap: Map<string, string> = new Map([
    ["진로흥미탐색", "19"],
    ["진로개발준비도검사", "8"],
    ["이공계전공적합도검사", "9"],
    ["주요능력효능감검사", "10"],
]);
