import styled from '@emotion/styled';
import {  InputBase} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'


const Search = styled('div')(() => ({
  position: 'relative',
  borderRadius: "8px",
  border:"1px solid #ddd",
  backgroundColor: "#F5F5F5" ,
  background:"#F5F5F5",
  "& .MuiInputBase-root":{
    width:"100% !important"
  }
 


}));
const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
 
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
   color: '#2B3445',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),

    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    wdith:"100%"
  },
}));

function SearchComponenet() {
  return (
    <>
      <Search>
        <SearchIconWrapper>
          <SearchIcon sx={{color:"#bbb"}}/>
        </SearchIconWrapper>
        <StyledInputBase placeholder=" What do you want to buy today...?"/>
      </Search>
    </>

  )
}

export default SearchComponenet