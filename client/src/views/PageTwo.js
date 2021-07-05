import { useState } from 'react';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import {
  Box,
  Tab,
  Grid,
  Card,
  Tabs,
  Container,
  CardContent,
  CardHeader
} from '@material-ui/core';
import { TabContext, TabList, TabPanel } from '@material-ui/lab';
import Block from '../components/Block';
import Add from './Add';
import ListView from './ListView';
import { useRouter } from 'next/router';
import * as Multi from '../localize';

export default function TabsComponent() {
  const [value, setValue] = useState('1');
  const router = useRouter()
  const { locale, locales, defaultLocale, query } = router
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Grid item xs={12}>
        <Card>
          <CardHeader title={Multi.multi[locale].viewMode} />
          <CardContent>
            <Block>
              <TabContext value={value}>
                <TabList onChange={handleChange}>
                  <Tab
                      key={1}
                      label={Multi.multi[locale].addNew}
                      value={'1'}
                    />
                  <Tab
                    key={2}
                    label={Multi.multi[locale].viewContents}
                    value={'2'}
                  />
                </TabList>
                <Box
                  sx={{
                    p: 2,
                    mt: 2,
                    width: '100%',
                    borderRadius: 1,
                  }}
                >
                  <TabPanel key={1} value={'1'}>
                    <Add/>
                  </TabPanel>
                  <TabPanel key={2} value={'2'}>
                    <ListView locale={locale}/>
                  </TabPanel>
                </Box>
              </TabContext>
            </Block>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}
