
import Counter from './modules/counter';

const counter = new Counter();
const counter2 = new Counter();

counter.count = 43;
counter.increment();
counter2.increment();
counter2.increment();

console.log(counter.getCount(), counter2.getCount());