import React from 'react'

export const Card = ( { tagName, title, description, children, renderActionView, primaryClassName } ) => {
  const widgetClassName = `ui-card ${primaryClassName}`

  const TagName = tagName ? tagName : 'div'
  return (
    <TagName className={widgetClassName}>
        {
            (!title || !renderActionView) ?
            <div className="ui-card-header">
                <div className="ui-card-header__left">
                    {
                        title && 
                        <h2 className="ui-card-header__left__title"> { title } </h2>
                    }
                    {
                        description &&
                        <div 
                            className="ui-card-header__left__description"
                            dangerouslySetInnerHTML={{__html: description}}
                        ></div>
                    }
                </div>
                {
                    renderActionView && 
                    <div className="ui-card-header__right">
                        { renderActionView }
                    </div>
                }
            </div> : null
        }
        { children }
    </TagName>
  )
}

// set display name
Card.displayName = 'Card';

// set default props
Card.defaultProps = {
    title: '',
    description: ''
};