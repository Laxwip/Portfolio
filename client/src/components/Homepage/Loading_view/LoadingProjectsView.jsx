import React from 'react'
import './LoadingProjectsView.scss';

export default function LoadingProjectsView() {
  return (
    <div className='loading_Projects_view'>
      <div className="loading_info">
        <div className="loading_title"></div>
        <div className="loading_subtitle"></div>
        <div className="loading_description"></div>
        <div className="loading_tags">
          <div className="loading_tag"></div>
          <div className="loading_tag"></div>
          <div className="loading_tag"></div>
          <div className="loading_tag"></div>
          <div className="loading_tag"></div>
          <div className="loading_tag"></div>
          <div className="loading_tag"></div>
          <div className="loading_tag"></div>
          <div className="loading_tag"></div>
          <div className="loading_tag"></div>
        </div>
        <div className="loading_buttons">
          <div className="loading_button"></div>
          <div className="loading_button"></div>
        </div>
      </div>
      <div className="loading_image">
        <div className="loading_image_content"></div>
      </div>
    </div>
  )
}
