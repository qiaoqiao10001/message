import React,{Component} from 'react'
import PropTypes  from 'prop-types'

import CommentItem from '../comment-item/comment-item'
import './commentlist.css'

export default class CommentList extends Component{

    //static  给组件类指定属性
    static propTypes = {
       comments:PropTypes.array.isRequired
    }

    render(){
        //取出comments
        const {comments} = this.props

        return (
            <div>
                <div className="col-md-8">
                    <h3 className="reply">评论回复：</h3>
                    <h2 style={{display:'none'}}>暂无评论，点击左侧添加评论！！！</h2>
                    <ul className="list-group">
                        {
                            comments.map((comment,idx) => <CommentItem key={idx} comment={comment}/>)
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

// CommentList.propTypes = {
//     comments:PropTypes.array.isRequired
// }