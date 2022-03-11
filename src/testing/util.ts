import clc from 'cli-color'

export function assert(name: string, except: any, value: any) {
    console.log(`${name}`);
    if (except === value) {
        console.log(clc.green(`✓ test passed!`));
    }
    else {
        console.log(clc.red(`✗ test failed! Found ${value}, but expected ${except}`));
    }
}