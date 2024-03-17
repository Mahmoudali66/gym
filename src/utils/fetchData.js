export const exerciseOPtions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'ed18eaae4fmshdaf8ab0133aefeap17fc44jsnf2698c424b5c',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'ed18eaae4fmshdaf8ab0133aefeap17fc44jsnf2698c424b5c',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };
  
export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
};