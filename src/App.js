
import './App.css';
import { useQUry } from './hooks/useQuery';
import {gql} from 'graphql-request'

const QUERY = gql`
query{
  times {
    date
    time {
      timeString
      status {
        primaryStatus
        secondaryStatus
      }
    }
  }
}
`
function App() {
    const {data, error} = useQUry(QUERY)
    console.log(error)
  return (
    <>
      <h1>GraphQl</h1>
    
      {data && <h1>{JSON.stringify(data, null, 3)}</h1>}
    </>
  );
  }  

export default App;
