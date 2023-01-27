import React from 'react'
import { useStateValue } from './StateProvider'
import "./SearchPage.css"
import useGoogleSearch from './useGoogleSearch'
import Response from './Response'
import { Link } from 'react-router-dom'
import Search from './Search'
import SearchIcon from '@mui/icons-material/Search';
import DescriptionIcon from '@mui/icons-material/Description';
import ImageIcon from '@mui/icons-material/Image';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import RoomIcon from '@mui/icons-material/Room';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function SearchPage() {
  const [{ term = 'tesla' }, dispatch] = useStateValue()
  const { data } = useGoogleSearch(term)

  // const data = Response

  return (
    <div className='searchpage'>
      <div className="searchpage-header">
        <Link to="/">
          <img className='searchpage-logo' src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="" />
        </Link>
        <div className="searchpage-headerbody">
          <Search hide Buttons />

          <div className="searchpage-options">
            <div className="searchpage-optionsleft">
              <div className="searchpage-option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="searchpage-option">
                <DescriptionIcon />
                <Link to="/news">News</Link>
              </div>
              <div className="searchpage-option">
                <ImageIcon />
                <Link to="/images">Images</Link>
              </div>
              <div className="searchpage-option">
                <LocalOfferIcon />
                <Link to="/shopping">shopping</Link>
              </div>
              <div className="searchpage-option">
                <RoomIcon />
                <Link to="/maps">maps</Link>
              </div>
              <div className="searchpage-option">
                <MoreVertIcon />
                <Link to="/more">more</Link>
              </div>
            </div>
            <div className="searchpage-optionsright">
              <div className="searchpage-option">
                <Link to="/settings">Settings</Link>
              </div>
              <div className="searchpage-option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {true && (
        <div className="searchpage-results">
          <div className="searchpage-resultcount">
            <p>
              About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds) for {term}
            </p>

            {data?.items.map(item => (
              <div className="searchpage-result">
                <a className='searchpage-resultimage'
                  href={item.link}>
                  {item.pagemap?.cse_image?.
                    length > 0 &&
                    item.pagemap?.cse_image
                    [0]?.src && (
                      <img
                        className='searchpage-resultimage'
                        src={
                          item.pagemap?.
                            cse_image?.length
                          > 0 &&
                          item.pagemap?.
                            cse_image[0]?.src
                        }
                        alt=""
                      />
                    )}
                  {item.displayLink}
                </a>
                <a className='searchpage-resulttitle' href={item.link}>
                  <h2>{item.title}</h2>
                </a>
                <p className='searchpage-resultsnippet'>
                  {item.snippet}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default SearchPage