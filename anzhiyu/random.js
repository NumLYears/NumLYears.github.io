var posts=["2025/03/16/2025course1/","2025/03/23/guide/","2025/03/23/cppfirstcourse/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };