import { useState } from 'react';
// material
import Visibility from '@material-ui/icons/Visibility';
import AccountCircle from '@material-ui/icons/AccountCircle';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import {
  Grid,
  TextField,
  Button
} from '@material-ui/core';
// components
import Block from '../components/Block';
import UploadSingleFile from './UploadSingleFile';
import { useRouter } from 'next/router';
import * as Multi from '../localize';
import axios from 'axios';
import { LoadingButton } from '@material-ui/lab';
import PublishIcon from '@material-ui/icons/Publish';

// ----------------------------------------------------------------------

const CURRENCIES = [
  { value: 'USD', label: '$' },
  { value: 'EUR', label: '€' },
  { value: 'BTC', label: '฿' },
  { value: 'JPY', label: '¥' }
];

// ----------------------------------------------------------------------

export default function Outlined() {
  const router = useRouter()
  const { locale, locales, defaultLocale, query } = router
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState('');
  const [enTitle, setEnTitle] = useState('');
  const [frTitle, setFrTitle] = useState('');
  const [esTitle, setEsTitle] = useState('');
  const [enParagraph, setEnParagraph] = useState('');
  const [frParagraph, setFrParagraph] = useState('');
  const [esParagraph, setEsParagraph] = useState('');
  const [enHTitle, setEnHTitle] = useState('');
  const [frHTitle, setFrHTitle] = useState('');
  const [esHTitle, setEsHTitle] = useState('');
  const [enHDTitle, setEnHDTitle] = useState('');
  const [frHDTitle, setFrHDTitle] = useState('');
  const [esHDTitle, setEsHDTitle] = useState('');
  const [uploaded, setUploaded] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const submitContents = async () => {
    setIsLoading(true);
    const data = {
      image: uploaded,
      url,
      title: JSON.stringify({'en': enTitle, 'fr': frTitle, 'es': esTitle}),
      paragraph: JSON.stringify({'en': enParagraph, 'fr': frParagraph, 'es': esParagraph}),
      htitle: JSON.stringify({'en': enHTitle, 'fr': frHTitle, 'es': esHTitle}),
      hdtitle: JSON.stringify({'en': enHDTitle, 'fr': frHDTitle, 'es': esHDTitle})
    }
    await axios.post('http://localhost:8080/api/contents/add', data).then((res) => {
      console.log(res);
    });
    setTimeout(()=>{
      setIsLoading(false)
    }, 1000)
  }
  const onChangeImage = async (e) => {
    setFile(e);
    const formData = new FormData();
    formData.append('file', e.uploadFile);
    await axios.post('http://localhost:8080/api/contents/imgupload', formData, {headers: {
      'Content-Type': 'multipart/form-data',
    }}).then((res) => {
      setUploaded(res.data.filename);
    })
  }
  return (
    <Grid container spacing={5}>
      <Grid item xs={12} md={12}>
        <TextField
          fullWidth
          value={url}
          placeholder={Multi.multi[locale].inputURL}
          label="URL"
          onChange={e => setUrl(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} md={12}>
        <Block title={Multi.multi[locale].textTitle}>
          <TextField
            fullWidth
            value={enTitle}
            onChange={e => setEnTitle(e.target.value)}
            placeholder={Multi.multi[locale].enTitle}
            label={Multi.multi[locale].enLabel}
          />
          <TextField
            fullWidth
            value={frTitle}
            onChange={e => setFrTitle(e.target.value)}
            placeholder={Multi.multi[locale].frTitle}
            label={Multi.multi[locale].frLabel}
          />
          <TextField
            fullWidth
            value={esTitle}
            onChange={e => setEsTitle(e.target.value)}
            placeholder={Multi.multi[locale].esTitle}
            label={Multi.multi[locale].esLabel}
          />
          {/* <TextField
            rows={4}
            fullWidth
            multiline
            label="Multiline"
            defaultValue="Default Value"
          /> */}
        </Block>
      </Grid>
      <Grid item xs={12} md={12}>
        <Block title={Multi.multi[locale].textParagraph}>
          <TextField
            fullWidth
            value={enParagraph}
            onChange={e => setEnParagraph(e.target.value)}
            placeholder={Multi.multi[locale].enParagraph}
            label={Multi.multi[locale].enLabel}
          />
          <TextField
            fullWidth
            value={frParagraph}
            onChange={e => setFrParagraph(e.target.value)}
            placeholder={Multi.multi[locale].frParagraph}
            label={Multi.multi[locale].frLabel}
          />
          <TextField
            fullWidth
            value={esParagraph}
            onChange={e => setEsParagraph(e.target.value)}
            placeholder={Multi.multi[locale].esParagraph}
            label={Multi.multi[locale].esLabel}
          />
        </Block>
      </Grid>
      <Grid item xs={12} md={12}>
        <UploadSingleFile value={file} onChange={onChangeImage} locale = {locale}/>
      </Grid>
      <Grid item xs={12} md={12}>
        <Block title={Multi.multi[locale].textHTitle}>
          <TextField
            fullWidth
            value={enHTitle}
            onChange={e => setEnHTitle(e.target.value)}
            placeholder={Multi.multi[locale].enHTitle}
            label={Multi.multi[locale].enLabel}
          />
          <TextField
            fullWidth
            value={frHTitle}
            onChange={e => setFrHTitle(e.target.value)}
            placeholder={Multi.multi[locale].frHTitle}
            label={Multi.multi[locale].frLabel}
          />
          <TextField
            fullWidth
            value={esHTitle}
            onChange={e => setEsHTitle(e.target.value)}
            placeholder={Multi.multi[locale].esHTitle}
            label={Multi.multi[locale].esLabel}
          />
        </Block>
      </Grid>
      <Grid item xs={12} md={12}>
        <Block title={Multi.multi[locale].headDescription}>
          <TextField
            fullWidth
            value={enHDTitle}
            onChange={e => setEnHDTitle(e.target.value)}
            multiline
            placeholder={Multi.multi[locale].enHDTitle}
            label={Multi.multi[locale].enLabel}
          />
          <TextField
            fullWidth
            value={frHDTitle}
            onChange={e => setFrHDTitle(e.target.value)}
            multiline
            placeholder={Multi.multi[locale].frHDTitle}
            label={Multi.multi[locale].frLabel}
          />
          <TextField
            fullWidth
            value={esHDTitle}
            onChange={e => setEsHDTitle(e.target.value)}
            multiline
            placeholder={Multi.multi[locale].esHDTitle}
            label={Multi.multi[locale].esLabel}
          />
        </Block>
      </Grid>
      <Grid item xs={12} md={12}>
        <LoadingButton
          pending={isLoading}
          variant="contained"
          pendingPosition="end"
          onClick={submitContents}
          endIcon={<PublishIcon />}
        >
          {Multi.multi[locale].submit}
        </LoadingButton>
      </Grid>
    </Grid>
  );
}
