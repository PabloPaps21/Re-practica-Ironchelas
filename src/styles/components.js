import styled from 'styled-components';

export const StyledNavbar = styled.nav`
  background-color: #dba309;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  a {
      color: #FFF;
      text-decoration: none;
  }
`;

//menu
export const StyledMenuCard = styled.div`
    width: 30%;
    height: 80%;
    border-radius: 10px;
    margin: 5% auto;
    box-sizing: border-box;
    border-radius: 10px;
    background-color: #f5b042;
    display:flex;
    justify-content:center;
    align-items: center;
    top: 0;

    & img {
      width: 100%;
      border-radius:10px 10px 0 0;
      filter: gray; /* IE5+ */
      -webkit-filter: grayscale(1); /* Webkit Nightlies & Chrome Canary */
      -webkit-transition: all .8s ease-in-out;  
    };
    img:hover {
      filter: none;
      -webkit-filter: grayscale(0);
      -webkit-transform: scale(1);
    }
    & p {
      text-decoration: none;
      color: #FFF;
    }
    & article {
      padding: 2% 4%;
      box-sizing: border-box;
      h2 {
        color: #FFF;
        text-decoration: none;
      }
    }
    a {
      text-decoration: none;
    }
    a:visited {
      color: #FFF;
    }
`;

//indivudal cards
export const StyledCards = styled.div`
  width: 25%;
  height: 400px;
  margin: 5% auto;
  box-sizing:border-box;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;
  -webkit-box-shadow: 0px 5px 22px 11px rgba(189,189,189,1);
  -moz-box-shadow: 0px 5px 22px 11px rgba(189,189,189,1);
  box-shadow: 0px 5px 22px 11px rgba(189,189,189,1);
  div {
    width: 80%;
    height: 200px;
    display: flex;
    justify-content:center;
  & img {
    width: 30%;
    border-radius: 10px 10px 0px 0px;
    } 
  }
  article {
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    & h2 {
      text-align: center;
    }
  }
  a  {
    color: #dba309;
    text-decoration: none;
  }
  a:visited {
    color: #dba309;
  }
`;
export const FormAdd  = styled.form`
  input {
    border: 1px solid gray;
    border-radius: 12px;
    width: 100%;
    height: 27px;
    display:flex;
    justify-content: center;
    font-weight: 500;
    font-size: 16px;
  } 
  input::placeholder {
    font-size: 16px;
    font-weight: 500;
  }
  label {
    margin: 20px 0px 3px 0px ;
    font-size:16px
  }
  button {
    margin-top: 30px;
    width: 40%;
    border: 1px solid #dba309;
    background-color: #dba309;
    border-radius: 12px;
    color: #FFF;
    font-size: 18px;
  }
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  align-content: center
`;