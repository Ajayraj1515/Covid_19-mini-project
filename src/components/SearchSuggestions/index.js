import {Link} from 'react-router-dom'
import {AiOutlineRight} from 'react-icons/ai'
import './index.css'

const SearchSuggestions = ({statesList}) => (
  <div>
    <ul>
      {statesList.map(eachState => (
        <Link key={eachState.state_code} to={`/state/${eachState.state_code}`}>
          <li>
            <button>
              <p>{eachState.state_name}</p>
              <div>
                {eachState.state_code}
                <AiOutlineRight />
              </div>
            </button>
          </li>
        </Link>
      ))}
    </ul>
  </div>
)

export default SearchSuggestions
