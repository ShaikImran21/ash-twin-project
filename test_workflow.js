// Test file to trigger GitHub Actions workflows - FIXED VERSION

function testFunction(param1, param2) {
    const modernStyle = 'testing workflows';

    if (param1 === 'test') {
        console.log('This will pass linting and formatting checks');
    }

    return 'has semicolon';
}

const arrow = x => x * 2;
