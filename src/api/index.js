import { API_URLS, LOCALSTORAGE_KEY } from '../utils';

//in config object we get body and catch all config object in custopm config
//body can be present or NULL
const customFetch = async (url, { body, ...customConfig }) => {
  const tokan = window.localStorage.getItem(LOCALSTORAGE_KEY);
  //here sending json as well as resiving json

  // console.log('value', customConfig);
  const headers = {
    'content-type': 'application/json',
    Accept: 'application/json',
  };

  if (tokan) {
    headers.Authorization = `Bearer ${tokan}`;
  }

  //seting uo config

  const config = {
    ...customConfig, //geting all confgration from customConfig
    headers: {
      //geting all the default header that we have created in line no 8
      ...headers,
      ...customConfig.headers, // in customConfig a header also present we spred tem also
    },
  };

  if (body) {
    config.body = JSON.stringify(body);
  }
  try {
    const response = await fetch(url, config); // we are sending url and some configration
    const data = await response.json(); // this confic contain method like post or headers

    if (data.success) {
      return {
        data: data.data,
        success: true,
      };
    }
    throw new Error(data.message);
  } catch (error) {
    console.log(error);
    return {
      message: error.message,
      success: false,
    };
  }
};

export const getPosts = (page = 1, limit = 5) => {
  return customFetch(API_URLS.posts(page, limit), {
    method: 'GET',
  });
};
