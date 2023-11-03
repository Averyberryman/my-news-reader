export const getNews = async (search) => {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?apiKey=2e7649fe123b46ab8457ce9dba3aa313&country=us&pageSize=10&q=${search}`)
    const data = await handleErrors(response)
    return data;
  }
  
  const handleErrors = (response) => {
    if(response.ok) {
      return response.json();
    } else {
      throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
    }
  }
  