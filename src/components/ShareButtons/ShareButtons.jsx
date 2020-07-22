import React from 'react'

import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  PinterestShareButton,
  PinterestIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

import CustomTooltip from '../Tooltip/CustomTooltip'

  let url = 'https://covid19bo.diazportela.com/'
  let media = 'https://covid19bo.diazportela.com/covid-19-bo-og.png'
  let quote = 'Datos y estadísticas de Covid-19 en Bolivia y Sudamérica!!!'
  let hashtags = '#QuedateEnCasa'
  let description = 'Covid 19 - Bolivia | Datos y Estadísticas'


function ShareButtons() {
  return (
    <div className="social-share-buttons">
      {/*<FacebookShareButton url="http://covid19bo.diazportela.com/" >
        <FacebookIcon size={32} round={true} />
        <CustomTooltip placement="top" target="tooltipfacook">
          Nro. de veces compartido: {shareCount => <span className="myShareCountWrapper">{shareCount}</span>}
        </CustomTooltip>
        </FacebookShareButton>*/}

        <CustomTooltip placement="top" target="fbShareButton">
          compartir en facebook
        </CustomTooltip>

        <CustomTooltip placement="top" target="twiShareButton">
          compartir en Twitter
        </CustomTooltip>

        <CustomTooltip placement="top" target="linkShareButton">
          compartir en LinkedIn
        </CustomTooltip>

        <CustomTooltip placement="top" target="pinShareButton">
          compartir en Pinterest
        </CustomTooltip>

      <FacebookShareButton url={url} quote={quote} hashtag={hashtags} id='fbShareButton'>
        <FacebookIcon size={32} round={true} />
      </FacebookShareButton>

      <TwitterShareButton url={url} id='twiShareButton'>
        <TwitterIcon size={32} round={true} title={quote} hashtags={hashtags} />
      </TwitterShareButton>

      <LinkedinShareButton url={url} id='linkShareButton'>
        <LinkedinIcon size={32} round={true} title={quote} summary ={description} source={url} />
      </LinkedinShareButton>

      <PinterestShareButton url={url} id='pinShareButton'>
        <PinterestIcon size={32} round={true}  description ={description} media={media} />
      </PinterestShareButton>

      <WhatsappShareButton url={url} className='d-none d-sm-block d-md-none' >
        <WhatsappIcon size={32} round={true}  title={description}  />
      </WhatsappShareButton>
    </div>
  )
}

export default ShareButtons
