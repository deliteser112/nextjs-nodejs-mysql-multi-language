import React, { useState } from 'react';
import ListTypeConference from './ListTypeConference';
import { getListItemAvatarUtilityClass, Grid } from '@material-ui/core';
import axios from 'axios';

// ----------------------------------------------------------------------
const imagePrefix = "http://localhost:8080/upload/";
export default function ConferenceOverview({locale}) {
  const [contentList, setContentList] = useState([]);
  React.useEffect(()=>{
    async function getList() {
      await axios.post('http://localhost:8080/api/contents/list').then((res) => {
        const result = res.data;
        let listData = [];
        for(let x in result) {
          const hdTitle = JSON.parse(result[x].hdtitle)[locale];
          const hTitle = JSON.parse(result[x].htitle)[locale];
          const paragraph = JSON.parse(result[x].paragraph)[locale];
          const title = JSON.parse(result[x].title)[locale];
          const image = imagePrefix+result[x].image;
          const url = result[x].url;
          const dateObject = new Date(result[x].updatedAt);
          const date = dateObject.getFullYear()+'-'+(dateObject.getMonth()+1)+'-'+dateObject.getDate();
          const id = result[x].id;
          listData.push({
            hdTitle, hTitle, paragraph, title, image, url, date, id
          })
        }
        setContentList(listData);
      });
    }
    getList();
  },[])
  return (
    <Grid container spacing={3}>
      {contentList.map((item, index) => (
        <Grid key={index} item xs={12}>
          <ListTypeConference
            logoURL={item.image}
            title={item.title}
            date={item.date}
            hTitle={item.hTitle}
            hdTitle={item.hdTitle}
            paragraph={item.paragraph}
            url={item.url}
            id={item.id}
          />
        </Grid>
      ))}
    </Grid>
  );
}
