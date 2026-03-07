const { execSync } = require('child_process');
try {
    console.log(execSync('git add src/components/comet-card.jsx').toString());
    console.log(execSync('git commit -m "Merge resolved"').toString());
} catch (e) {
    console.log('Error:', e.message);
    console.log(e.stdout ? e.stdout.toString() : '');
}
