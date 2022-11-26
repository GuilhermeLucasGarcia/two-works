import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../../components/Header';
import GlobalStyles from '../../styles/GlobalStyles';
import './App.css';

function index() {
  return (
   <>
      <Header></Header>
    
    <GlobalStyles />
   </>
  );
}

export default index;
