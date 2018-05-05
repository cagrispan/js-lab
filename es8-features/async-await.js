
async function print() {
    try {
        const text = await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ data: 'Wait for me!' });
                // reject({ message: 'Nooooooo' });
            }, 2000);
        });

        console.log(text.data);

    } catch (error) {
        console.error(error.message);
    }
}

async function multiplePromises() {
    try {
        const textPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ data: 'Wait for me, ' });
            }, 2000);
        });

        const namePromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ data: 'Carlos!' });
            }, 3000);
        });

        const [ text, name ] = await Promise.all([textPromise, namePromise]);

        console.log(text.data + name.data);

    } catch (error) {
        console.error(error.message);
    }
}

print();
multiplePromises();

