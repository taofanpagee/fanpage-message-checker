async function getPages(accessToken, after) {
    console.log('getPages function called');
    let url = `https://graph.facebook.com/v16.0/me/accounts?fields=name,fan_count,category,link,new_like_count,conversations{unread_count}&limit=10&access_token=${accessToken}`;
  
    if (after) {
      url += `&after=${after}`;
    }
  
    const response = await fetch(url);
    const data = await response.json();
    const pages = data.data;
  
    if (data.paging && data.paging.next) {
      const nextPages = await getPages(accessToken, data.paging.cursors.after);
      return pages.concat(nextPages);
    } else {
      return pages;
    }
  }
  export { getPages };