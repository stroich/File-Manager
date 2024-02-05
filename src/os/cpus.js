import os from 'os';

export function cpus() {
    const data = os.cpus();
    console.log(`Overall amount of CPUS: ${data.length}`);

    const result = data.map((el) => {
        return {
            model: el.model,
            'clock rate': `${(el.speed / 1000).toFixed(2)} GHz`
        }
    })

    console.table(result);
}
