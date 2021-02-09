  //let url = 'http://feeds.bbci.co.uk/news/technology/rss.xml';
  //let url = 'https://blog.drmadhushan.me/feeds/posts/default';
  //let url = 'http://blog.drmadhushan.me/feeds/posts/default';
  const textarea = document.querySelector('#feed-textarea > ul');

  const date = new Date();
  document.querySelector('#date').innerHTML = date.toDateString();

  urls = [
    'http://blog.drmadhushan.me/feeds/posts/default',
    //'https://drmadpro.blogspot.com/feeds/posts/default',
    'http://www.adaderana.lk/rss.php'
  ]

  for (let url of urls){

    feednami.load(url)
    .then(feed => {
      textarea.value = ''
      console.log(feed);
      for(let entry of feed.entries){
          //create a list element
          let li = document.createElement('li');
          //add HTML content to list items
          li.innerHTML = `<h4><a href="${entry.link}">${entry.title}</a><br>${entry.description}<br>${entry.author}</h4>`;
          //append HTML content to list 
          textarea.appendChild(li);
      }
    });
  }
  // textarea.sort();

//Using feednami to fetch RSS feeds
//https://toolkit.sekando.com/docs/en/feednami

//Feeds from BBC News
//https://www.bbc.com/news/10628494#userss