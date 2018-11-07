import React from 'react'
import PropTypes from 'prop-types'

import './commentItem.css'

export default class CommentItem extends React.Component{

    static propTypes = {
        comment:PropTypes.object.isRequired,
        deleteComment:PropTypes.func.isRequired,
        idx:PropTypes.number.isRequired
    }

    handleClick = () => {
        const {comment,deleteComment,idx} = this.props
        //确定后删除
        if(window.confirm(`确定删除${comment.username}的评论吗`)){
            deleteComment(idx)
        }
    }
    render(){
        const {comment} = this.props
        return (
            <div>
                <li className="list-group-item">
                    <div className="handle">
                        <a href="javascript:;" onClick={this.handleClick}>删除</a>
                    </div>
                    <p className="user"><span>{comment.username}</span><span>说:</span></p>
                    <p className="centence">{comment.content}</p>
                </li>
            </div>
        )
    }
}