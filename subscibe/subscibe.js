let data = {
  hero: ""
};
let subscribers = [];

const addSubscribers = fn => {
  subscribers.push(fn);
};
const deliver = name => {
  data.hero = name;
  subscribers.forEach((item, index) => {
    const fn = item;
    fn();
  });
};
addSubscribers(() => {
  console.log(data.hero);
});
deliver("发条");
deliver("狐狸");
deliver("卡牌");
