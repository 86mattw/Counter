
import Counter from './modules/counter';

const counter = new Counter(20);
const counter2 = new Counter();

counter.increment();
counter2.increment();
counter2.increment();

console.log(counter.getCount(), counter2.getCount());