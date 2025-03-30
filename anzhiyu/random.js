var posts=["2025/03/16/2025course1/","2025/03/23/cppfirstcourse/","2025/03/23/guide/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };