import clc from 'cli-color'



function compare(a: any[], b: any[]) : boolean {
	return JSON.stringify(a) === JSON.stringify(b)
}



export function assert(name: string, except: any, value: any) {

	if (except instanceof Array && value instanceof Array) {
		assert(name, JSON.stringify(except), JSON.stringify(value))
		return
	}

	console.log(name);

    if (except === value) {

        console.log(clc.green(`✓ test passed!`));
    }
    else {
        console.log(clc.red(`✗ test failed! Found ${value}, but expected ${except}`));
    }
}

