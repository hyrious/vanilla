export function sortBy<T>(array: Iterable<T> | ArrayLike<T>, cond: (e: T) => any) {
    Array.from(array).sort((a, b) => cond(a) - cond(b));
}

export function count<T>(array: Iterable<T>, cond: (e: T) => boolean) {
    let count = 0;
    for (const e of array) {
        if (cond(e)) count++;
    }
    return count;
}

export function tally<K extends string | number | symbol>(array: Iterable<K>) {
    const result: Record<string | number | symbol, number> = {};
    for (const e of array) {
        if (e in result) {
            result[e]++;
        } else {
            result[e] = 1;
        }
    }
    return result;
}

export function zip(...arrays: Array<any>[]) {
    return unzip(arrays);
}

export function unzip(arrays: Array<any>[]) {
    return Array(arrays[0].length)
        .fill(0)
        .map((_, i) => arrays.map((array) => array[i]));
}
