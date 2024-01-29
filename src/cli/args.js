const parseArgs = () => {
    const {argv} = process;
    const resultArgsArr = argv.map((arg, index) => {
        if(arg.startsWith('--')) {
            return `${arg.slice(2)} is ${argv[index + 1]}`;
        }
    }).filter((arg) => arg);
    console.log(resultArgsArr.join(', '));
};

parseArgs();