import React, { Component } from 'react'
import imgs from './imgs.js'

class Category extends Component {
    render() {
        return (
            <div className="category">
                <div className="category-circle"
                    style={{ backgroundImage: `url(${imgs[this.props.id]})` }}></div>
                <div className="category-text">{this.props.children}</div>
            </div >
        )
    }
}

export default Category;