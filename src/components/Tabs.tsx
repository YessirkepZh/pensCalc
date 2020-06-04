import React, { Component } from 'react';
import { makeStyles, withStyles, Theme, createStyles, useTheme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import SwipeableViews from 'react-swipeable-views';
import { Box, Paper } from '@material-ui/core';
import Results from './Results'
const AntTabs = withStyles({
  root: {
    borderBottom: '1px solid #e8e8e8',
  },
  indicator: {
    backgroundColor: '#2A6BCB',
  },
})(Tabs);

const AntTab = withStyles((theme: Theme) =>
  createStyles({
    root: {
      textTransform: 'none',
      minWidth: 72,
      fontWeight: theme.typography.fontWeightRegular,
      marginRight: theme.spacing(0),
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:hover': {
        color: '#40a9ff',
        opacity: 1,
      },
      '&$selected': {
        color: '#2A6BCB',
        fontWeight: theme.typography.fontWeightMedium,
      },
      '&:focus': {
        color: '#2A6BCB',
      },
    },
    selected: {},
  }),
)((props: StyledTabProps) => <Tab disableRipple {...props} />);

interface StyledTabsProps {
  value: number;
  onChange: (event: React.ChangeEvent<{}>, newValue: number) => void;
}

interface StyledTabProps {
  label: string;
}



const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  padding: {
    padding: theme.spacing(0),
  },
  demo1: {
    
  },
}));

interface TabPanelProps {
    children?: React.ReactNode;
    dir?: string;
    index: any;
    value: any;
  }
  
function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={0}>
            {children}
          </Box>
        )}
      </div>
    );
  }

function CustomizedTabs(data:any, onClick:any, disabled:any,lang:string) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const theme = useTheme();
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <div className={classes.demo1}>
 
        <AntTabs value={value} onChange={handleChange} aria-label="ant example">
          <AntTab label="Пессимистичный" />
          <AntTab label="Реалистичный" />
          <AntTab label="Оптимистичный" />
        </AntTabs>
        <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction} >
        <Results 
            data={data.EnpfCalculatorPessimist}
            lang = {lang}
            onClick={onClick}
            disabled={disabled}
            
            />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction} >
            <Results 
                data={data.EnpfCalculatorRealist}
                lang = {lang}
                onClick={onClick}
                disabled={disabled}
                />
            </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
            <Results 
                data={data.EnpfCalculatorOptimist}
                lang = {lang}
                onClick={onClick}
                disabled={disabled}
                />
        </TabPanel>
      </SwipeableViews>
       

      </div>
     
    </div>
  )
}
export default ({ data ,onClick,disabled,lang}:any) => 

    <div className="uk-margin-remove">
        {CustomizedTabs(data ,onClick,disabled,lang)}
    </div>           
  
;


