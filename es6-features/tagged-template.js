console.log('---------- Tagged Template ------------');
console.log('\n');

const units = 'USD';
const dollars = '9';
const cents = '';

const css = ['units', 'value', 'cents'];

function applyStyle(template, ...args) {
    return template.reduce((old, current, index) => {
        index = index - 1;
        const arg = args[index];
        const interpolate = arg ? `<span class="${css[index]}">${arg}</span>` : arg;

        return old + interpolate + current;
    });
}

const template = applyStyle`${units} ${dollars}${cents}`;

console.log(template);
