import firebase from 'firebase';

let getPosts = (eventId) => {
  let database = firebase.database();
  let posts = [];
  let postsRef = database.ref('/' + eventId.event + '/posts').orderByKey();
  postsRef.on('value', snap => {
    for (let key in snap.val()){
      posts.push(snap.val()[key]);
    }
  });
  return posts;
};
export {getPosts};
