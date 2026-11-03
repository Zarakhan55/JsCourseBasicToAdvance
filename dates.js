const today = new Date();
today.setHours(0, 0, 0, 0);

const target = new Date(2027, 0, 1);

const msPerDay = 1000 * 60 * 60 * 24;
const days = Math.round((target - today) / msPerDay);

console.log(`${days} days until New Year's Day`);
// On November 3, 2026 this prints: 59 days until New Year's Day