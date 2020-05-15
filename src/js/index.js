const roman = 'roman';
// roman = 'roman2';
const friends = ['bibi', 'lala'];

friends[0] = 'hyra';
// friends = [];
// friends[0] = null;
friends.pop();

const say = {
  yes() {
    console.log('yes');
  },
  no() {
    console.log('no');
  },
  dontKnow() {
    console.log('dont know');
  },
};
console.log(friends, roman);
console.log(say.no());
